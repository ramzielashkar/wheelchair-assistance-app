import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './style.css';
const ActiveServices = ()=>{
    return(
        <section className="flex services-container">
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

export default ActiveServices;