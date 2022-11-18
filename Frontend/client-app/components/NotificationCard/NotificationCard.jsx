import { Text, View } from "react-native";
import styles from "./styles";

const NotificationCard = ({data})=>{
    return(
        <View style={styles.notificationCard}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.content}>{data.text}</Text>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{data.date}</Text>
            </View>
        </View>
    );
}
export default NotificationCard;