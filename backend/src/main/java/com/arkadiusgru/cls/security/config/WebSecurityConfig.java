package com.arkadiusgru.cls.security.config;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.arkadiusgru.cls.service.UserService;

import lombok.AllArgsConstructor;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig {

    private final UserService userService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final Filter jwtFilter;

    // admin site has to be disabled for people from outside anyone how does notreact build folders is not allows by spring boot
    // have status as ADMIN

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http = http.csrf().disable().cors().and();
        http = http.sessionManagement(management -> management
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(daoAuthenticationProvider());

        http = http.exceptionHandling(handling -> handling.authenticationEntryPoint((request, response, exception) -> {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, exception.getMessage());
        }));

        http.headers().frameOptions().disable();

        //.antMatchers("/api/auth/**", "/api/admin/**", "/api/confirm-registration", "/api/**", "/v3/api-docs/**", "/swagger-ui.html/**", "/uploads/**" , "/asset/**", "/static/**", "/public/**", "/js/**", "/static/**", "/static/index.html", "/resources/**")

        http.authorizeHttpRequests()
                .antMatchers("/api/auth/**", "/api/admin/**", "/api/confirm-registration", "/api/**", 
                "/uploads/**" , "/asset/**", "/static/**", "/public/**", "/js/**", "/static/**", "/static/index.html", "/resources/**" ,"/" , "/dashboard-admin" ,
                "/dashboard-crew", "/user-mngmt", "/job-mngmt", "/calendar-admin" , "/messages" ,"/profile", "/jobs", "/calendar-crew"
                
                )
                .permitAll()
                .anyRequest().authenticated(); 

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(userService);
        return provider;

    }

    

}
