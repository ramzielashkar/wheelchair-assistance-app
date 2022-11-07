import ServiceCard from "../../components/ServiceCard/ServiceCard";
import './style.css';
import { useBannedServices } from "../../query/ServiceProviders/useServiceProviders";
import EmptyState from '../../components/EmptyState/EmptyState'
import { CircularProgress } from "@mui/material";
const BannedServices = () =>{

    //fetching banned service providers
    const { data: bannedServices, isLoading: isLoadingServices, isFetching: isFetchingServices } = useBannedServices();
    //if service providers aren't fetched yet
    if(isLoadingServices || isFetchingServices){
        return(
            <CircularProgress/>
        );
    }
    //if no service providers available
    if(bannedServices.service_providers.length==0){
        return(
            <EmptyState content={'No Banned Services'}/>
        );
    }
    return(
        <section className=" services-container">
        <ServiceCard
        name={"Hospital"}
        path={"banned"}
        content={"service"}/>
    </section>    
    );
    
}
export default BannedServices;