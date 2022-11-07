import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './style.css';
import { useActiveClients } from '../../query/AdminClients/useClients';
import {CircularProgress} from "@mui/material";
import EmptyState from '../../components/EmptyState/EmptyState';

const ActiveClients = ()=>{
    //fetching active clients
    const { data: activeClients, isLoading: isLoadingClients,  isFetching: isFetchingClients  } = useActiveClients();

    //if clients data isn't fetched yet
    if(isLoadingClients || isFetchingClients){
        return(
            <CircularProgress/>
        );
    }
    //if no clients available
    if(activeClients.clients.length==0){
        return(
            <EmptyState content={'No Active Clients'}/>
        );
    }
    return(
        <section className=" clients-container">
            {activeClients?.clients?.map((client)=>{
                return(
                <ServiceCard
                name={client.name}
                path={"active"}
                id={client._id}
                photo={client.profile_picture}
                onClick={(id = client._id)=>{console.log(id)}}/>
                )
            })}
        </section>    
    );
}

export default ActiveClients;