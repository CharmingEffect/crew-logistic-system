import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import { useLoggedInUser } from '../../util/useUserData';
import MessageList from '../../components/MessageList';
import MessageForm from '../../components/MessageForm';
import { getAllUsers, getAllAdmins } from '../../util/useUserData';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const loggedUserId = useLoggedInUser().id;
    const loggedUser = useLoggedInUser();
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [users, setUsers] = useState([]);
    const [messagesUpdated, setMessagesUpdated] = useState(false);

    useEffect(() => {
       
        console.log(loggedUser.role);
        if (loggedUser.role == "ADMIN") {
            getAllUsers().then((data) => {
                if (loggedUser.role == "ADMIN")
                data = data.filter((user) => user.id !== loggedUser.id);

                setUsers(data);
            });
        } else {
            getAllAdmins().then((data) => {
                data = data.filter((user) => user.id !== loggedUser.id);
                setUsers(data);
            });


        }

    }, [getAllUsers, getAllAdmins, loggedUser]);



    const fetchMessages = useCallback(async (userId1, userId2) => {
        const response1 = await fetch(`/api/messages/${userId1}/${userId2}`);
        const response2 = await fetch(`/api/messages/${userId2}/${userId1}`);
    
        if (!response1.ok || !response2.ok) {
            throw new Error('Failed to fetch messages');
        }
    
        const data1 = await response1.json();
        const data2 = await response2.json();
    
        return [...data1, ...data2].sort((a, b) => a.timestamp - b.timestamp);
    }, []);

    const handleSelectUser = (userId) => {
        setSelectedUserId(userId);
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
                // Remove duplicates and sort by timestamp
                data = data
                    .filter((message, index, self) => index === self.findIndex((m) => m.id === message.id))
                    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
                setMessages(data.map((message) => ({ ...message, loggedUserId })));
            });
        }
    }, [selectedUserId, loggedUserId, fetchMessages, messagesUpdated]);
    

    const handleSendMessage = (content) => {
        const message = { senderId: loggedUserId, receiverId: selectedUserId, content };
        sendMessage(message).then((sentMessage) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { ...sentMessage, loggedUserId },
            ]);
            setMessagesUpdated((prevState) => !prevState); // Toggle the messagesUpdated state
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
                        <div className="messagingContainer">
                            <div>
                                <ul className="user-list">
                                    {users.map((user) => (
                                        <li
                                            key={user.id}
                                            className={`user-item ${selectedUserId === user.id ? 'selected' : ''}`}
                                            onClick={() => handleSelectUser(user.id)}
                                        >
                                            {user.firstName} {user.lastName}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="messaging">
                                <MessageList messages={messages} />
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
