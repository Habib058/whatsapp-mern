import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = ({messages}) => {
    return (
        <div className='home'>
            <div className='home-body'>
                <Sidebar />
                <Chat messages={messages}/>
            </div>

        </div>
    );
};

export default Home;