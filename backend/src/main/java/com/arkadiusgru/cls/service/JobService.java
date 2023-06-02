package com.arkadiusgru.cls.service;

import java.io.Console;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.helpers.SubstituteLogger;
import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.dto.JobDto;
import com.arkadiusgru.cls.dto.JobResponse;
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

            // condition if driver or crew chief is the same as driver

            job.addCrewMember(crewChief);
            job.addCrewMember(driver);
            jobRepository.save(job);

        }

    }

    // retive job with associated address

    public List<JobResponse> getAllJobs() {
        return jobRepository.findAll().stream().map(job -> {
            // Fetch driver details
            User driver = job.getDriver() != null ? userRepository.findById(job.getDriver().getId()).orElse(null)
                    : null;
            // Fetch crew chief details
            User crewChief = job.getCrewChief() != null
                    ? userRepository.findById(job.getCrewChief().getId()).orElse(null)
                    : null;

            String driverName = driver != null
                    ? driver.getId() + " " + driver.getFirstName() + " " + driver.getLastName()
                    : null;
            String crewChiefName = driver != null
                    ? crewChief.getId() + " " + crewChief.getFirstName() + " " + crewChief.getLastName()
                    : null;

            return new JobResponse(
                    job.getJobNumber(),
                    job.getDateTime(),
                    job.getJobDuration(),
                    job.getNumberOfCrew(),
                    job.getAddress(),
                    job.getClientCompanyName(),
                    job.getContactOnSite(),
                    driverName,
                    crewChiefName,
                    job.getRemarks(),
                    job.getComment(),
                    job.getCrewList());
        }).collect(Collectors.toList());
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
            assignment.setJob(job);
            assignment.setUser(crewMember);
            assignment.setStatus("PENDING");
            jobAssignmentRepository.save(assignment);
        }
    }

    public List<JobDto> getJobsForLoggedInUser(Long userId, String status) {
        List<JobDto> jobs = new ArrayList<JobDto>();

        for (Job job : jobAssignmentRepository.findJobsByUserId(userId, status)) {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            JobDto jobDto = new JobDto();
            jobDto.setJobNumber(job.getJobNumber());
            jobDto.setDateTime(job.getDateTime());
            jobDto.setJobDuration(job.getJobDuration());
            jobDto.setNumberOfCrew(job.getNumberOfCrew());
            jobDto.setAddress(job.getAddress());
            jobDto.setClientCompanyName(job.getClientCompanyName());
            jobDto.setContactOnSite(job.getContactOnSite());
            jobDto.setDriverId(job.getDriver().getId());
            jobDto.setCrewChiefId(job.getCrewChief().getId());
            jobDto.setRemarks(job.getRemarks());
            jobDto.setComment(job.getComment());
            jobs.add(jobDto);
        }

        return jobs.stream().distinct().collect(Collectors.toList());
    }

    public String updateJobStatus(String jobNumber, Long userId, String status) {
        Optional<Job> optionalJob = jobRepository.findByJobNumber(jobNumber);
        if (optionalJob.isPresent()) {
            Optional<User> optionalUser = userRepository.findById(userId);
            if (optionalUser.isPresent()) {
                Optional<JobAssignment> optionalAssignment = jobAssignmentRepository.findByJobAndUser(optionalJob.get(),
                        optionalUser.get());
                if (optionalAssignment.isPresent()) {
                    JobAssignment assignment = optionalAssignment.get();
                    assignment.setStatus(status);
                    jobAssignmentRepository.save(assignment);

                    Job job = optionalJob.get();
                    User user = optionalUser.get();

                    if (status.equals("CONFIRMED")) {
                        job.addCrewMember(user);
                    } else if (status.equals("PENDING")) {
                        job.removeCrewMember(user);
                    }

                    jobRepository.save(job);

                    return "Job status updated successfully";
                } else {
                    return "Job not assigned to user";
                }
            } else {
                return "Invalid user id";
            }
        } else {
            return "Invalid job number";
        }
    }

}
