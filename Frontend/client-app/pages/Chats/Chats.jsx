import { Text, ScrollView, FlatList, View } from "react-native";
import ChatCard from "../../components/ChatCard/ChatCard";
import styles from "./styles";
const data = [
    {
        img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJyBH7aR8qVizMo5qDuRnGJu8dn_uEmF3EA&usqp=CAU",
        name:"Ramzi",
        content:"Hello, how are you",
        date:"Oct,10, 12:00PM"

    },
    {
        img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJyBH7aR8qVizMo5qDuRnGJu8dn_uEmF3EA&usqp=CAU",
        name:"Marwan",
        content:"Hello, how are youfdfdf dfdfdf dfdfdf dfdfdf dfdfdf ",
        date:"Oct,10, 12:00PM"

    },
    {
        img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJyBH7aR8qVizMo5qDuRnGJu8dn_uEmF3EA&usqp=CAU",
        name:"Karam",
        content:"Hello, how are you",
        date:"Oct,10, 12:00PM"

    },
    {
        img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJyBH7aR8qVizMo5qDuRnGJu8dn_uEmF3EA&usqp=CAU",
        name:"Razan",
        content:"Hello, how are you",
        date:"Oct,10, 12:00PM"

    }
]
const Chats = ({navigation})=>{
    return(
        <View style={styles.root}>
            <View style={styles.chatsContainer}>
                <FlatList
                data={data}
                renderItem={({item})=>(
                    <ChatCard
                    onClick={()=>{navigation.navigate('Chat', {name:item.name})}}
                    data={item}/>
                )}>
                </FlatList>
            </View>
        </View>
        );
}
export default Chats;