package com.arkadiusgru.cls.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @RequestMapping(value = "/admin/getAllUsers", method = RequestMethod.GET)
    public List<User> showAll() {
        return userService.getAll();

    }

    @DeleteMapping("/admin/deleteUser/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);

        return "User with id " + id + " has been deleted";

    }

}