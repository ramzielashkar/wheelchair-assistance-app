import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './style.css';
const BannedClients = ()=>{
    return(
        <section className="clients-container">
            <ServiceCard
            name={"Hospital"}
            path={"banned"}
            />
            <ServiceCard
            name={"Hospital"}
            path={"banned"}/>
            <ServiceCard
            name={"Hospital"}
            path={"banned"}/>
            <ServiceCard
            name={"Hospital"}
            path={"banned"}/>

        </section>    
    );
}

export default BannedClients;