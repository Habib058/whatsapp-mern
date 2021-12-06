import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Pusher from 'pusher-js';
import axios from './axios'

function App() {
  const [messages,setMessages] = useState([])

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(res=>{
      console.log(res.data)
      setMessages(res.data)
    })
  },[])

  useEffect(() => {

    const pusher = new Pusher('26746cec59bda6ed24bd', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages,data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  return (
    <div className="app">
      <Home messages={messages} />
    </div>
  );
}

export default App;
