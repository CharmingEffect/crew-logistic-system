package com.arkadiusgru.cls.service;

import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.repos.JobRepository;

import ch.qos.logback.core.joran.conditional.ElseAction;
import lombok.AllArgsConstructor;
import com.arkadiusgru.cls.model.JobRequest;

@Service
@AllArgsConstructor
public class JobService {

    JobRepository jobRepository;

    public void createNewJob(JobRequest jobRequest) {
        // System.out.println("job " + job.toString());

        boolean jobExists = jobRepository.findByJobNumber(jobRequest.getJobNumber()).isPresent();

        if (jobExists) {
            throw new IllegalStateException("Job with number " + jobRequest.getJobNumber() + " already exists");
        } else {
            jobRepository.save(
                    new Job(
                            jobRequest.getJobNumber(),
                            jobRequest.getDateTime(),
                            jobRequest.getJobDuration(),
                            jobRequest.getNumberOfCrew(),
                            jobRequest.getAddress(),
                            jobRequest.getClientCompanyName(),
                            jobRequest.getContactOnSite(),
                            jobRequest.getDriverRequired(),
                            jobRequest.getDriverUserId(),
                            jobRequest.getCrewChiefUserId(),
                            jobRequest.getRemarks(),
                            jobRequest.getComment()

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
