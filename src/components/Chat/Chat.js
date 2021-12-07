import React, { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css'
import axios from '../../axios';

const Chat = ({messages}) => {
    const [input,setInput]= useState("")
    console.log(input)

    const handleClick = async (e)=>{
        e.preventDefault();
       await axios.post("/messages/new",{
            message:input,
            name:"hebib",
            timestamp:"i am a time",
            received:false
        });
        setInput("")
    }
    return (
        <div className='chat'>
           <div className="chat-header">
               <Avatar/>
               <div className="chat-header-info">
                   <h3>Room name</h3>
                   <p>last seen 1 min ago</p>
               </div>
               <div className="chat-header-right">
               <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
               </div>
           </div>

           <div className="chat-body">
               {
                   messages.map((message) =>(
                    <p key={message._id} className={`chat-message ${message.received && "chat-receiver"} `}>
                    <span className='chat-name'>{message.name}</span>
                    {message.message}
                    <span className='chat-time'>{message.timestamp}</span>
                </p>
                   ))
               }
               
               
           </div>
           <div className="chat-footer">
               <MoodIcon/>
               <form>
                   <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder='Type a message' />
                   <button onClick={handleClick} type='submit'>send a message</button>
               </form>
                <MicIcon/>
           </div>
        </div>
    );
};

export default Chat;