package com.arkadiusgru.cls.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.dto.AddressDto;
import com.arkadiusgru.cls.dto.JobDto;
import com.arkadiusgru.cls.model.Address;
import com.arkadiusgru.cls.model.Job;
import com.arkadiusgru.cls.repos.AddressReposiotory;
import com.arkadiusgru.cls.service.JobService;
import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class JobController {
    private final JobService jobService;
    private final AddressReposiotory addressRepository;

    @PostMapping(path = "/admin/newJob")
    public String register(@RequestBody JobDto job) {
        jobService.createNewJob(job);
        return "created";

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/admin/getAllJobs")
    public List<Job> getAllJobs() throws StreamWriteException, DatabindException, IOException {
        return jobService.getAllJobs();
    }

    @DeleteMapping("/admin/deleteJob/{jobNumber}")
    public ResponseEntity<?> deleteJob(@PathVariable String jobNumber) {
        jobService.deleteJobByJobNumber(jobNumber);
        return ResponseEntity.ok().build();

    }

    @GetMapping("/admin/getAddress/{id}")
    public Optional<Address> getUserByEmail(@PathVariable String id) {
        Optional<Address> address = addressRepository.findById(Long.parseLong(id));
        System.out.println(address.get().getAddressLine1());
        address.get().setUser(null);
        return address;
    }

}
