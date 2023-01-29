package com.arkadiusgru.cls.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arkadiusgru.cls.model.Job;
import java.util.Optional;

public interface JobRepository extends JpaRepository<Job, Long> {
    Optional<Job> findByJobNumber(String jobNumber);
}
