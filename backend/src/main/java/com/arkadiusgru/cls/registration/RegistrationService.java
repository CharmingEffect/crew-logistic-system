package com.arkadiusgru.cls.registration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.email.EmailBuilder;
import com.arkadiusgru.cls.email.EmailSender;
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
    private static Logger logger = LoggerFactory.getLogger(RegistrationService.class);

    // private final String TEMPORARY_PASSWORD = new
    // PassGenerator().generateStandardPassword();

    // This is only for developemnt needs to be changed at the end of the project

    private final String TEMPORARY_PASSWORD = "1234";

    public String register(RegistrationRequest request) {

        boolean isValidEmail = emailVerify.test(request.getEmail());
        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");

        }

        String token = userService.signUpUser(new User(
                request.getFirstName(),
                request.getLastName(),
                request.getEmail(),
                TEMPORARY_PASSWORD,
                request.getRole(),
                request.getAddress(),
                request.getPhoneNumber()));

        String link = "http://localhost:8080/api/confirm-registration?token=" + token;
        emailSender.send(request.getEmail(),
                emailBuilder.confirmationEmail(request.getFirstName() + " " + request.getLastName(), link,
                        TEMPORARY_PASSWORD));
        logger.warn("request" + request.toString());
        logger.warn("Temporary password (NEEDS TO BE CHANGED FOR PRODUCTION MODE): " + TEMPORARY_PASSWORD);
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
