import ServiceCard from "../../components/ServiceCard/ServiceCard";
import './style.css';
const BannedServices = () =>{
    return(
        <section className="flex services-container">
        <ServiceCard
        name={"Hospital"}
        path={"banned"}/>
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
export default BannedServices;