package com.arkadiusgru.cls.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping("/login")
    public String login() {
        return "/login.html";
    }

}
