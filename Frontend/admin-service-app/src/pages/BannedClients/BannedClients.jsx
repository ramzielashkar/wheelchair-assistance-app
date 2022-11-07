import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './style.css';
import {CircularProgress} from "@mui/material";
import { useBannedClients } from '../../query/AdminClients/useClients';
import EmptyState from '../../components/EmptyState/EmptyState';
import { store } from '../../Redux/store';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../Redux/slices/userSlice';
import { AuthVerify } from '../../authorization/jwtVerify';

const BannedClients = ()=>{

    const navigate = useNavigate();
    //checking jwt token
    const state = AuthVerify();
    if(!state){
        store.dispatch(deleteUser())
        localStorage.setItem('token', '');
        navigate('/')
    }

    //fetching banned clients
    const { data: bannedClients, isLoading: isLoadingClients,  isFetching: isFetchingClients  } = useBannedClients();

    // if clients data still fetching
    if(isLoadingClients || isFetchingClients){
        return(
            <CircularProgress/>
        );
    }
    // if no clients available
    if(bannedClients.clients.length==0){
        return(
            <EmptyState content={'No Banned Clients'}/>
        );
    }

    return(
        <section className="clients-container">
             {bannedClients?.clients?.map((client)=>{
                return(
                <ServiceCard
                name={client.name}
                path={"banned"}
                id={client._id}
                photo={client.profile_picture}
                onClick={(id = client._id)=>{console.log(id)}}/>
                )
            })}

        </section>    
    );
}

export default BannedClients;