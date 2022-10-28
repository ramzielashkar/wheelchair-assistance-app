import { Pressable, Text} from "react-native";
import styles from "./styles";
const Buttons = ({title}) =>{
    return(
    <Pressable style={styles.btn}>
         <Text style={styles.text}>{title}</Text>
    </Pressable>    );
}

export default Buttons;