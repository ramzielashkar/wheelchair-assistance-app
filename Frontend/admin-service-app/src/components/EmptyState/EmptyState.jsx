import './style.css';
import { MdHourglassDisabled, MdInsertPhoto } from "react-icons/md";
const EmptyState=({content})=>{
    return(
        <section className="empty-section flex column">
            <div className="empty-container flex column">
                <MdHourglassDisabled size={200} color={"#3A3A3A"}/>
                <p className="content">{content}</p>
            </div>
        </section>
    );
}
export default EmptyState;