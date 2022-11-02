import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";

const AuthStack = ()=>{
    const AuthStack = createStackNavigator();
    return(
        <NavigationContainer>

            <AuthStack.Navigator>
            <AuthStack.Screen name = 'Register' component={Landing}/>
            <AuthStack.Screen name = 'Login' component={Login}/>
            </AuthStack.Navigator>
      
       </NavigationContainer> 
    );

}
export default AuthStack;