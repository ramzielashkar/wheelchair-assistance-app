import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import  Icon  from '@expo/vector-icons/FontAwesome5';
import Favorites from "../pages/Favorites/Favorites";
import Search from "../pages/Search/Search";
import HomeStack from "./HomeStack";
import FavoritesStack from "./FavoritesStack";
import SearchStack from "./SearchStack";
import ProfileStack from "./ProfileStack";


// Bottom tab stack navigator
const TabsStack = ()=>{
   
    const Tabs = createBottomTabNavigator();
    return (
        <NavigationContainer>
          <Tabs.Navigator 
            initialRouteName="Home"
            screenOptions={{
                "tabBarHideOnKeyboard": true,
                "tabBarActiveTintColor": "#0A61E1",
                "tabBarInactiveTintColor": "rgba(0, 0, 0, 0.8)",
                "tabBarAllowFontScaling": false,
                "tabBarShowLabel": true,
                "tabBarLabelStyle": {
                    "fontWeight": "bold",
                    "fontSize": 10
                },
                headerShown: false

            }}>       
            <Tabs.Screen name = 'Home' component={HomeStack}
             options={{
            title: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"home"}
                size={28}
                color={color}
              />
            ),
          }} />
            
          <Tabs.Screen name = 'Favorites' component={FavoritesStack}
            options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
              name={"cards-heart"}
              size={26}
              color={color}
            />               ),
          }} />
          <Tabs.Screen name = 'Search' component={SearchStack}
            options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name="search" size={20} color={color}/>           
              ),
          }} />
          <Tabs.Screen name = 'Profile' component={ProfileStack}
            options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Icon name="user-alt" size={20} color={color}/>           
               ),
          }} />
          </Tabs.Navigator>
        </NavigationContainer>  
      );
}
export default TabsStack;