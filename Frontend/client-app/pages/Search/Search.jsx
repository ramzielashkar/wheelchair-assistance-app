import { useEffect, useState } from "react";
import { Text, View,Dimensions, ScrollView, FlatList } from "react-native";
import EmptyState from "../../components/EmptyState/EmptyState";
import Input from "../../components/Inputs/Inputs";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useResults } from "../../query/Search/useSearchResults";
import styles from "./styles";

const Search = ({navigation}) =>{
    const [searchResult, setSearchResult] = useState('');
    const [searchKey, setSearchKey] = useState(1);
    const [search, setSearch] = useState(false);
    const navigateToService=(item)=>{
        navigation.navigate('Service', {service:item, name:item.name});
    }
    const {data:results,  refetch: refetchResults} = useResults(searchKey)
    if(search){
        refetchResults()
    }
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

    return(
        <View style={styles.root}>
            <Input 
            placeholder={"Search here..."}
            type={"search"}
            onChange={(e)=>{setSearchKey(e)
            setSearch(true)}}
            />
            {results?.result.length==0 && <EmptyState
            content={'Services'}
            icon={'map-marker'}/>}
            <View style={styles.serviceContainer}>
            <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={results?.result}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item)}}
                        data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </View>
        </View>
    );
}
export default Search;