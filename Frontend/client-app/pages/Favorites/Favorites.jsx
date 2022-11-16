import { Text, View,Dimensions, ScrollView, FlatList } from "react-native";
import EmptyState from "../../components/EmptyState/EmptyState";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useFavorites } from "../../query/Favorites/useFavorites";
import styles from "./style";


const Favorites =({navigation})=>{
    const { data: favorites, isLoading: isLoadingFavorites,  isFetching: isFetchingFavorites} = useFavorites(); 
 //Handling different screen sizes   
let screenWidth = Dimensions.get('window').width
let flatListStyle;

 if(screenWidth<450){
    flatListStyle={
        justifyContent: "space-between",
        marginBottom:20
}}else if(screenWidth>450){
    flatListStyle={gap:20,
        marginBottom:20
    }
 }
 
 let columns=2;
 if(screenWidth > 600){
    columns=3;
 }
 const navigateToService=(item)=>{
    navigation.navigate('Service', {service:item, name:item.name});
}

// if no favorites
if(favorites && favorites.followed.following.length==0){

return(
    <EmptyState
        content={'Followers'}
        icon={'cards-heart'}
    />
);
}

    return(
        <View style={styles.root}>
            <View style={styles.serviceContainer}>
            <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={favorites?.followed.following}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item.following_id)}}
                        data={item.following_id}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </View>
        </View>
    );
}

export default Favorites;