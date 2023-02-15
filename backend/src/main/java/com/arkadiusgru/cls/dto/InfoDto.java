package com.arkadiusgru.cls.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class InfoDto {
    private Long numberOfUsers;
    private Long numberOfJobs;
    private Long numberOfCrewMembers;
    private Long numberOfAdmins;
    private Long numberOfCrewChiefs;

}
