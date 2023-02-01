package com.arkadiusgru.cls.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.repos.UserRepository;
import com.arkadiusgru.cls.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @RequestMapping(value = "/admin/getAllUsers", method = RequestMethod.GET)
    public List<User> showAll() {
        return userService.getAll();

    }

    // mapping for getting only crew members
    @RequestMapping(value = "/admin/getAllCrewMembers", method = RequestMethod.GET)
    public List<User> getAllCrewMembers() {
        List<User> crewMembers = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(user -> {
            // System.out.println(user.getRole());

            if (user.getRole().toString() == "CREW_MEMBER") {
                user.setPassword("");
                crewMembers.add(user);
            }
        });

        return crewMembers;

    }

    @DeleteMapping("/admin/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        Long addressIdFromUser = userRepository.getAddressIdByUserId(id);
        userService.deleteUserById(id);
        userRepository.deleteAddressById(addressIdFromUser);
        return ResponseEntity.ok().build();

    }

}