package com.arkadiusgru.cls.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Setter
public class Message {

    private String senderName;
    private String receiverName;
    private String message;
    private String date;
    private Status status;


}