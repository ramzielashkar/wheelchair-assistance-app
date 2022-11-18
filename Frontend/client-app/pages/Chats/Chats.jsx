import { Text, ScrollView, FlatList, View } from "react-native";
import ChatCard from "../../components/ChatCard/ChatCard";
import styles from "./styles";
import { firebaseDB } from '../../configurations/firebaseConfiguration';
import { getDatabase, onValue, push, ref, set, get, update } from "firebase/database";
import { useSelector } from "react-redux";
import { getToken } from "../../query/getToken";
import axiosInstance from '../../query/axios/index'
import { baseUrl } from "../../Credentials/credentials";
import { useEffect, useState } from "react";
import EmptyState from "../../components/EmptyState/EmptyState";

const Chats = ({navigation})=>{
    const loggedInUser = useSelector((state)=>state.user._id)
    const [data, setData] = useState('')
    useEffect(()=>{
        //fetching previous chats form firebase
        const conversations = [];
        let Data=[]
        get(ref(firebaseDB,'chats/')).then((snapshot)=>{
            if(snapshot.exists()){
                const data = snapshot.val();
                for (const [key, value] of Object.entries(data)) {
                    //getting chats related to user
                    if(value.firstUserId == loggedInUser || value.secondUserId == loggedInUser){
                        conversations.push(value)
    
                    }
                }
                conversations.map((conversation)=>{
                    if(conversation.firstUserId == loggedInUser){
                        //getting seller info from database
                        axiosInstance(getToken()).get(`/client/service/${conversation.secondUserId}`).then(
                            (res)=>{
                                Data.push({
                                    _id: res.data.seller._id,
                                    img: `${baseUrl}/public/${res.data.seller.profile_picture}`,
                                    content: conversation.latestMessage.text,
                                    date:conversation.latestMessage.createdAt,
                                    name: res.data.seller.name
                                })
                                setData(Data)

                            }
                            
                            )
    
                    }else if(conversation.secondUserId == loggedInUser){
                     //getting seller info from database
                        axiosInstance(getToken()).get(`/client/service/${conversation.firstUserId}`).then(
                            (res)=>{
                                Data.push({
                                    _id: res.data.seller._id,
                                    img: `${baseUrl}/public/${res.data.seller.profile_picture}`,
                                    content: conversation.latestMessage.text,
                                    date:conversation.latestMessage.createdAt,
                                    name: res.data.seller.name
                                })
                                setData(Data)

                            }
                            
                            )
                    }
                })
                   
            }
           })
    }, [])

        if(!data){
            return <EmptyState
            content={'Chats'}
            icon={'message-text-outline'}/>
        }
        return(
            <View style={styles.root}>
                <View style={styles.chatsContainer}>
                    <FlatList
                    data={data}
                    renderItem={({item})=>(
                        <ChatCard
                        onClick={()=>{navigation.navigate('Chat', {service: item ,name:item.name})}}
                        data={item}/>
                    )}>
                    </FlatList>
                </View>
            </View>
            );
                }

export default Chats;