package com.arkadiusgru.cls.util;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@ConfigurationProperties(prefix = "config-email")
@Component
@Getter
@Setter
public class CustomConfigProperties {

    private String subject;
    private String name;

}