package com.arkadiusgru.cls.service;

import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.repos.JobRepository;
import com.arkadiusgru.cls.repos.UserRepository;

import ch.qos.logback.core.joran.conditional.ElseAction;
import lombok.AllArgsConstructor;
import com.arkadiusgru.cls.model.JobRequest;
import com.arkadiusgru.cls.model.User;

@Service
@AllArgsConstructor
public class JobService {

    JobRepository jobRepository;
    UserRepository userRepository;

    public void createNewJob(JobRequest jobRequest) {
        // System.out.println("job " + job.toString());

        boolean jobExists = jobRepository.findByJobNumber(jobRequest.getJobNumber()).isPresent();

        if (jobExists) {
            throw new IllegalStateException("Job with number " + jobRequest.getJobNumber() + " already exists");
        } else {

            User user = userRepository.findById(jobRequest.getDriverId()).orElse(null);
            if (user == null) {
                throw new IllegalStateException("User with id " + jobRequest.getDriverId() + " not found");
            }

            Job job = new Job();
            job.setJobNumber(jobRequest.getJobNumber());
            job.setDateTime(jobRequest.getDateTime());
            job.setJobDuration(jobRequest.getJobDuration());
            job.setNumberOfCrew(jobRequest.getNumberOfCrew());
            job.setAddress(jobRequest.getAddress());
            job.setClientCompanyName(jobRequest.getClientCompanyName());
            job.setContactOnSite(jobRequest.getContactOnSite());
            job.setDriverRequired(jobRequest.getDriverRequired());
            job.setDriver(user);
            job.setCrewChiefUserId(jobRequest.getCrewChiefUserId());
            job.setRemarks(jobRequest.getRemarks());
            job.setComment(jobRequest.getComment());
            jobRepository.save(job);

        }

    }

    public Iterable<Job> getAllJobs() {
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

}
