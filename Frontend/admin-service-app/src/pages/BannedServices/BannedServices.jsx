import ServiceCard from "../../components/ServiceCard/ServiceCard";
import './style.css';
import { useBannedServices } from "../../query/ServiceProviders/useServiceProviders";
import EmptyState from '../../components/EmptyState/EmptyState'
import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";


const BannedServices = () =>{

    const { mutate } = useMutation(["TOGGLE_SERVICE"])

    //fetching banned service providers
    const { data: bannedServices, isLoading: isLoadingServices, isFetching: isFetchingServices } = useBannedServices();
    //if service providers aren't fetched yet
    if(isLoadingServices || isFetchingServices){
        return(
            <CircularProgress/>
        );
    }
    //if no service providers available
    if(bannedServices?.service_providers.length==0){
        return(
            <EmptyState content={'No Banned Services'}/>
        );
    }
    return(
        <section className=" services-container">
            {bannedServices?.service_providers?.map((service)=>{
                return(
                <ServiceCard
                name={service.name}
                location={service.location}
                path={"banned"}
                content={"service"}
                photo={service.profile_picture}
                id={service._id}
                onClick={()=>{mutate(service._id)}}/>
                )
            })}
    </section>    
    );
    
}
export default BannedServices;