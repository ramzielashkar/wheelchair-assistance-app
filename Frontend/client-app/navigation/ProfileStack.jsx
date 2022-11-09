import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import Chat from "../pages/Chat/Chat";
import Chats from "../pages/Chats/Chats";
import Notifications from "../pages/Notifications/Notifications";
import Profile from '../pages/Profile/Profile';
const ProfileStack = ()=>{
    const ProfileStack = createStackNavigator();
    return (
        <ProfileStack.Navigator
        initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={Profile} 
            options={({navigation})=>({
                title: 'Profile',
                headerTitle: (props) => <TopBar props={'Profile'} navigation={navigation} />
                })}/> 
            <ProfileStack.Screen name="Notifications" component={Notifications}
                options={({ route }) => ({ title: "Notifications",
                    headerTitle: (props) => <TopBar props={"Notifications"}  path={"stack"}/>
                })}

             />    
             <ProfileStack.Screen name="Chats" component={Chats}
                options={({ route }) => ({ title: "Chats",
                    headerTitle: (props) => <TopBar props={"Chats"}  path={"stack"}/>
                })}

             />  
             <ProfileStack.Screen name="Chat" component={Chat}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 

        </ProfileStack.Navigator>
       );
}
export default ProfileStack;