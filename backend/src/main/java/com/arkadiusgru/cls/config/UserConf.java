package com.arkadiusgru.cls.config;

import org.springframework.context.annotation.Configuration;

import com.arkadiusgru.cls.model.Role;
import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.repos.UserRepository;

@Configuration
public class UserConf {
    private final UserRepository userRepository;

    public UserConf(UserRepository userRepository) {
        this.userRepository = userRepository;
        createUsers();
    }

    public void createUsers() {
        User test = new User("Arkadiusz", "Grudzien", "admin@wp.pl", "", Role.ADMIN, null);
        test.setLocked(false);
        test.setEnabled(true);
        userRepository.save(test);
    }
}
