import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import  Icon  from '@expo/vector-icons/FontAwesome5';
import Favorites from "../pages/Favorites/Favorites";


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
            }}
            /*tabBarOptions={{
                activeTintColor: '#0A61E1',
                inactiveTintColor: 'rgba(0, 0, 0, 0.8)',
                showLabel: true,
                allowFontScaling: false,
                keyboardHidesTabBar: true,
                shadowColor: '#FFF',
                labelStyle: {
                  fontWeight: "bold",
                  fontSize: 10,
                },
              }}*/>       
            <Tabs.Screen name = 'Home' component={Home}
             options={{
            title: 'Home',
            headerTitle: (props) => <TopBar props={'Wheel of Life'} />,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"home"}
                size={28}
                color={color}
              />
            ),
          }} />
            <Tabs.Screen name = 'Profile' component={Profile}
            options={{
            headerTitle: (props) => <TopBar props={'Profile'} />,
            tabBarIcon: ({ focused, color, size }) => (
                <Icon name="user-alt" size={20} color={color}/>           
               ),
          }} />
          <Tabs.Screen name = 'Favorites' component={Favorites}
            options={{
            headerTitle: (props) => <TopBar props={'Favorites'} />,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
              name={"cards-heart"}
              size={26}
              color={color}
            />               ),
          }} />
          </Tabs.Navigator>
        </NavigationContainer>  
      );
}
export default TabsStack;