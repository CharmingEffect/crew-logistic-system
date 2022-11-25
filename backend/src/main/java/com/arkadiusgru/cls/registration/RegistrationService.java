package com.arkadiusgru.cls.registration;

import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.model.Role;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UserService userService;
    private final EmailVerify emailVerify;

    public String register(RegistrationRequest request) {

        boolean isValid = emailVerify.test(request.getEmail());
        if (!isValid) {
            throw new IllegalStateException("email not valid");

        }

        return userService.signUpUser(new User(
                request.getFirstName(),
                request.getLastName(),
                request.getEmail(),
                request.getPassword(),
                Role.CREW_MEMBER));
    }

}
