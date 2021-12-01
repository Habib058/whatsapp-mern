import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
        </div>
    );
};

export default Chat;