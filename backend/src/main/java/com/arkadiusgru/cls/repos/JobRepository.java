package com.arkadiusgru.cls.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.arkadiusgru.cls.model.Job;
import java.util.Optional;

import javax.transaction.Transactional;

@Repository
public interface JobRepository extends JpaRepository<Job, String> {
    Optional<Job> findByJobNumber(String jobNumber);

    @Transactional
    @Modifying
    @Query("DELETE FROM Job a WHERE a.jobNumber = :jobNumber")
    void deleteByJobNumber(String jobNumber);
}
