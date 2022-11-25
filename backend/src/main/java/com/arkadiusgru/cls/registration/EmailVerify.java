package com.arkadiusgru.cls.registration;

import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class EmailVerify implements Predicate<String> {

    @Override
    public boolean test(String s) {
        Predicate<String> isValidEmail = email -> email.contains("@");
        String email = isValidEmail.test(s) ? "valid" : "invalid";

        if (email == "valid") {
            return true;
        } else {
            return false;
        }

    }

}
