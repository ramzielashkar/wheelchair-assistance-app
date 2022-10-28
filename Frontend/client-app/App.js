import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name = 'Register' component={Landing}/>
        <AuthStack.Screen name = 'Login' component={Login}/>
      </AuthStack.Navigator>
      <Tabs.Navigator>       
        <Tabs.Screen name = 'Home'/>
      </Tabs.Navigator>
    </NavigationContainer>  
  );
}
