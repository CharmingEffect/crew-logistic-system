package com.arkadiusgru.cls;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;

@SpringBootApplication
@ConfigurationProperties(prefix = "pinnacle.email")
public class ClsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClsApplication.class, args);
	}

}
