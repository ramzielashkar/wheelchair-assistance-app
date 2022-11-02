import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
const TabsStack = ()=>{
    const Tabs = createBottomTabNavigator();
    return (
        <NavigationContainer>
          <Tabs.Navigator 
          tabBarOptions={{
            showLabel: false,
          }}>       
            <Tabs.Screen name = 'Home' component={Home} />
            <Tabs.Screen name = 'Profile' component={Profile}/>
          </Tabs.Navigator>
        </NavigationContainer>  
      );
}
export default TabsStack;