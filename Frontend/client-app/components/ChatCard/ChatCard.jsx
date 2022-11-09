import styles from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
const ChatCard = ({data, onClick})=>{
    return(
        <TouchableOpacity style={styles.chatCard} onPress={onClick}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:data.img}}></Image>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{data.name}</Text>
                <Text numberOfLines={1} style={styles.content}>{data.content}</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{data.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default ChatCard