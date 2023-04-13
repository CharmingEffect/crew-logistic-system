package com.arkadiusgru.cls.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.dto.JobDto;
import com.arkadiusgru.cls.dto.JobResponse;
import com.arkadiusgru.cls.dto.JobAssignmentDto;
import com.arkadiusgru.cls.dto.JobAssignmentsInfo;
import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.model.JobAssignment;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.repos.JobAssignmentRepository;
import com.arkadiusgru.cls.repos.JobRepository;
import com.arkadiusgru.cls.repos.UserRepository;
import com.arkadiusgru.cls.service.JobService;
import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;

import lombok.AllArgsConstructor;

@RestController

@CrossOrigin
@RequestMapping("/api")
@AllArgsConstructor
public class JobController {

    private final JobService jobService;
    private final JobAssignmentRepository jobAssignmentRepository;
    private final JobRepository jobRepository;
    private final UserRepository userRepository;

    @PostMapping(path = "/admin/newJob")
    public String register(@RequestBody JobDto job) {
        jobService.createNewJob(job);
        return "created";

    }

    @GetMapping(path = "/admin/getAllJobs")
    public List<JobResponse> getAllJobs() throws StreamWriteException, DatabindException, IOException {

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

    @GetMapping("/admin/pendingJobs/{userId}")
    public List<JobDto> getPendingJobs(@PathVariable Long userId) {

        return jobService.getJobsForLoggedInUser(userId, "PENDING");
    }

    @GetMapping("/admin/confirmedJobs/{userId}")
    public List<JobDto> getConfirmedJobs(@PathVariable Long userId) {

        return jobService.getJobsForLoggedInUser(userId, "CONFIRMED");
    }

    @GetMapping("/admin/job-assignments")
    public List<JobAssignmentsInfo> getAllJobAssignments() {

        List<JobAssignmentsInfo> jobsList = new ArrayList<>();

        for (int i = 0; i < jobAssignmentRepository.findAll().size(); i++) {
            JobAssignment jobAssignment =  jobAssignmentRepository.findAll().get(i);
            JobAssignmentsInfo jobAssignmentsInfo = new JobAssignmentsInfo();
            Optional<User> optionalUser = userRepository.findById(jobAssignment.getUser().getId());
            jobAssignmentsInfo.setJobNumber(jobAssignment.getJob().getJobNumber());
            jobAssignmentsInfo.setStatus(jobAssignment.getStatus());
            jobAssignmentsInfo.setSendTo(optionalUser.get().getFirstName() + " " + optionalUser.get().getLastName());
            jobAssignmentsInfo.setId(jobAssignment.getId());
            jobsList.add(jobAssignmentsInfo);

        }

        return jobsList;
    }

    @DeleteMapping("/admin/job-assignments/{id}")
    public ResponseEntity<Void> deleteJobAssignment(@PathVariable Long id) {
        jobAssignmentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = "/admin/getLatestJobs")
    public List<Job> getRecentJobs() {
        Sort sort = Sort.by("createdAt").descending();
        PageRequest pageRequest = PageRequest.of(0, 3, sort);
        return jobRepository.findAll(pageRequest).getContent();
    }


    @PostMapping("/admin/updateJobStatus/")
    public ResponseEntity<?> updateJobStatus(@RequestParam String jobNumber, @RequestParam Long userId,
                                          @RequestParam String status) {
        String response = jobService.updateJobStatus(jobNumber, userId, status);
        if (response.equals("Job status updated successfully")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }




}
