package com.cognizant.springlearn;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER =
			LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(SpringLearnApplication.class, args);

		LOGGER.info("Inside main");

		displayCountries();
	}

	private static void displayCountries() {

		LOGGER.info("Start");

		ClassPathXmlApplicationContext context =
				new ClassPathXmlApplicationContext("country.xml");

		List<Country> countries =
				(List<Country>) context.getBean("countryList");

		LOGGER.debug("Countries: {}", countries);

		context.close();

		LOGGER.info("End");
	}
}