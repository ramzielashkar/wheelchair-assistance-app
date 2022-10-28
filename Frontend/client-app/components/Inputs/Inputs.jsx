import { Text, TextInput, View } from 'react-native';
import styles from './styles';
const Input = ({label, type, placeholder}) =>{
    if(type=='password'){
        return (
            <View style={styles.user_info}>
                <Text style={styles.labels}>{label}</Text>
                <TextInput  keyboardType = 'default'  placeholder={placeholder} style={styles.input} secureTextEntry='true'></TextInput>
            </View>
        );
    }else{
    return(
        <View style={styles.user_info}>
                <Text style={styles.labels}>{label}</Text>
                <TextInput keyboardType={type}  placeholder={placeholder} style={styles.input}></TextInput>
            </View>
    );
    }
}

export default Input;