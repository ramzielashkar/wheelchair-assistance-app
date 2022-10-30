import {MdHomeRepairService,MdOutlineGroups, MdBarChart} from "react-icons/md";
export const AdminSideBarData =[
    {
        title : "Service Providers",
        path:"/admin/services/active",
        icon :<MdHomeRepairService size={30}/>
    },
    {
        title : "Clients",
        path:"/admin/clients/active",
        icon :<MdOutlineGroups size={30}/>
    },
    {
        title : "Statistics",
        path:"/admin/stats",
        icon :<MdBarChart size={30}/>
    }
]