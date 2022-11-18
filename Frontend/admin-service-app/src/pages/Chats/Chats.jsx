import './style.css';
import "react-chat-elements/dist/main.css"
import { MessageBox,MessageList, ChatList } from "react-chat-elements";
import Input from '../../components/Input/Input';
import { MdSend } from "react-icons/md";
import { firebaseDB } from '../../configurations/firebaseConfig';
import { getDatabase, onValue, push, ref, set, get, update } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import  axiosInstance  from '../../query/axios/axios';
import { baseUrl } from '../../configurations/configurations';
import { getToken } from '../../query/getToken';
const Chats = ()=>{
    const loggedInUser = useSelector((state)=>state.user._id)
    const [data, setData] = useState(null);
    const [messages, setMessages]=useState([]);
    const [currentChat, setCurrentChat] = useState('');
    const [msgToSend, setMsgToSend] = useState('');
    const [userId, setUserId] = useState('')
    useEffect(()=>{
        const conversations = [];
        let Data = [];
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
                        //getting client info from database
                        axiosInstance(getToken()).get(`/service/client/${conversation.secondUserId}`).then(
                            (res)=>{
                                Data.push({
                                    _id: res.data.client._id,
                                    img: `${baseUrl}/public/${res.data.client.profile_picture}`,
                                    content: conversation.latestMessage.text,
                                    date:conversation.latestMessage.createdAt,
                                    name: res.data.client.name
                                })
                                setData(Data)

                            }
                            
                            )
    
                    }else if(conversation.secondUserId == loggedInUser){
                     //getting client info from database
                         axiosInstance(getToken()).get(`/service/client/${conversation.firstUserId}`).then(
                            (res)=>{
                                Data.push({
                                    _id: res.data.client._id,
                                    img: `${baseUrl}/public/${res.data.client.profile_picture}`,
                                    content: conversation.latestMessage.text,
                                    date:conversation.latestMessage.createdAt,
                                    name: res.data.client.name
                                })
                                setData(Data)

                            }
                            
                            )
                    }
                })
            }
        });
        //function to listen to database changes
        if(userId){
        onValue(ref(firebaseDB, 'chats/'+ userId+loggedInUser+'/messages'), (snapshot)=>{
            console.log('data')
            const data = snapshot.val()
            const Messages=[]
            for (const [key, value] of Object.entries(data)){
                Messages.push(value.message)
            }
            setMessages(Messages)
        })
        }
    },[msgToSend])

    
    //function to fetch chats
    const fetchChats = (chat)=>{
        const msgs =[];
        setUserId(chat.id)
        get(ref(firebaseDB, 'chats/'+ chat.id+loggedInUser+'/messages')).then((snapshot) => {
        if(snapshot.exists()){
          const data = snapshot.val();
          for (const [key, value] of Object.entries(data)) {
            for (const [index, item] of Object.entries(value)){
              msgs.push(item)
            }
            
          }
          setMessages(msgs)
          setCurrentChat(chat.title)
        }
        
      });
    }
    //function to send message
    const sendMsg = ()=>{
        const today = new Date();
        const dateTime = today.toUTCString();

         const latestMessage = {
            _id:Date.now(),
            createdAt: dateTime,
            text: msgToSend,
            user:{
                _id: loggedInUser
            }
        }
        update(ref(firebaseDB, 'chats/' + userId+loggedInUser), {
            latestMessage
        })
        const messagesRef = ref(firebaseDB, 'chats/' +userId+loggedInUser+'/messages/');
        const newMessageRef = push(messagesRef) 
        set(newMessageRef,{
            message: latestMessage
      })
      
    }
    return(
        <section className="flex column chats-section">
            <div className="chats-header flex">
                <p className="chats-title">Chats</p>
            </div>
            <div className="flex chats-container">
                <div className="chat-list">
                    {data?.map((conversation)=>{
                        return(
                        <ChatList
                        className='chat-list'
                        dataSource={[
                        {
                        avatar: conversation.img,
                        title: conversation.name,
                        subtitle: conversation.content,
                        date: conversation.date,
                        id: conversation._id
                        }
                    ]}
                    onClick={(chat)=>fetchChats(chat) }/>
                        );
                    })}
                
                </div>
                <div className="flex column single-chat">
                    
                    <div className="flex column chat-box">
                        {messages.map((chat)=>{
                            return(
                                <MessageBox
                                position={
                                    chat.user._id == loggedInUser? 'right':"left"
                                }
                                title={chat.user._id == loggedInUser? "You":currentChat}
                                type='text'
                                text={chat.text}
                                date={chat.createdAt}
                                />
                            );
                        })}
                    
                    </div>
                    
                    <div className="flex chat-input">
                        <input type="text" aria-multiline={true} placeholder="Type here..." className='input-msg' onChange={(e)=>setMsgToSend(e.target.value)} />
                        <MdSend className='send-msg' size={30} color={"0A61E1"} onClick={()=>{sendMsg()
                        }}/>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
export default Chats;