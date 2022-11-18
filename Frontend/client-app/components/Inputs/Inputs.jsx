import { Text, TextInput, View } from 'react-native';
import styles from './styles';
const Input = ({label, type, placeholder, onChange, onFocus}) =>{
    if(type=='password'){
        return (
            <View style={styles.user_info}>
                <Text style={styles.labels}>{label}</Text>
                <TextInput keyboardType = 'default'  placeholder={placeholder} style={styles.input} secureTextEntry onChangeText={onChange} onFocus={onFocus}></TextInput>
            </View>
        );
    }
    else if(type==='search')
    {
        return(
            <View style={styles.user_info}>
                    <TextInput keyboardType={type}  placeholder={placeholder} style={styles.input} onChangeText={onChange} onFocus={onFocus}></TextInput>
                </View>
        );
    }else{
    return(
        <View style={styles.user_info}>
                <Text style={styles.labels}>{label}</Text>
                <TextInput keyboardType={type}  placeholder={placeholder} style={styles.input} onChangeText={onChange} onFocus={onFocus}></TextInput>
            </View>
    );
    }
}

export default Input;