import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css'

const SidebarChat = () => {
    return (
        <div className='sidebarChat'>
            <Avatar/>
            <div className="sidebarChat-info">
                <h3>Room name</h3>
                <p>This is a last chat</p>
            </div>
        </div>
    );
};

export default SidebarChat;