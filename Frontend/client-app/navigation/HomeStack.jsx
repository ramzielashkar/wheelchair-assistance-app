import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../pages/Home/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import ServicePage from "../pages/ServicePage/ServicePage";
import Services from "../pages/Services/Services";
import Map from "../pages/Map/Map";

const HomeStack = ()=>{
    const homeStack = createStackNavigator();
    return (
        <homeStack.Navigator
        initialRouteName="HomePage">
            <homeStack.Screen name="HomePage" component={Home} 
            options={{
                title: 'Home',
                headerTitle: (props) => <TopBar props={'Wheel of Life'} />
                }}/> 
            <homeStack.Screen name="Services" component={Services}
             options={({ route }) => ({ title: route.params.type,
                headerTitle: (props) => <TopBar props={route.params.type}  path={"stack"}/>
            })}
             /> 
             <homeStack.Screen name="Service" component={ServicePage}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 
             <homeStack.Screen name="Map" component={Map}
                options={({ route }) => ({ title: route.params.name,
                    headerTitle: (props) => <TopBar props={route.params.name}  path={"stack"}/>
                })}

             /> 

        </homeStack.Navigator>
       );
}
export default HomeStack;