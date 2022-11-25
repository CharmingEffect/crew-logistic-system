package com.arkadiusgru.cls;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.arkadiusgru.cls.repos.UserRepository;

@SpringBootTest
class ClsApplicationTests {

	@Autowired
	UserRepository userRepository;
	private static final Logger logger = LoggerFactory.getLogger(ClsApplicationTests.class);

	@Test
	void contextLoads() {

	}

}
