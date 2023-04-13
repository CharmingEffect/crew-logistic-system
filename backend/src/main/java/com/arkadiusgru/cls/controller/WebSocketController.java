package com.arkadiusgru.cls.controller;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.model.Message;

@Controller
public class WebSocketController {

 

    @MessageMapping("/{roomId}/chat")
    @SendTo("/topic/{roomId}/chat")
    public Message sendMessage(@DestinationVariable String roomId, @Payload Message message) {
        return message;
    }
}