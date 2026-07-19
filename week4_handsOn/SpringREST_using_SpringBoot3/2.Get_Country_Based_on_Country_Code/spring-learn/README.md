# Hands-on - Get Country based on Country Code

## Objective

Create a REST API that returns country details based on the country code.

## URL

```
GET /countries/{code}
```

Example

```
http://localhost:8083/countries/in
```

## Response

```json
{
  "code": "IN",
  "name": "India"
}
```

## Technologies

- Spring Boot
- Spring Web
- Spring Core XML
- Java 17

## Annotations Used

- @RestController
- @GetMapping
- @PathVariable
- @Autowired
- @Service