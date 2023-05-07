package com.arkadiusgru.cls.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.dto.MessageDto;
import com.arkadiusgru.cls.model.Message;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.repos.UserRepository;
import com.arkadiusgru.cls.service.MessageService;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody Message message) {
        Message savedMessage = messageService.saveMessage(message);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMessage);
    }

    @GetMapping("/{senderId}/{receiverId}")
    public ResponseEntity<List<MessageDto>> getMessagesBetweenUsers(
            @PathVariable Long senderId, @PathVariable Long receiverId) {
        List<Message> messages = messageService.getMessagesBetweenUsers(senderId, receiverId);
    
        // Convert the list of messages to a list of MessageDto objects
        List<MessageDto> messageDtos = messages.stream()
                .map(this::convertMessageToDto)
                .collect(Collectors.toList());
    
        return ResponseEntity.ok(messageDtos);
    }


    public MessageDto convertMessageToDto(Message message) {

        String senderName = userRepository.findById(message.getSenderId()).get().getFirstName() + " " +  userRepository.findById(message.getSenderId()).get().getLastName();
        String receiverName = userRepository.findById(message.getReceiverId()).get().getFirstName() + " " +  userRepository.findById(message.getReceiverId()).get().getLastName();
        

        MessageDto messageDto = new MessageDto();
        messageDto.setId(message.getId());
        messageDto.setSenderId(message.getSenderId());
        messageDto.setReceiverId(message.getReceiverId());
        messageDto.setSenderName(senderName);
        messageDto.setReceiverName(receiverName);
        messageDto.setContent(message.getContent());
        messageDto.setTimestamp(message.getTimestamp());
        return messageDto;
    }
}
