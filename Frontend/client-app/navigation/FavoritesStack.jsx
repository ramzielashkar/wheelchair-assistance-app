import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import ServicePage from "../pages/ServicePage/ServicePage";
import Favorites from '../pages/Favorites/Favorites';
import Map from "../pages/Map/Map";
import Notifications from "../pages/Notifications/Notifications";
import Chats from "../pages/Chats/Chats";
import Chat from "../pages/Chat/Chat";

const FavoritesStack = ()=>{
    const FavoritesStack = createStackNavigator();
    return (
        <FavoritesStack.Navigator
        initialRouteName="Favorites">
            <FavoritesStack.Screen name="Favorites" component={Favorites} 
            options={({navigation})=>({
                title: 'Favorites',
                headerTitle: (props) => <TopBar props={'Favorites'} navigation={navigation}/>
                })}/> 
             <FavoritesStack.Screen name="Service" component={ServicePage}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 
            <FavoritesStack.Screen name="Map" component={Map}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 
             <FavoritesStack.Screen name="Notifications" component={Notifications}
                options={({ route }) => ({ title: "Notifications",
                    headerTitle: (props) => <TopBar props={"Notifications"}  path={"stack"}/>
                })}

             /> 
             <FavoritesStack.Screen name="Chats" component={Chats}
                options={({ route }) => ({ title: "Chats",
                    headerTitle: (props) => <TopBar props={"Chats"}  path={"stack"}/>
                })}

             /> 
             <FavoritesStack.Screen name="Chat" component={Chat}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 
        </FavoritesStack.Navigator>
       );
}
export default FavoritesStack;