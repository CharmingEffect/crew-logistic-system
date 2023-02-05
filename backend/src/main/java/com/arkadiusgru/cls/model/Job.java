package com.arkadiusgru.cls.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@Table(name = "job")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "jobNumber", scope = String.class)
public class Job {

    @Id
    String jobNumber;
    @CreationTimestamp
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private LocalDateTime dateTime;
    private Integer jobDuration;
    private Integer numberOfCrew;
    @JsonManagedReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;
    private String clientCompanyName;
    private String contactOnSite;
    private Boolean driverRequired;
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "driver_id", referencedColumnName = "id")
    @JsonIgnore
    private User driver;
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "cc_user_id", referencedColumnName = "id")
    @JsonIgnore
    private User crewChief;
    private String remarks;
    private String comment;

    public Job(String jobNumber,
            LocalDateTime dateTime,
            Integer jobDuration,
            Integer numberOfCrew,
            Address address,
            String clientCompanyName,
            String contactOnSite,
            Boolean driverRequired,
            User driver,
            User crewChief,
            String remarks,
            String comment) {

        this.jobNumber = jobNumber;
        this.dateTime = dateTime;
        this.jobDuration = jobDuration;
        this.numberOfCrew = numberOfCrew;
        this.address = address;

        this.clientCompanyName = clientCompanyName;
        this.contactOnSite = contactOnSite;
        this.driverRequired = driverRequired;
        this.driver = driver;
        this.crewChief = crewChief;
        this.remarks = remarks;
        this.comment = comment;
    }

}
