import { Text, View } from "react-native";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const EmptyState = ({content, icon})=>{
    return(
        <View style={styles.EmptySection}>
            <View style={styles.empty}>
                <MaterialCommunityIcons name={icon} size={50} color={"#0A61E1"}/>
                <Text style={styles.text}>No {content} available</Text>
            </View>
        </View>
    );
}
export default EmptyState;