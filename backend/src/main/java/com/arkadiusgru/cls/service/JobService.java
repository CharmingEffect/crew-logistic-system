package com.arkadiusgru.cls.service;

import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.repos.JobRepository;

import ch.qos.logback.core.joran.conditional.ElseAction;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JobService {

    JobRepository jobRepository;

    public void createNewJob(Job job) {
        // System.out.println("job " + job.toString());
        boolean jobExists = jobRepository.findByJobNumber(job.getJobNumber()).isPresent();

        if (jobExists) {
            throw new IllegalStateException("Job with number " + job.getJobNumber() + " already exists");
        } else {
            jobRepository.save(
                    new Job(
                            job.getJobNumber(),
                            job.getDateTime(),
                            job.getJobDuration(),
                            job.getNumberOfCrew(),
                            job.getAddress()

                    )

            );

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
