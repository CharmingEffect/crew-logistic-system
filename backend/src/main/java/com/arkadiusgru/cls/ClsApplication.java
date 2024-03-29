package com.arkadiusgru.cls;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Base64;

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
				byte[] imageBytes = Base64.getDecoder().decode(
						"iVBORw0KGgoAAAANSUhEUgAAAgAAAAHkBAMAAAC6a4rAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURQAAAAAAAAAAAAAAAAAAAAAAAOArGaIAAAAFdFJOUwA0crLYtKxDpQAADJhJREFUeNrtnUl7nLwShRmaPR7Y44E9tsO+b/L0nqn+/1+5iyT+kthuJKQ6KlHS2u5uvVSdOioJyLKA4+bx8ent7e3t7fXx4SbTNfLbpwv9PdbXBzWzf/xGn48fGhjkT3RlrK/1sad/+422xvcDI8ifyWQcFsETmY6XI06/GMh8LLXiy3/IIMgHsh2HUoLiQvbjQGlwS7vG2h5k/ne0d7TK538MAi7zPwIBt/nHT6AkUk2gcJ4/rTFXw/ziDiBqPzCQjzFHO/+G/IwXtQIYtxDm3uZPS5QAOn8AaIpw/ifyOVrNCUBEtKpOgBiToCTfI7IkGLwDmBUr4M/Ra1sDxGwGGiLVIZCzzD+iEOAJgHhCgCkA4gkBrgCIJgQupDsETsQ3orCDAyOAGOxgQZyj1iyBRESj3hoYS1/gxAtAvgx2zAAm3RlARMIBVOwAhLvBgR3ArDwDhOdABQDQa64B0usAIgNEe6ESAUCyF2ogAASvBy4QAHILYUGYoXYhJF4EOhCAUbcEyBWBnEi3CJQwAEJFoIEBOOvWQLHLAdj8he4QFTgApFwDhapgBQRw1q2BQlVwAAKYdRcBmWUAWQREloESCqDVXQRE9sYbKIBRdxUUWQcHKIBZdxWUWAdzLAB520NYGyDQCKABiDsvV4IBiHNCVQKAHeKsYAMGMCYAqp2wQC+sHsAABiBuMXBJAJQDAM9f3nIwAQAPaevhPAFIAHR3RBKABCABSABSFUgANO+MJABpMZQAJACpJZYAKAYwJABpYyQBSAASgARAL4CLdgDqrbB2AOo7QuiDouK6wic4AGEnJSs4AGEnJTs4gEl3EZDWE8NroLAD81UAAL1uCZAlAnmA+YuyQqcQACQ5gS4IAEE5cCHdOVAQ6c6BKhCAUbcECOoJXAIBkLIkzkPNX4oIlMEAjLo1UIwIdMEACFkSD8EACFHBcPOXoYJFQAC97iIgpAxUAQGIWBA2AQHMuqugkDoYsArKqIMX7QBCzl/C5kAeFECbAKg2giKsYBkUwDkBULorJGgxUCUACUACoHo9rB5AkwAo14AEIFWBBCABUL0YSgC0N0RO2gGEbYi0CYDypmitHYCAjaFcO4CgW2OLdgAizgcM2gGEPCAxaQcg4pBUyI6IiHePhlwNiTgoGdILi7h7NKQVlDD/kFZQyH1jym1ASCck5NbJTrcNCFkHhdxBX+qugiHrYJbpLgNiHiMy6C4C4cqAmJunK91FIJwKinmQTqDVgKCnqIRRQUGPFGx0a2B6jE4gFZT0MDHVPjBLzxILIwKinian/nmCAW4fFfZg4UazCwjTFRL2WN30qi31L1npdEsAvinSSwNQqnYB+KaIOA1EW6FJHgCsCp7lAahU2yD0ekigBGC94CwRQKdbArAiUEsEABSBJct0i8AkEwBOBHqZAHAiIHP+OBGYhQKALQfOUgE0mosgcHtkkTp/VE9gEgsA1Blt5QKAFMJV7vwxhVBwBmAKYSsZQKPXBsKa46IzAFEIe9EAACtC2fPnL4SzcADshfAsHAB7IaylA2h0ZwB7IRSfAdyt0Vo+gE53BjB3RSLIAF4zGEEGsObAEsP8Oc3gGAWAQnkGMJrBODKA0QyOkQBgy4E2EgCZ8gxgK4RTNABK5RnAZAbXLNOdA1NEACrdGcBTCGPKAJZt4ikqAAxmsI8KAEMOZHENlc0w1kJ4jgyA985gHRmAXHkGeC+EY3QAGr02kKMQrll8Q7ENZCiEfYQAKs1F0LcILFmM46K5CHoWgTZKAB7dcJTz9ygCc5wAMtUuwKsI9JECqDS7gMzjBtEa6fy99QRi1UBvVmiKFkCn2Qd6bIr00QKoNBthj2Y4AUgAEgDdVjABSABiHUUCoHo17G05GC8AT02xeOfvZz28RgzAyyGBJWIAXtbDc8QAvKyHp4gBeHFCY8QAvBiBPmIAmXIb4KUtGnMV9KKCc9QACt0a6EUE2rgBdJpXAl7agnPkAJxXxOfIATjnQB07gFJ3Bjj3BM7xA2h0Z4CjDE5ZpjsE6iMAyFVLoFsItMcAkF80K4CLF6iPAmCnHfzfYea/LwmW7ECj1KuAv8a99fxfsmONTqcF+GMMyuef5TYElqsV8PHwBK7PP7u8HFwH5nprcRFrhbgzmv/3jU8pNkNE7iguHupfFbNI5s9u6f++uozXJxfXtHB9MC6o0mTg3jwrb7+5TP99u00WgcLqHEP+9IkW/Hgw/SrjZIG2vSx3cW8e3/6A8OP1wfg/TwLdYj7s+zk3N7ePjzc3dpeyEdgw6JAnOQZ5K8Z7aANLXs+ghP6YQlzXpMCeZfm7ubSGLwXv/T5QE7uxdo4oTQI1MTthrZMOfZrnIqt5dI8WpNx++Qxb4EMOM5SidlAK/FZeJamFXgTYyukEbSJ82PAKooHhCHzs8gJUMBe0kTSEONJVyNlK64IcaKjEbCZ2YfazGinbqc+BTnYPQjaU70OdaRFypuR+/w1eT1///NfaQQOhrvhu/+0tg9umyEnEtvrd/q/vHH9+47qxyjv/zcbo5j1UrRtASIfkzuFkX+cawUY3Grbh5r+hgganhmvXDyAiegg2/w0VNLiD6mzdDMAagjunEDbI4HmvEcaUw80THsuepay5jJqfteORwnvHHHY+IG1x4pZDCp8Nvrd1lbDWXQN/G8sQ87+qgoUrAMsTx57TwCz/Jk4Atjfjrx7rYW6oP4srgN6LBnqvBuanPDkjYMdjiRY/WliYy2/LFwH7bj/zoYU2z4E480XAzsdRuAfBnc3XTXwRsPtZBK+A8mfiZV0jYP/9h04F0VZ6+SLA5dFsD/zyv30JXSPA6Tb07zW3/G9fwgLw75618G7HF01cEeD8PJYXZvnbVEHHCHB/OOF37vTfWNE7RoCH55JZNc1vvT/0wDECyMOwqIfPu7+k54kAP8/oNSWQO9TckScCPD2n24zALUuiuUWAr9c2mRB4cvqGlScCvL24a1MJc66nX7lFgL/3N07ezZ/hHJwiwOerrHvf5s9QBQt2es6V2qX6bYeYUwR4fYntzJb+VxujThHg9TXGX2HOPb0xnQOA35e5f36Ncl9C2zroWM1ohDdal8WF89NNJ4HQwM9DoOAvtMN+/Th5BvBRBfILd4YZrehntmbAxhflXkXG/wmRwTeAf8XG7xfsV0GQBn5A3fBrrNMpscI/gJlhre3uBVveZsBXweZTAK9bzWbnOq1hANBzfvy+zuacZRAj/C/tnLgl1qjZsr4ybQptFuuGNbxMqtrWDXc5B4D3q8Tx6Vvn5i1vuCtZALQcK23DvhvZAahYAIxsJmvz3Hxu0aLh0sB3FSxY88vQD7R2GeNVBXnCq7cD0AfQwN+J17Hml6Gonb0d0rIPU57Ptjz2PgbQwF+Jx0T3ugo2xh6YzQi/J17JGl6mqj7b2Ca/ecoaXsYAFivX4LUOdpx0jS/pGkIDf8bdwEnX/JJe++sTKwCuD1/s6nodQAN/xh3Xh5MdgDaABhIxmizbY99tAA0k4hSYa+autLLOfD+Raj4bcFUFK6uiwfcTqWVU2Gsq2FjhalgBVBRABe0AdHw/sWcFYHXodUY3A34DaFg/3byuLfBmwC+hZgQwWdW1EBpIIyuA2Q+AihcAo8KQVVDXATSQG4DVidE2gAbSxAugt8nqPoAG0sS50Pja3VU2zrmIGMBsA2AMoIE08wJYbbzthDfC7AC+UsHOJlwGZgCcGvuVsg82ayeKGcBoMac1gAbSwg/Y/KKCG6IQAItNZa/xGsgO4PNJFTaC0cUNoLVY3rV4DeQHcLZI6x5uhIlWbgCThbcb0c0ABIDFQtdGuBEmWrlDjCx0bcJrIABAa25uZ3QzgIiIHcDZfFILXgMBACbzyrbiNRAAYLa4qngNBAAgi+VNDddABIDaPKxbcDOAiIh5tfmpvzuZ/yn75QEAGM3z+gxuBmAAzOYL3BGvgQAAq7mwTeBmAAbARxUczINlOAKA3tjdzuBmAAjAaDyrBa+BxO81P96lbW6aTocAsJpf1hqugQgA/06rNAfQHQNAaxzXLVwDCZFmo7G56dFGGANgMk7sM7gZQEQAs/lvdet8xEpUAMjY3U1wDcQAaE3bnDO2IQoDcDaV9gWugRgAk+m0VrgGEsJs/X1hC2O1qA4DgIyva43WQBCA1nSB02KbATAAZ9PAbsFGmAgTZ5PpCu+MbQbAAMymmT1imwEwAGSa2RO2GYADUBvauwmtgQT6mt5Q2ma0BqIAjIb+dkFrIEEWHH9e2cJULE6HArCaGny0BhIo0/5TwZOpWnYgAG+Y8W7xyut/9x8A0A/7P7ygv0Fcmy7FAAAAAElFTkSuQmCC");
				user.setAvatar(imageBytes);
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
