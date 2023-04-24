package com.arkadiusgru.cls.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arkadiusgru.cls.model.Message;



public interface MessageRepository extends JpaRepository<Message, Long> {

    List<Message> findBySenderIdAndReceiverIdOrderByTimestampAsc(Long senderId, Long receiverId);

    List<Message> findByReceiverIdAndSenderIdOrderByTimestampAsc(Long receiverId, Long senderId);
}
