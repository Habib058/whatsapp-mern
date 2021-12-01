import React from 'react';
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <Avatar src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/289000/289002.1.jpg"/>
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder='search or start a new chat' />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;