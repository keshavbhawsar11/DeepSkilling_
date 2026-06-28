# Exercise 7 - Financial Forecasting

## Scenario

Develop a financial forecasting tool that predicts future values using recursion.

---

## Objective

Implement a recursive algorithm to calculate the future value based on a fixed annual growth rate.

---

## 1. What is Recursion?

Recursion is a programming technique in which a function recursively calls itself and keep on solving small versions of the problem till achieving the desired output/ reaching to the base case.
It consists of two cases:-
- Base case : Recursion stops when reached base case.
- Recursive case : Recursion takes place in these cases.

It can simplify certain problems by by eliminating the manual programming techniques. It reduces the number of lines of code which is a help for the programmer too.

---

## Time Complexity

Each recursive call executes once for every year.

Time Complexity: **O(n)**

Space Complexity: **O(n)** (due to recursion stack)

---

## Optimization

The recursive solution can be optimized by:

- Dynamic Programming (Memoization)
- Iterative approach (Loop)

Both approaches reduce recursion overhead and avoid excessive stack usage.

---

## Files

- FinancialForecast.java

---

## Output

```text
Current Value : 10000.00
Growth Rate  : 10%
Years        : 5
Future Value : 16105.10
```