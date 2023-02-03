package com.arkadiusgru.cls.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class JobRequest {
    private String jobNumber;
    private LocalDateTime dateTime;
    private Integer jobDuration;
    private Integer numberOfCrew;
    private Address address;

}
