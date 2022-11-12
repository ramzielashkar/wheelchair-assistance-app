import { useEffect, useState } from "react";
import { Text, View,Dimensions, ScrollView, FlatList } from "react-native";
import Input from "../../components/Inputs/Inputs";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useResults } from "../../query/Search/useSearchResults";
import styles from "./styles";
const data = [
    {
        name:"Restaurant",
        location:"Beirut, Lebanon"
},
{
    name:"Restaurant",
    location:"Beirut, Lebanon"
},
{
    name:"Restaurant",
    location:"Beirut, Lebanon"
},
]
const Search = ({navigation}) =>{
    const [searchResult, setSearchResult] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [search, setSearch] = useState(false);

    const navigateToService=(name)=>{
        navigation.navigate('Service', {name:name});
    }

    if(search){
        const {data:results} = useResults(searchKey)
    }

    let screenWidth = Dimensions.get('window').width
    let flatListStyle;
 console.log(screenWidth);
 if(screenWidth<450){
    flatListStyle={
        justifyContent: "space-between",
        marginBottom:20
}}else if(screenWidth>450){
    flatListStyle={gap:20,
        marginBottom:20
    }
 }
 
 console.log(screenWidth);
 let columns=2;
 if(screenWidth > 600){
    columns=3;
 }
 if(searchKey!=''){
 }
    //console.log(results)
    return(
        <ScrollView style={styles.root}>
            <Input 
            placeholder={"Search here..."}
            type={"search"}
            onChange={(e)=>{setSearchKey(e)
            setSearch(true)}}
            />

            <View style={styles.serviceContainer}>
            <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={data}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item.name)}}
                        data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </View>
        </ScrollView>
    );
}
export default Search;