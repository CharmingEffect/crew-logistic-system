package com.arkadiusgru.cls.dto;

import java.util.List;

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
public class JobAssignmentDto {

    private String jobNumber;
    private List<Long> crewMemberIds;

}
