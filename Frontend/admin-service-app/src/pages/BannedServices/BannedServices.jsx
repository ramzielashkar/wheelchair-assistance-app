import ServiceCard from "../../components/ServiceCard/ServiceCard";
import './style.css';
const BannedServices = () =>{
    return(
        <section className="flex services-container">
        <ServiceCard
        name={"Hospital"}
        path={"banned"}
        content={"service"}/>
        <ServiceCard
        name={"Hospital"}
        path={"banned"}
        content={"service"}/>
        <ServiceCard
        name={"Hospital"}
        path={"banned"}
        content={"service"}/>
        <ServiceCard
        name={"Hospital"}
        path={"banned"}
        content={"service"}/>

    </section>    
    );
}
export default BannedServices;