import './style.css';
const NotificationCard = ({content, date})=>{
    return(
        <div className="notification-card flex column">
            <p className="notification-content">{content}</p>
            <div className='flex notification-date'>{date}</div>
        </div>
    );
}

export default NotificationCard;