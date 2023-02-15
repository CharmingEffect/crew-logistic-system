package com.arkadiusgru.cls.email;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.util.CustomConfigProperties;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class EmailService implements EmailSender {

    private final static Logger LOGGER = org.slf4j.LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;
    private final CustomConfigProperties customConfigProperties;

    @Override
    @Async
    public void send(String to, String email) {

        try {

            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject(customConfigProperties.getSubject()); // this shiud be in configuration file
            helper.setFrom(customConfigProperties.getName());// this shoud be in configuration file
            mailSender.send(mimeMessage);

        } catch (MessagingException e) {
            LOGGER.error("Failed to send email", e);
            throw new IllegalStateException("Failed to send email", e);
        }

        System.out.println();

    }

}