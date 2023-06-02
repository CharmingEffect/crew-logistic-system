package com.arkadiusgru.cls.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.arkadiusgru.cls.model.Job;
import java.util.Optional;
import java.util.List;

import javax.transaction.Transactional;

public interface JobRepository extends JpaRepository<Job, String> {
    Optional<Job> findByJobNumber(String jobNumber);

    @Transactional
    @Modifying
    @Query("DELETE FROM Job a WHERE a.jobNumber = :jobNumber")
    void deleteByJobNumber(String jobNumber);

    @Query("SELECT j FROM Job j LEFT JOIN FETCH j.address a")
    List<Job> findAllWithAddress();

    List<Job> findByJobNumberIn(List<String> jobNumbers);
    

}
