import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './style.css';
import { useActiveServices } from '../../query/ServiceProviders/useServiceProviders';
import {CircularProgress} from "@mui/material";
import { useMutation } from '@tanstack/react-query';

const ActiveServices = ()=>{
    const { data: activeServices, isLoading: isLoadingServices, isFetching: isFetchingServices  } = useActiveServices();
    
    const { mutate } = useMutation(["TOGGLE_SERVICE"])

    if(isLoadingServices || isFetchingServices){
        return(
            <CircularProgress/>
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
                id={service._id}
                onClick={(id = service._id)=>{mutate({id})}}/>
                )
            })}
            

        </section>    
    );
}


export default ActiveServices;