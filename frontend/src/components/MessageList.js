import React from 'react';

const MessageList = ({ messages, loggedUserId }) => {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li key={index} className={`message ${message.senderId === message.loggedUserId ? 'sent' : 'received'}`}>
             <p>From: {message.senderId}</p>
             <p>To: {message.senderId}</p>
             
          <p>{message.content}</p>
          <span className="timestamp">{new Date(message.timestamp).toLocaleString()}</span>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
