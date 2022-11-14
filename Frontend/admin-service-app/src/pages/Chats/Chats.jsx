import './style.css';
import "react-chat-elements/dist/main.css"
import { MessageBox,MessageList, ChatList } from "react-chat-elements";
import Input from '../../components/Input/Input';
import { MdSend } from "react-icons/md";
import { firebaseDB } from '../../configurations/firebaseConfig';
import { getDatabase, onValue, push, ref, set, get, update } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { axiosInstance, baseUrl } from '../../query/axios/axios';
const Chats = ()=>{
    const loggedInUser = useSelector((state)=>state.user._id)
    const [data, setData] = useState(null);
    const [messages, setMessages]=useState([]);
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
                        axiosInstance.get(`/service/client/${conversation.secondUserId}`).then(
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
                         axiosInstance.get(`/service/client/${conversation.firstUserId}`).then(
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
    },[])
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
                    onClick={(id)=>console.log(id) }/>
                        );
                    })}
                
                </div>
                <div className="flex column single-chat">
                    
                    <div className="flex column chat-box">
                        {messages.map((chat)=>{
                            return(
                                <MessageBox
                                position='left'
                                title='Burhan'
                                type='text'
                                text="Hi there !"
                                date={new Date()}
                                />
                            );
                        })}
                    
                    </div>
                    
                    <div className="flex chat-input">
                        <input type="text" aria-multiline={true} placeholder="Type here..." className='input-msg' />
                        <MdSend className='send-msg' size={30} color={"0A61E1"}/>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
export default Chats;