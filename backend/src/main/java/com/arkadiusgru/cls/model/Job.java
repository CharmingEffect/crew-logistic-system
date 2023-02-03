package com.arkadiusgru.cls.model;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "job")
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
    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;
    private String clientCompanyName;
    private String contactOnSite;
    private Boolean driverRequired;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "driver_user_id", referencedColumnName = "id")
    private User driverUserId;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cc_user_id", referencedColumnName = "id")
    private User crewChiefUserId;
    private String remarks;
    private String comment;

    public Job(String jobNumber, LocalDateTime dateTime, Integer jobDuration, Integer numberOfCrew,
            Address address) {
        this.jobNumber = jobNumber;
        this.dateTime = dateTime;
        this.jobDuration = jobDuration;
        this.numberOfCrew = numberOfCrew;
        this.address = address;
        // this.clientCompanyName = clientCompanyName;
        // this.contactOnSite = contactOnSite;
        // this.driverRequired = driverRequired;
        // this.driverUserId = driverUserId;
        // this.crewChiefUserId = crewChiefUserId;
        // this.remarks = remarks;
        // this.comment = comment;
    }

}
