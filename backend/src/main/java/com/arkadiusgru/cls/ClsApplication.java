package com.arkadiusgru.cls;

import java.io.IOException;
import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.arkadiusgru.cls.model.Address;
import com.arkadiusgru.cls.model.Role;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.repos.UserRepository;
import com.arkadiusgru.cls.util.CustomConfigProperties;

@SpringBootApplication
@EnableConfigurationProperties(CustomConfigProperties.class)
@EnableGlobalMethodSecurity(prePostEnabled = true)
@CrossOrigin
public class ClsApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(ClsApplication.class, args);

	}

	// create default user with admin role and password 1234 on startup of the
	// application
	@Bean
	CommandLineRunner init(UserRepository userRepository) {
		return args -> {

			String defaultEmail = "admin@auth.com";

			if (userRepository.findByEmail(defaultEmail).isPresent()) {
				System.out.println("User already exists");
			} else {
				User user = new User();
				user.setFirstName("John");
				user.setLastName("Smith");

				BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
				user.setPassword(encoder.encode("1234"));
				user.setRole(Role.ADMIN);
				user.setEmail(defaultEmail);
				user.setEnabled(true);
				user.setCreatedAt(LocalDateTime.now());
				GrantedAuthority authority = new SimpleGrantedAuthority("ADMIN");
				user.setAuthority(authority);
				Address address = new Address();
				address.setAddressLine1("Admin Court");
				address.setAddressLine2("19 Authenitaction Street");
				address.setCity("Cryptopolis");
				address.setCountry("Cryptoland");
				address.setPostalCode("CYP 123");
				user.setAddress(address);
				userRepository.save(user);
			}

		};

	}

}
