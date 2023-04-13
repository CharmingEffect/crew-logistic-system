import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
//import { useLoggedInUser } from '../../util/useUserData';

const Messages = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // const loggedUser = useLoggedInUser();

    const roomId = "CHATROOM";
    useEffect(() => {
        // Connect to the WebSocket server
        const socket = new SockJS('http://localhost:8080/ws');

        // Initialize Stomp client
        const stompClient = Stomp.over(socket);

        // Set the callback function for when the client is connected to the server
        stompClient.connect({}, () => {
            // Subscribe to the appropriate topic for this user
            stompClient.subscribe(`/topic/${roomId}/chat`, (message) => {
                const updatedMessages = [...messages, JSON.parse(message.body)];
                console.log("updatedMessages: " + messages);
                setMessages(updatedMessages);
            });
        });

        // Save the socket and Stomp client to state
        setSocket(socket);

        // Clean up function for disconnecting the socket when the component unmounts
        return () => {
            stompClient.disconnect();
        };
    }, []);

    // Handle sending a new message
    const sendMessage = (event) => {
        event.preventDefault();
        const message = {
            sender: "user",
            recipent: "crewmember",
            content: newMessage,
            roomId: roomId,

        };

        // Send the message to the appropriate topic for the recipient
        socket.send(`/app/message`, {}, JSON.stringify(message));

        // Clear the input field
        setNewMessage('');
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
                        <i className="fa fa-user text-black m-3" aria-hidden="true"></i>
                        Profile
                    </h1>
                </div>

                <div className="container-fluid">
                    <div className="main-body">
                        <div>
                            <h2>WebSocket Chat</h2>
                            <div>
                                {messages.map((message, index) => (
                                    <div key={index}>
                                        <strong>{message.sender}:</strong> {message.content}
                                    </div>
                                ))}
                            </div>
                            <form onSubmit={sendMessage}>
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={(event) => setNewMessage(event.target.value)}
                                />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>



    );
};

export default Messages;
