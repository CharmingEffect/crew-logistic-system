import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useLoggedInUser } from '../../util/useUserData';
import MessageList from '../../components/MessageList';
import MessageForm from '../../components/MessageForm';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const loggedUserId = useLoggedInUser().id;
    const selectedUserId = 3;


    const fetchMessages = async (senderId, receiverId) => {
        const response = await fetch(`/api/messages/${senderId}/${receiverId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch messages');
        }
        return await response.json();
    };

    const sendMessage = async (message) => {
        const response = await fetch("/api/messages/send", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        return await response.json();
    };

    useEffect(() => {
        if (selectedUserId) {
            fetchMessages(loggedUserId, selectedUserId).then((data) => {
                setMessages(data.map((message) => ({ ...message, loggedUserId })));
            });
        }
    }, [loggedUserId, selectedUserId]);

    const handleSendMessage = (content) => {
        const message = { senderId: loggedUserId, receiverId: selectedUserId, content };
        sendMessage(message).then((sentMessage) => {
            setMessages((prevMessages) => [...prevMessages, { ...sentMessage, loggedUserId }]);
        });
    };


    return (
        <>
            <div id="page-wrapper" className="gray-bg">
                <div className="row border-bottom">
                    <Header />
                </div>
                <div className="wrapper wrapper-content animated fadeInRight"></div>
                <div className="mb-4">
                    <h1 className="sophisticated-header display-5 text-black mr-4">
                        <i className="fa fa-comments text-black m-3" aria-hidden="true"></i>
                        Messages
                    </h1>
                </div>
       
                <div className="container-fluid">
                    <div className="main-body">
                        <div>
                            <div className="messaging-container">
                                <MessageList messages={messages} loggedUserId={loggedUserId} />
                                <MessageForm onSubmit={handleSendMessage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    );
};

export default Messages;
