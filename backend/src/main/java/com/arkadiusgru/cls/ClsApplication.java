package com.arkadiusgru.cls;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.arkadiusgru.cls.model.Role;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.repos.UserRepository;
import com.arkadiusgru.cls.util.CustomConfigProperties;

@SpringBootApplication
@EnableConfigurationProperties(CustomConfigProperties.class)
public class ClsApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(ClsApplication.class, args);
	}

	// private static void openHomePage() throws IOException {
	// Runtime rt = Runtime.getRuntime();
	// rt.exec("rundll32 url.dll,FileProtocolHandler " + "http://localhost:8080");
	// }

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:8080");
			}
		};
	}

}
