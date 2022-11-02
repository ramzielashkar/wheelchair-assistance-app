import {MdNotificationAdd,MdOutlineGroups, MdOutlineComment, MdPerson} from "react-icons/md";
export const ServiceSideBarData =[
    {
        title : "Followers",
        path:"/service/followers",
        icon :<MdOutlineGroups size={30}/>
    },
    {
        title : "Send Notification",
        path:"/service/notifications",
        icon :<MdNotificationAdd size={30}/>
    },
    {
        title : "Chats",
        path:"/service/chats",
        icon :<MdOutlineComment size={30}/>
    },
    {
        title : "Profile",
        path:"/service/profile",
        icon :<MdPerson size={30}/>
    }
]