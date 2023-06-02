package com.arkadiusgru.cls.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "user")
@EqualsAndHashCode(callSuper = false)
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class User extends AbstractEntity implements UserDetails {

    private String email;
    private String firstName;
    private String lastName;
    @JsonIgnore
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;
    private String phoneNumber;
    @Lob
    private byte[] avatar;
    private Boolean locked = false;
    private Boolean enabled = false; // default values
    @OneToMany(mappedBy = "crewChief")
    @JsonIgnore
    private List<Job> crewChiefs;
    GrantedAuthority authority;// = new SimpleGrantedAuthority(Role.ADMIN.toString());
    @OneToMany(mappedBy = "driver")
    @JsonIgnore
    private List<Job> drivers;

    @ManyToMany(mappedBy = "crewList")
    @JsonIgnore
    private List<Job> jobs;

    public User(String firstName, String lastName, String email, String password, Role role, Address address,
            String phoneNumber) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.authority = new SimpleGrantedAuthority(role.toString());
        this.role = role;
        this.address = address;
        this.phoneNumber = phoneNumber;
        System.out.println("User created: " + authority);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {

        return true;

    }

    @Override
    public boolean isAccountNonLocked() {

        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;

    }

    // this is for enabling the user account after registration (email verification)
    @Override
    public boolean isEnabled() {
        return enabled;

    }

}