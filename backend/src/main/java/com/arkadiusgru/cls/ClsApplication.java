package com.arkadiusgru.cls;

import java.io.IOException;

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
	public static void main(String[] args) throws IOException {
		SpringApplication.run(ClsApplication.class, args);
		// openHomePage();
	}

	
	// private static void openHomePage() throws IOException {
	// Runtime rt = Runtime.getRuntime();
	// rt.exec("rundll32 url.dll,FileProtocolHandler " + "http://localhost:8080");
	// }

}
