import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css'

const Chat = () => {
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
               <p className='chat-message'>
                   <span className='chat-name'>Habib</span>
                   This is a message
                   <span className='chat-time'>{new Date().toUTCString()}</span>
               </p>
               <p className='chat-receiver chat-message'>
                   <span className='chat-name'>Habib</span>
                   This is a message
                   <span className='chat-time'>{new Date().toUTCString()}</span>
               </p>
               <p className='chat-message'>
                   <span className='chat-name'>Habib</span>
                   This is a message
                   <span className='chat-time'>{new Date().toUTCString()}</span>
               </p>
               
           </div>
           <div className="chat-footer">
               <MoodIcon/>
               <form>
                   <input type="text" placeholder='Type a message' />
                   <button type='submit'>send a message</button>
               </form>
                <MicIcon/>
           </div>
        </div>
    );
};

export default Chat;