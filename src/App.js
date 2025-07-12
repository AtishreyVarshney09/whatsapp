import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="app">
      <Sidebar onSelectContact={setSelectedContact} />
      {selectedContact ? (
        <ChatWindow contact={selectedContact} />
      ) : (
        <div className="no-chat">Select a contact to start chatting</div>
      )}
    </div>
  );
};

export default App;
