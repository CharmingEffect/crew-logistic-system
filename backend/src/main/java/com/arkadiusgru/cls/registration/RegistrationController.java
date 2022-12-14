package com.arkadiusgru.cls.registration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class RegistrationController {

    static Logger logger = LoggerFactory.getLogger(RegistrationController.class);

    private final RegistrationService registrationService;

    @PostMapping(path = "/admin/registration")
    public String register(@RequestBody RegistrationRequest request) {

        return registrationService.register(request);

    }

    @GetMapping(path = "/confirm-registration")
    public String confirm(@RequestParam("token") String token) {

        return registrationService.confirmToken(token);

    }

}
