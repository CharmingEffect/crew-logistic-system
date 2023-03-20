package com.arkadiusgru.cls.controller;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.model.JobAssignment;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.repos.JobAssignmentRepository;
import com.arkadiusgru.cls.repos.JobRepository;
import com.arkadiusgru.cls.repos.UserRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/assignments")
@AllArgsConstructor
public class JobAssignmentController {

    private final JobAssignmentRepository jobAssignmentRepository;
    private final JobRepository jobRepository;
    private final UserRepository userRepository;

    @PostMapping("/{jobNumber}/assign-to/{crewMemberId}")
    public ResponseEntity<?> assignJobToCrewMember(@PathVariable String jobNumber, @PathVariable Long crewMemberId) {

        Job job = jobRepository.findByJobNumber(jobNumber)
                .orElseThrow(() -> new EntityNotFoundException("Job not found with id: " + jobNumber));
        User crewMember = userRepository.findById(crewMemberId)
                .orElseThrow(() -> new EntityNotFoundException("Crew member not found with id: " + crewMemberId));
        JobAssignment assignment = new JobAssignment();
        assignment.setJob(job);
        assignment.setUserId(crewMember);
        return ResponseEntity.ok("Assigned job " + jobNumber + " to crew member " + crewMemberId);
    }

    // other methods for retrieving, updating, and deleting job assignments

    @GetMapping("/retrieve/{crewMemberId}")
    public ResponseEntity<?> rettriveAssigmentByCrewMemberId(Long crewMemberId) {

        jobAssignmentRepository.findByUserId(crewMemberId);
        System.out.println("aaaa " + jobAssignmentRepository.findByUserId(crewMemberId));
        return ResponseEntity.ok(jobAssignmentRepository.findByUserId(crewMemberId));
    }

}