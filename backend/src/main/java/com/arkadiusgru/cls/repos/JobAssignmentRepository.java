package com.arkadiusgru.cls.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arkadiusgru.cls.model.JobAssignment;

public interface JobAssignmentRepository extends JpaRepository<JobAssignment, Long> {

    JobAssignment findByUserId(Long crewMemberId);
}