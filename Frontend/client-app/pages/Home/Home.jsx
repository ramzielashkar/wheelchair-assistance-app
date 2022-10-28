import { Text, View } from "react-native";
import styles from "./styles";

const Home = () =>{
    return(
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Hospitals</Text>
                
            </View>
        </View>
    );
}
export default Home;