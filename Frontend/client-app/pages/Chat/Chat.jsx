import { Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import React, { useState, useCallback, useEffect } from 'react'
import { firebaseDB } from '../../configurations/firebaseConfiguration';
import { getDatabase, onValue, push, ref, set, get, update } from "firebase/database";
import { useSelector } from 'react-redux';

const Chat = ({data, route})=>{
    const [messages, setMessages] = useState([]);
    const loggedInUser = useSelector((state)=>state.user._id)
    const [exists, setExists] = useState(false);
    // Checking if chat already exists
    get(ref(firebaseDB,'chats/'+loggedInUser+route.params.service._id)).then((snapshot)=>{
      if(snapshot.exists()){
        setExists(true)
      }
     })
    useEffect(()=>{
      //getting old chat
      const msgs =[];
      get(ref(firebaseDB, 'chats/'+ loggedInUser+route.params.service._id+'/messages')).then((snapshot) => {
        if(snapshot.exists()){
          const data = snapshot.val();
          for (const [key, value] of Object.entries(data)) {
            for (const [index, item] of Object.entries(value)){
              msgs.push(item)
            }
            
          }
          setMessages(msgs.reverse())

        }
        
      });
     
          //function to listen to database changes
          onValue(ref(firebaseDB, 'chats/'+ loggedInUser+route.params.service._id+'/messages'), (snapshot)=>{
            if(snapshot.exists()){
            const data = snapshot.val()
            const Messages=[]
            for (const [key, value] of Object.entries(data)){
                Messages.push(value.message)
            }
            setMessages(Messages.reverse())
          }
        })
      
      
    
 
    },[])
    // function to send message
      const onSend = useCallback((messages = []) => { 
        setExists(true)  
        messages[0].createdAt=messages[0].createdAt.toString()
        if(!exists){
          set(ref(firebaseDB, 'chats/' + loggedInUser+route.params.service._id), {
            firstUserId: loggedInUser,
            secondUserId: route.params.service._id,
            latestMessage: messages[0],
          })
        }else{
          update(ref(firebaseDB, 'chats/' + loggedInUser+route.params.service._id+"/latestMessage"), {
              text:messages[0].text
          })
        }
      const messagesRef = ref(firebaseDB, 'chats/' +loggedInUser+route.params.service._id+'/messages/');
      const newMessageRef = push(messagesRef) 
      set(newMessageRef,{
        message: messages[0]
      })
    })
    
    return(
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={
        {_id:loggedInUser}
      }
    />    
    );
}

export default Chat;