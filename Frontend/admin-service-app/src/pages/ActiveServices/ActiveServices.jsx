import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './style.css';
import { useActiveServices } from '../../query/ServiceProviders/useServiceProviders';
import {CircularProgress} from "@mui/material";
import { useMutation } from '@tanstack/react-query';
import EmptyState from '../../components/EmptyState/EmptyState';


const ActiveServices = ()=>{

    //getting active service providers
    const { data: activeServices, isLoading: isLoadingServices, isFetching: isFetchingServices  } = useActiveServices();
    
    const { mutate } = useMutation(["TOGGLE_SERVICE"])

    // if service providers aren't fetched yet
    if(isLoadingServices || isFetchingServices){
        return(
            <CircularProgress/>
        );
    }
    //if no active service providers
    if(activeServices?.service_providers.length==0){
        return(
            <EmptyState content={'No Active Services'}/>
        );
    }
    return(
        <section className="services-container">
            {activeServices?.service_providers?.map((service)=>{
                return(
                <ServiceCard
                name={service.name}
                location={service.location}
                path={"active"}
                content={"service"}
                photo={service.profile_picture}
                id={service._id}
                onClick={()=>{mutate(service._id)}}/>
                )
            })}
            

        </section>    
    );
}


export default ActiveServices;