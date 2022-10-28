import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name = 'Register' component={Landing}/>
        <AuthStack.Screen name = 'Login' component={Login}/>
      </AuthStack.Navigator>
    </NavigationContainer>  
  );
}
