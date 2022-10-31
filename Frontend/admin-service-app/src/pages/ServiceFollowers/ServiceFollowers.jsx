import ServiceCard from "../../components/ServiceCard/ServiceCard";
const ServiceFollowers = ()=>{
    return(
        <section className="flex column clients-section">
            <div className="clients-header flex">
                <p className="clients-title">Followers</p>
            </div>
            <div className="flex clients-container">
            <ServiceCard
            name={"Hospital"}
            content="follower"
            />
            <ServiceCard
            name={"Hospital"}
            content="follower"
            />
            <ServiceCard
            name={"Hospital"}
            content="follower"
            />
            <ServiceCard
            name={"Hospital"}
            content="follower"
            />
            </div>
        </section>
    );
}
export default ServiceFollowers;