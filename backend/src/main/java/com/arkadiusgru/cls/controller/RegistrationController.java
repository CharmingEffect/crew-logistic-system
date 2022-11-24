package com.arkadiusgru.cls.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.model.RegistrationRequest;
import com.arkadiusgru.cls.service.RegistrationService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/admin/registration")
@AllArgsConstructor
public class RegistrationController {

    RegistrationService registrationService;

    public String register(@RequestBody RegistrationRequest request) {

        return registrationService.register(request);
    }

}
