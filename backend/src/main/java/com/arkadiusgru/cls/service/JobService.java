package com.arkadiusgru.cls.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.dto.JobDto;
import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.model.JobAssignment;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.repos.JobAssignmentRepository;
import com.arkadiusgru.cls.repos.JobRepository;
import com.arkadiusgru.cls.repos.UserRepository;
import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JobService {

    JobRepository jobRepository;
    UserRepository userRepository;
    JobAssignmentRepository jobAssignmentRepository;

    public void createNewJob(JobDto jobDto) {
        // System.out.println("job " + job.toString());

        boolean jobExists = jobRepository.findByJobNumber(jobDto.getJobNumber()).isPresent();

        if (jobExists) {
            throw new IllegalStateException("Job with number " + jobDto.getJobNumber() + " already exists");
        } else {

            User driver = userRepository.findById(jobDto.getDriverId()).orElse(null);
            if (driver == null) {
                throw new IllegalStateException("User with id " + jobDto.getDriverId() + " not found");
            }

            User crewChief = userRepository.findById(jobDto.getCrewChiefId()).orElse(null);
            if (crewChief == null) {
                throw new IllegalStateException("User with id " + jobDto.getCrewChiefId() + " not found");
            }

            Job job = new Job();
            job.setJobNumber(jobDto.getJobNumber());
            job.setDateTime(jobDto.getDateTime());
            job.setJobDuration(jobDto.getJobDuration());
            job.setNumberOfCrew(jobDto.getNumberOfCrew());
            job.setAddress(jobDto.getAddress());
            job.setClientCompanyName(jobDto.getClientCompanyName());
            job.setContactOnSite(jobDto.getContactOnSite());
            job.setDriver(driver);
            job.setCrewChief(crewChief);
            job.setRemarks(jobDto.getRemarks());
            job.setComment(jobDto.getComment());
            jobRepository.save(job);

        }

    }

    // retive job with associated address
    public List<Job> getAllJobs() throws StreamWriteException, DatabindException, IOException {

        jobRepository.findAll().forEach(job -> {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());

            try {
                System.out.println(mapper.writeValueAsString(job));

            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        return jobRepository.findAll();
    }

    public void deleteJobByJobNumber(String jobNumber) {
        boolean jobExists = jobRepository.findByJobNumber(jobNumber).isPresent();

        if (jobExists) {
            jobRepository.deleteByJobNumber(jobNumber);
        } else {
            throw new IllegalStateException("Job with number " + jobNumber + " does not exist");
        }
    }

    public void sendJobAssignments(String jobNumber, List<Long> crewMemberIds) {
        Job job = jobRepository.findById(jobNumber).orElseThrow(() -> new RuntimeException("Job not found"));
        List<User> crewMembers = userRepository.findAllById(crewMemberIds);

        for (User crewMember : crewMembers) {
            JobAssignment assignment = new JobAssignment();
            assignment.setJobNumber(job);
            assignment.setUserId(crewMember);
            assignment.setStatus("PENDING");
            jobAssignmentRepository.save(assignment);
        }
    }

    public void confirmJob(Long assignmentId) {
        JobAssignment assignment = jobAssignmentRepository.findById(assignmentId)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));

        if (assignment.getStatus().equals("PENDING")) {
            Job job = assignment.getJobNumber();
            // Check if the job has reached its crew member limit
            int assignedCrewCount = jobAssignmentRepository.findByJobNumberAndStatus(job.getJobNumber(), "CONFIRMED")
                    .size();
            if (job.getNumberOfCrew() > assignedCrewCount) {
                assignment.setStatus("CONFIRMED");
                jobAssignmentRepository.save(assignment);
            } else {
                throw new IllegalStateException("Job has already reached its crew member limit");
            }
        } else {
            throw new IllegalStateException("Assignment has already been confirmed or declined");
        }
    }

    public List<Job> getPendingJobsForLoggedInUser(Long userId) {

        // User loggedUser = userRepository.findByEmail(email)
        // .orElseThrow(() -> new RuntimeException("User not found"));

        List<JobAssignment> assignments = jobAssignmentRepository.findByUserIdAndStatus(userId,
                "PENDING");
        System.out.println("assignments " + assignments);
        List<Job> jobs = new ArrayList<>();
        for (JobAssignment assignment : assignments) {
            Job job = jobRepository.findByJobNumber(assignment.getJobNumber().toString())
                    .orElseThrow(() -> new RuntimeException("Job not found"));
            jobs.add(job);
        }

        return jobs;
    }

}
