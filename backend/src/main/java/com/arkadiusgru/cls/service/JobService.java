package com.arkadiusgru.cls.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.dto.JobDto;
import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.repos.JobRepository;
import com.arkadiusgru.cls.repos.UserRepository;
import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;

import lombok.AllArgsConstructor;
import com.arkadiusgru.cls.model.User;

@Service
@AllArgsConstructor
public class JobService {

    JobRepository jobRepository;
    UserRepository userRepository;

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
        System.out.println("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        System.out.println(jobRepository.findAll().get(0).getDriver().getFirstName());
        ObjectMapper mapper = new ObjectMapper();
   

        // get all jobs in json format
        //
        // get cc details in another json by cc_id
        // grt driver details in another json by driver_id
        // json = jobRepository.findAll().stream().filter(job -> job.getAddress() !=
        // null).findFirst().get().getAddress().getUser();
        // gson

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
