package com.arkadiusgru.cls.model;

import java.time.LocalDateTime;
import java.util.List;

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
// to jest aby przetlumaczyc cokolwiek wpada do jacy na jave rozimesz bocie

public class JobRequest {
    private String jobNumber;
    private LocalDateTime dateTime;
    private Integer jobDuration;
    private Integer numberOfCrew;
    private Address address;
    private String clientCompanyName;
    private String contactOnSite;
    private Boolean driverRequired;
    private Long driverId;
    private User crewChiefUserId;
    private String remarks;
    private String comment;

}
