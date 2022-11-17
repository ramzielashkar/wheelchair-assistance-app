import { useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import { useNotifications } from "../../query/notifications/useNotifications";
import styles from "./styles";
const data=[]
const Notifications = ()=>{
    const {data: notifications} = useNotifications();
            notifications?.notifications?.notifications?.map((notification)=>{
                data.push({
                    text: notification.notification,
                    name: notification.service_id.name,
                    date: notification.date
                })
            })
    return(
        <View style={styles.root}>
            <View style={styles.notificationsContainer}>
                <FlatList
                data={data.reverse()}
                renderItem={({item})=>(
                    <NotificationCard
                    data={item}/>
                )}>
                </FlatList>
            </View>
        </View>
        );
}
export default Notifications;