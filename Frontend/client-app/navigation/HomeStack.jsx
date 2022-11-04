import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../pages/Home/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import Hospitals from "../pages/Hospitals/Hospitals";

const HomeStack = ()=>{
    const homeStack = createStackNavigator();
    return (
        <homeStack.Navigator
       >
            <homeStack.Screen name="HomePage" component={Home} 
            options={{
                title: 'Home',
                headerTitle: (props) => <TopBar props={'Wheel of Life'} />
                }}/> 
            <homeStack.Screen name="Hospitals" component={Hospitals}
             options={{
                title: 'Home',
                headerTitle: (props) => <TopBar props={'Hospitals'}  path={"stack"}/>
                }}
             /> 

        </homeStack.Navigator>
       );
}
export default HomeStack;