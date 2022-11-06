import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './style.css';
const ActiveClients = ()=>{
    return(
        <section className=" clients-container">
            <ServiceCard
            name={"Hospital"}
            path={"active"}
            />
            <ServiceCard
            name={"Hospital"}
            path={"active"}/>
            <ServiceCard
            name={"Hospital"}
            path={"active"}/>
            <ServiceCard
            name={"Hospital"}
            path={"active"}/>
            <ServiceCard
            name={"Hospital"}
            path={"active"}/>

        </section>    
    );
}

export default ActiveClients;