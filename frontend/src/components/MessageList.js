import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages, loggedUserId }) => {

  const messageListRef = useRef();

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ul className="message-list" ref={messageListRef}>
      {messages.map((message, index) => (
        <li
          key={index}
          className={`message ${message.senderId === message.loggedUserId ? 'sent' : 'received'}`}
        >
          <p className="font-bold">
            {message.senderId === message.loggedUserId
              ? `You (${message.senderName})`
              : `${message.senderName}`}
          </p>

          <p>{message.content}</p>
          <span className="timestamp">{new Date(message.timestamp).toLocaleString()}</span>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
