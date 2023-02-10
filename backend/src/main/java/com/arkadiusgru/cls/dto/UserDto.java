package com.arkadiusgru.cls.dto;

import com.arkadiusgru.cls.model.Role;

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

public class UserDto {

    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private Role role;
    private String phoneNumber;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String stateProvince;
    private String postalCode;
    private String country;

}
