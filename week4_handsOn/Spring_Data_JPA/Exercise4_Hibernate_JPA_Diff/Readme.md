# Exercise 5: Difference Between JPA, Hibernate and Spring Data JPA

## Objective

Understand the relationship and differences between Java Persistence API (JPA), Hibernate, and Spring Data JPA, and learn how Spring Data JPA simplifies database operations.

---

# What is ORM?

**ORM (Object Relational Mapping)** is a technique that maps Java objects to database tables.

Instead of writing SQL queries for every database operation, developers interact with Java objects and the ORM framework automatically converts those operations into SQL.

### Example

Java Object

```java
Country country = new Country("IN", "India");
```

↓

ORM converts it into

```sql
INSERT INTO country VALUES ('IN', 'India');
```

---

## Advantages of ORM

- Reduces boilerplate SQL code
- Improves code readability
- Database independent
- Easier maintenance
- Automatic object-table mapping
- Supports transactions

---

# What is JPA?

**JPA (Java Persistence API)** is a Java Specification (JSR 338) for persisting, reading, updating, and deleting Java objects.

JPA only defines **how persistence should work**.

It **does not provide any implementation**.

### Features

- Standard API for persistence
- Defines annotations like:
  - `@Entity`
  - `@Table`
  - `@Id`
  - `@Column`
- Requires an implementation such as Hibernate.

---

# What is Hibernate?

Hibernate is an **Object Relational Mapping (ORM) Framework**.

It is one of the most popular implementations of the JPA specification.

Hibernate converts Java objects into SQL statements and communicates with the database.

### Features

- Implements JPA
- Generates SQL automatically
- Supports caching
- Supports transactions
- Database independent
- Reduces JDBC boilerplate code

---

# What is Spring Data JPA?

Spring Data JPA is a Spring module built on top of JPA.

It **does not implement JPA itself**.

Instead, it provides another abstraction layer over JPA implementations (such as Hibernate) to reduce boilerplate code.

### Features

- Uses Repository interfaces
- Provides built-in CRUD methods
- Generates queries automatically
- Supports custom query methods
- Transaction management
- Minimal coding

Example:

```java
public interface CountryRepository extends JpaRepository<Country, String> {

}
```

Spring automatically provides methods like:

- save()
- findById()
- findAll()
- deleteById()
- existsById()

without writing any implementation.

---

# Relationship Between JPA, Hibernate and Spring Data JPA

```
Application
      │
      ▼
Spring Data JPA
      │
      ▼
JPA Specification
      │
      ▼
Hibernate (Implementation)
      │
      ▼
Database
```

---

# Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | No |
| Provides ORM | No | Yes | Uses Hibernate/JPA |
| CRUD Operations | Standard API | Yes | Simplified |
| Boilerplate Code | Moderate | Less | Very Less |
| Query Generation | No | HQL/Criteria | Automatic Method Names |
| Transaction Management | No | Yes | Yes |

---

# Hibernate Example

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();
session.close();
```

---

# Spring Data JPA Example

Repository

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

Service

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

---

# Advantages of Spring Data JPA over Hibernate

- Less code
- No SessionFactory management
- No Transaction management code
- Built-in CRUD methods
- Automatic query generation
- Easy integration with Spring Boot
- Faster development

---

# Summary

- **JPA** is a specification.
- **Hibernate** is an implementation of JPA.
- **Spring Data JPA** is a Spring abstraction built on top of JPA that simplifies database access by reducing boilerplate code.

---

## Learning Outcome

After completing this exercise, I understood:

- The purpose of ORM.
- The role of JPA as a specification.
- Hibernate as an ORM implementation.
- Spring Data JPA as an abstraction over Hibernate.
- How Spring Data JPA simplifies CRUD operations using `JpaRepository`.