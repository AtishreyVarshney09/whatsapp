import React from 'react';

const Message = ({ text, fromUser }) => {
  return (
    <div className={`message ${fromUser ? 'user' : 'other'}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
