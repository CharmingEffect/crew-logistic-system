package com.arkadiusgru.cls.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.dto.JobDto;
import com.arkadiusgru.cls.dto.JobAssignmentDto;
import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.service.JobService;
import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;

@RestController

@CrossOrigin
@RequestMapping("/api")
@AllArgsConstructor
public class JobController {

    private final JobService jobService;

    @PostMapping(path = "/admin/newJob")
    public String register(@RequestBody JobDto job) {
        jobService.createNewJob(job);
        return "created";

    }

    @GetMapping(path = "/admin/getAllJobs")
    public List<Job> getAllJobs() throws StreamWriteException, DatabindException, IOException {

        return jobService.getAllJobs();
    }

    @DeleteMapping("/admin/deleteJob/{jobNumber}")
    public ResponseEntity<?> deleteJob(@PathVariable String jobNumber) {
        jobService.deleteJobByJobNumber(jobNumber);
        return ResponseEntity.ok().build();

    }

    @PostMapping("/admin/sendJobAssignments")
    public ResponseEntity<?> sendJobAssignments(@RequestBody JobAssignmentDto jobAssignmentDto) {
        jobService.sendJobAssignments(jobAssignmentDto.getJobNumber(), jobAssignmentDto.getCrewMemberIds());
        return ResponseEntity.ok().build();
    }

    @PutMapping("/admin/confirmJob/{assignment_id}")
    public ResponseEntity<?> confirmJob(@PathVariable("assignment_id") Long assignmentId) {
        jobService.confirmJob(assignmentId);
        return ResponseEntity.ok().body("Job confirmed successfully");
    }

    @GetMapping("/admin/pendingJobs/{userId}")
    public ResponseEntity<?> getPendingJobs(@PathVariable Long userId) {
        System.out.println("userId: " + userId);
        jobService.getPendingJobsForLoggedInUser(userId);
        return ResponseEntity.ok().build();
    }

}
