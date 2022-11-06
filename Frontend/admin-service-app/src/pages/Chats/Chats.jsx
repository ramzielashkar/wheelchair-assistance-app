import './style.css';
import "react-chat-elements/dist/main.css"
import { MessageBox,MessageList, ChatList } from "react-chat-elements";
import Input from '../../components/Input/Input';
import { MdSend } from "react-icons/md";
const Chats = ()=>{
    return(
        <section className="flex column chats-section">
            <div className="chats-header flex">
                <p className="chats-title">Chats</p>
            </div>
            <div className="flex chats-container">
                <div className="chat-list">
                <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we?",
                        date: new Date(),
                        }
                    ]} />
                    <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to ?",
                        date: new Date(),
                        }
                    ]} />
                     <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to ?",
                        date: new Date(),
                        }
                    ]} />
                     <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to end ?",
                        date: new Date(),
                        }
                    ]} />
                     <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the nd ?",
                        date: new Date(),
                        }
                    ]} />
                     <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Wa ?",
                        date: new Date(),
                        }
                    ]} />
                     <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the N ?",
                        date: new Date(),
                        }
                    ]} />
                    <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                        avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                        alt: 'kursat_avatar',
                        title: 'Kursat',
                        subtitle: "Why don't we go to the No Way Homeej?",
                        date: new Date(),
                        }
                    ]} />
                </div>
                <div className="flex column single-chat">
                    
                    <div className="flex column chat-box">
                        <MessageBox
                        position='left'
                        title='Burhan'
                        type='text'
                        text="Hi there !"
                        date={new Date()}
                        />

                        <MessageBox
                        position="right"
                        title="Emre"
                        type="text"
                        text="Click to join the meeting"
                        date={new Date()}
                        />
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