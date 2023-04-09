package com.arkadiusgru.cls.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.model.JobAssignment;
import com.arkadiusgru.cls.model.User;

public interface JobAssignmentRepository extends JpaRepository<JobAssignment, Long> {

    List<JobAssignment> findByUserId(Long userId);

    @Query("SELECT ja.job FROM JobAssignment ja WHERE ja.user.id = :userId AND ja.status = :status")
    List<Job> findJobsByUserId(Long userId, String status);
    
}