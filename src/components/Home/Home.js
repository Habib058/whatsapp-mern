import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-body'>
                <Sidebar />
                <Chat />
            </div>

        </div>
    );
};

export default Home;