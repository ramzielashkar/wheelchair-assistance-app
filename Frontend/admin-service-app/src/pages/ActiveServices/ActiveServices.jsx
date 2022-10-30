import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './style.css';
const ActiveServices = ()=>{
    return(
        <section className="flex services-container">
            <ServiceCard
            name={"Hospital"}
            path={"active"}
            content={"service"}/>
            <ServiceCard
            name={"Hospital"}
            path={"active"}
            content={"service"}/>
            <ServiceCard
            name={"Hospital"}
            path={"active"}
            content={"service"}/>
            <ServiceCard
            name={"Hospital"}
            path={"active"}
            content={"service"}/>

        </section>    
    );
}

export default ActiveServices;