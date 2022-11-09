import './style.css';
const NotificationCard = ({content, date})=>{
    return(
        <div className="notification-card flex column">
            <p className="notification-content">Good News! We are open till midnight starting tomorrow</p>
            <div className='flex notification-date'>Oct,22</div>
        </div>
    );
}

export default NotificationCard;