# topics

- conditions
- if else
- switch case
- ternary operator condition
- array
- object
- Date
- Math

## if...esle

The `if...else` statements executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional `else` clause will be executed

## switch case

The `switch` statement evaluates an expression, matching the expression's value against a series of `case` clauses, and executes statements after the first `case` clause with a matching value untill a break statement is encountered. The default clause of a switch statement will be jumped to if no `case` matches the expressions value.

## Ternary operator

### Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

The conditionan ternary operator is the only javascript operator that takes three operands: a condition followed by a question mark `?` , then expression to execute if the condition is truthy, followed by a colon `(:)`, and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an `if...else` statement.

## Array

In javascript arrays aren't premitive, but are instead `Array` object with the following core characteristics

- Javascript arrays are resizable and can contain a mix of different datatypes
- Javascript arrays are `zero indexed`. The first element of the array is at `0` index and the second is at `1` and so on. The last element is at the value of the array's `length` property `-1`

```javascript
let arr = ["zareel", "Shine", "Shon", 118, true];
```

## object

The `object` type represents one of javascript `datatype`. It is used to store various keyed collections and more complex entities.

eg:

```javascript
let name = {
  firstName: "zareel",
  lastName: "kalam",
};
```

## Date

Date objects are created with the `new Date()` constructor. There are 9 ways to create a `new Date()` object

# Math

The javascript `Math` object allows you to perform mathematical tasks on numbers

# loops
