package com.arkadiusgru.cls.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.model.Message;
import com.arkadiusgru.cls.repos.MessageRepository;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public Message saveMessage(Message message) {
        LocalDateTime time = LocalDateTime.now();
        message.setTimestamp(time);
        return messageRepository.save(message);
    }

    public List<Message> getMessagesBetweenUsers(Long senderId, Long receiverId) {
        List<Message> messages = messageRepository.findBySenderIdAndReceiverIdOrderByTimestampAsc(senderId, receiverId);
        messages.addAll(messageRepository.findByReceiverIdAndSenderIdOrderByTimestampAsc(receiverId, senderId));
        messages.sort(Comparator.comparing(Message::getTimestamp));
        return messages;
    }
}
