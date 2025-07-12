import React, { useState } from 'react';
import Message from './Message';

const ChatWindow = ({ contact }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]);
      setInput('');
    }
  };

  return (
    <div className="chat-window">
      <h3>Chat with {contact.name}</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} fromUser={msg.fromUser} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
