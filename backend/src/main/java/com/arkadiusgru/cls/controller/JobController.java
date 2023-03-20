package com.arkadiusgru.cls.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.dto.JobDto;
import com.arkadiusgru.cls.model.Job;
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

    

}
