package com.arkadiusgru.cls.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.arkadiusgru.cls.model.Message;

@Controller
public class WebSocketController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/chat/{roomId}")
    public void sendMessage(@DestinationVariable String roomId, Message message) {
        messagingTemplate.convertAndSend("/topic/" + roomId, message);
    }
}