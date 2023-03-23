package com.arkadiusgru.cls.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arkadiusgru.cls.model.JobAssignment;
import com.arkadiusgru.cls.model.User;

public interface JobAssignmentRepository extends JpaRepository<JobAssignment, Long> {

    List<JobAssignment> findByJobNumberAndStatus(String jobNumber, String status);

    List<JobAssignment> findByUserIdAndStatus(Long userId, String status);
}