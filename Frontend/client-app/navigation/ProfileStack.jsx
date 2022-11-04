import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import Profile from '../pages/Profile/Profile';
const ProfileStack = ()=>{
    const ProfileStack = createStackNavigator();
    return (
        <ProfileStack.Navigator
        initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={Profile} 
            options={{
                title: 'Profile',
                headerTitle: (props) => <TopBar props={'Profile'} />
                }}/> 

        </ProfileStack.Navigator>
       );
}
export default ProfileStack;