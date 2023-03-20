package com.arkadiusgru.cls.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "jobs_assignment")
@EqualsAndHashCode(callSuper = false)
public class JobAssignment {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "job_number")
    private Job job;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User userId;

}
