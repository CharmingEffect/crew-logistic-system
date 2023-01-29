package com.arkadiusgru.cls.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.arkadiusgru.cls.email.EmailBuilder;

@Controller
public class CustomErrorController implements ErrorController {

    EmailBuilder emailBuilder = new EmailBuilder();

    @RequestMapping("/error")
    public String handleError() {
        // do something like logging

        return "error";
    }

}