package com.arkadiusgru.cls.registration;

import com.arkadiusgru.cls.model.Address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class RegistrationRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String street;
    private Address address;

}
