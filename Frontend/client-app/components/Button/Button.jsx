import { Pressable, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
const Buttons = ({title, onClick}) =>{
    return(
    <TouchableOpacity style={styles.btn} onPress={onClick}>
         <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>    );
}



export default Buttons;