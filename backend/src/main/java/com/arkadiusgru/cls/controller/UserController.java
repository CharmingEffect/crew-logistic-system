package com.arkadiusgru.cls.controller;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.dto.UserDto;
import com.arkadiusgru.cls.model.Address;
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

    // retuve single user by email address
    @RequestMapping(value = "/admin/getUser/{email}", method = RequestMethod.GET)
    public UserDto getUserByEmail(@PathVariable String email) {
        Optional<User> user = userRepository.findByEmail(email);
        UserDto userDto = new UserDto();
        userDto.setId(user.get().getId());
        userDto.setEmail(user.get().getEmail());
        userDto.setFirstName(user.get().getFirstName());
        userDto.setLastName(user.get().getLastName());
        userDto.setRole(user.get().getRole());
        userDto.setAddressLine1(user.get().getAddress().getAddressLine1());
        userDto.setAddressLine2(user.get().getAddress().getAddressLine2());
        userDto.setCity(user.get().getAddress().getCity());
        userDto.setStateProvince(user.get().getAddress().getStateProvince());
        userDto.setPostalCode(user.get().getAddress().getPostalCode());
        userDto.setCountry(user.get().getAddress().getCountry());
        userDto.setPhoneNumber(user.get().getPhoneNumber());

        System.out.println(userDto);

        return userDto;
    }

    @DeleteMapping("/admin/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        Long addressIdFromUser = userRepository.getAddressIdByUserId(id);
        userService.deleteUserById(id);
        userRepository.deleteAddressById(addressIdFromUser);
        return ResponseEntity.ok().build();

    }

}