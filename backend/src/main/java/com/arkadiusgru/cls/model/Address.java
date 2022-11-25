package com.arkadiusgru.cls.model;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Address extends AbstractEntity {

    private String street;
    private String city;
    private String country;
    private String zipCode;

    @OneToOne(mappedBy = "address")
    private User user;

}
