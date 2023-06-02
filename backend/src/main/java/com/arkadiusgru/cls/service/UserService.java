package com.arkadiusgru.cls.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.arkadiusgru.cls.model.User;
import com.arkadiusgru.cls.registration.token.ConfirmationToken;
import com.arkadiusgru.cls.registration.token.ConfirmationTokenService;
import com.arkadiusgru.cls.repos.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;
    private final static String USER_NOT_FOUND_MSG = "User with email %s not found";
    private final ConfirmationTokenService confirmationTokenService;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email)));
    }

    public String signUpUser(User user) {

        boolean isExists = userRepository.findByEmail(user.getEmail()).isPresent();

        String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());

        user.setPassword(encryptedPassword);
        
        userRepository.save(user);
        String token = UUID.randomUUID().toString();
        // here is created token which is valid for 15 minutes. User has to clikc on
        // link in email to confirm registration.

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token, LocalDateTime.now(), LocalDateTime.now().plusMinutes(15), user);

        confirmationTokenService.saveConfirmationToken(confirmationToken);

        logger.info("User with email {} has been registered", user.getEmail());

        // instead of returning token, we can return some message to frontend
        if (isExists) {
            throw new IllegalStateException("email already taken");

        } else {
            return token;
        }

    }

    public int enableUser(String email) {
        return userRepository.enableUser(email);

    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public void deleteUserById(Long id) {

        userRepository.deleteConfirmationTokenByUserId(id);
        userRepository.deleteUserById(id);

    }

    public void updatePassword(Long id, String password) {
        String encryptedPassword = bCryptPasswordEncoder.encode(password);
        User user = userRepository.findById(id).get();
        user.setPassword(encryptedPassword);
        userRepository.save(user);

    }

    

}