package com.arkadiusgru.cls;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.arkadiusgru.cls.util.CustomConfigProperties;

@SpringBootApplication
@EnableConfigurationProperties(CustomConfigProperties.class)
public class ClsApplication {

	// what this functuion does is that it starts the application
	// change to test
	// what is this

	// what this functuion does is that it starts the application
	public static void main(String[] args) {
		SpringApplication.run(ClsApplication.class, args);
	}

}
