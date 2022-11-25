package com.arkadiusgru.cls.model;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Table(name = "address")
public class Address extends AbstractEntity {

    private String street;
    private String city;
    private String country;
    private String zipCode;

    @OneToOne(mappedBy = "address")
    private User user;

}
