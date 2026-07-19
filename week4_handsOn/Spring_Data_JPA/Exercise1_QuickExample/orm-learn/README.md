# Spring Data JPA - Quick Example

## Objective

This project demonstrates the basics of Spring Data JPA with Hibernate and MySQL. It retrieves country details from the database using the `JpaRepository` interface.

## Technologies Used

- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven
- IntelliJ IDEA Community Edition

## Project Structure


src
├── main
│ ├── java
│ │ ├── model
│ │ │ └── Country.java
│ │ ├── repository
│ │ │ └── CountryRepository.java
│ │ ├── service
│ │ │ └── CountryService.java
│ │ └── OrmLearnApplication.java
│ └── resources
│ └── application.properties


## Database

Database Name:

```text
ormlearn

CREATE TABLE country(
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO country VALUES ('IN','India');
INSERT INTO country VALUES ('US','United States of America');


Features
Configure Spring Boot with MySQL
Create JPA Entity
Create Repository using JpaRepository
Create Service Layer
Retrieve all countries using findAll()
Display data in console using Logger

#OUTPUT
Inside main

Start

countries=[
Country{code='IN', name='India'},
Country{code='US', name='United States of America'}
]

End