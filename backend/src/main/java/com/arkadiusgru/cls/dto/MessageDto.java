package com.arkadiusgru.cls.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@NoArgsConstructor
@Setter

public class MessageDto {
    private Long id;
    private Long senderId;
    private Long receiverId;
    private String senderName;
    private String receiverName;
    private String content;
    private LocalDateTime timestamp;
}
