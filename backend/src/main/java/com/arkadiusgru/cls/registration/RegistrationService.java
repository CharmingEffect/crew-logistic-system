package com.arkadiusgru.cls.registration;

import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.email.EmailBuilder;
import com.arkadiusgru.cls.email.EmailSender;
import com.arkadiusgru.cls.model.Role;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.registration.token.ConfirmationToken;
import com.arkadiusgru.cls.registration.token.ConfirmationTokenService;
import com.arkadiusgru.cls.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UserService userService;
    private final EmailVerify emailVerify;
    private final EmailSender emailSender;
    private final ConfirmationTokenService confirmationTokenService;
    private final EmailBuilder emailBuilder;

    public String register(RegistrationRequest request) {

        boolean isValidEmail = emailVerify.test(request.getEmail());
        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");

        }

        String token = userService.signUpUser(new User(
                request.getFirstName(),
                request.getLastName(),
                request.getEmail(),
                request.getPassword(),
                request.getRole(),
                request.getAddress()));

        String link = "http://localhost:8080/api/confirm-registration?token=" + token;
        emailSender.send(request.getEmail(),
                emailBuilder.confirmationEmail(request.getFirstName() + " " + request.getLastName(), link));

        return token;

    }

    public String confirmToken(String token) {

        ConfirmationToken confirmationToken = confirmationTokenService.getToken(token)
                .orElseThrow(() -> new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedAt() != null) {
            throw new IllegalStateException("token expired");
        }

        confirmationTokenService.setConfirmedAt(token);
        userService.enableUser(confirmationToken.getUser().getEmail());

        return emailBuilder.confirmedHtml();

    }

}
