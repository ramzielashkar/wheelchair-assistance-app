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
        path:"/admin/clients/active",
        icon :<MdOutlineComment size={30}/>
    },
    {
        title : "Profile",
        path:"/admin/stats",
        icon :<MdPerson size={30}/>
    }
]