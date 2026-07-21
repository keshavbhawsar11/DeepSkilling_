# Loan Microservice

## Objective

Create a simple Loan Microservice using Spring Boot.

## Endpoint

GET /loans/{number}

## Example

http://localhost:8081/loans/H00987987972342

## Sample Response

{
"number":"H00987987972342",
"type":"Car",
"loan":400000,
"emi":3258,
"tenure":18
}

## Technologies

- Spring Boot
- Spring Web
- Maven
- Java 17