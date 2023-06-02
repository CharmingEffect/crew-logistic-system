package com.arkadiusgru.cls.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arkadiusgru.cls.model.Address;

public interface AddressReposiotory extends JpaRepository<Address, Long> {

    Optional<Address> findById(Long id);

}
