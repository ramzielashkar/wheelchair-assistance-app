import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import ServicePage from "../pages/ServicePage/ServicePage";
import Search from "../pages/Search/Search";
import Map from "../pages/Map/Map";
import Notifications from "../pages/Notifications/Notifications";
import Chats from "../pages/Chats/Chats";
import Chat from "../pages/Chat/Chat";
const SearchStack = ()=>{
    const SearchStack = createStackNavigator();
    return (
        <SearchStack.Navigator
        initialRouteName="Search">
            <SearchStack.Screen name="Search" component={Search} 
            options={({navigation})=>({
                title: 'Search',
                headerTitle: (props) => <TopBar props={'Search'} navigation={navigation}/>
                })}/> 
             <SearchStack.Screen name="Service" component={ServicePage}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 
             <SearchStack.Screen name="Map" component={Map}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 
             <SearchStack.Screen name="Notifications" component={Notifications}
                options={({ route }) => ({ title: "Notifications",
                    headerTitle: (props) => <TopBar props={"Notifications"}  path={"stack"}/>
                })}

             /> 
             <SearchStack.Screen name="Chats" component={Chats}
                options={({ route }) => ({ title: "Chats",
                    headerTitle: (props) => <TopBar props={"Chats"}  path={"stack"}/>
                })}

             /> 
             <SearchStack.Screen name="Chat" component={Chat}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 

        </SearchStack.Navigator>
       );
}
export default SearchStack;