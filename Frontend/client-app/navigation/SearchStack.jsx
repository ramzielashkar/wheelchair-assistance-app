import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TopBar from "../components/TopBar/TopBar";
import ServicePage from "../pages/ServicePage/ServicePage";
import Search from "../pages/Search/Search";
import Map from "../pages/Map/Map";
const SearchStack = ()=>{
    const SearchStack = createStackNavigator();
    return (
        <SearchStack.Navigator
        initialRouteName="Search">
            <SearchStack.Screen name="Search" component={Search} 
            options={{
                title: 'Search',
                headerTitle: (props) => <TopBar props={'Search'} />
                }}/> 
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

        </SearchStack.Navigator>
       );
}
export default SearchStack;