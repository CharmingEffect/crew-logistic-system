package com.arkadiusgru.cls;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.arkadiusgru.cls.custom_config.CustomConfigProperties;

@SpringBootApplication
@EnableConfigurationProperties(CustomConfigProperties.class)
public class ClsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClsApplication.class, args);
	}

}
