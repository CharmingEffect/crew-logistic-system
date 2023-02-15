package com.arkadiusgru.cls;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

import com.arkadiusgru.cls.util.CustomConfigProperties;

@SpringBootApplication
@EnableConfigurationProperties(CustomConfigProperties.class)
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ClsApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(ClsApplication.class, args);
	}

	// private static void openHomePage() throws IOException {
	// Runtime rt = Runtime.getRuntime();
	// rt.exec("rundll32 url.dll,FileProtocolHandler " + "http://localhost:8080");
	// }

}
