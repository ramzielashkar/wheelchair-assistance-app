import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import ServicePage from "../pages/ServicePage/ServicePage";
import Favorites from '../pages/Favorites/Favorites';
import Map from "../pages/Map/Map";

const FavoritesStack = ()=>{
    const FavoritesStack = createStackNavigator();
    return (
        <FavoritesStack.Navigator
        initialRouteName="Favorites">
            <FavoritesStack.Screen name="Favorites" component={Favorites} 
            options={{
                title: 'Favorites',
                headerTitle: (props) => <TopBar props={'Favorites'} />
                }}/> 
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
        </FavoritesStack.Navigator>
       );
}
export default FavoritesStack;