import { FlatList, ScrollView, Text, View } from "react-native";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import styles from "./styles";
const data=[
    {
        text:"We just launched a new meal.",
        name:"Restaurant",
        date:"Oct,10, 12:00PM"

},
{
    text:"We just launched a new meal.",
    name:"Restaurant",
    date:"Oct,10, 12:00PM"

},
{
    text:"We just launched a new meal.",
    name:"Restaurant",
    date:"Oct,10, 12:00PM"

},
]
const Notifications = ()=>{
    return(
        <ScrollView style={styles.root}>
            <View style={styles.notificationsContainer}>
                <FlatList
                data={data}
                renderItem={({item})=>(
                    <NotificationCard
                    data={item}/>
                )}>
                </FlatList>
            </View>
        </ScrollView>
        );
}
export default Notifications;