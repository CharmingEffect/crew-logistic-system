package com.arkadiusgru.cls.dto;

import java.time.LocalDateTime;

import com.arkadiusgru.cls.model.Address;

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

public class JobResponse {
    
    private String jobNumber;
    private LocalDateTime dateTime;
    private Integer jobDuration;
    private Integer numberOfCrew;
    private Address address;
    private String clientCompanyName;
    private String contactOnSite;
    private String driverName;
    private String crewChiefName;
    private String remarks;
    private String comment;

}