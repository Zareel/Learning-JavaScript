# JavaScript

## History

JavaScript was invented by Brendan Eich in 1997 and became an ECMA standard
The first name of JavaScript is MOCHA, then it became liveScript and later chenged to JavaScript around the year 2000

That time the two main browsers were netscape and internet explorer

## What is ECMA Script?

ECMAScript is a JavaScript standard inteded to ensure the interoperability of different browsers. In Short it is a language specification

## What is ES6?

ES6 2015 was a second major revision to JavaScript
It is the finest standard set to write the code

## Fundamentals of JavaScript

- Values
- Operators
- Variables
- Decisions
- Loops
- Functions

## What is meant by runtime environment?

The runtime environment is the environment in which a program or application is executed. It is the hardware and software infrastructure that support the running of a particular codebase in real time.

# Data types

JavaScript provides 8 different data types which are:

- Undifined
- null
- boolean
- string
- symbol
- bigint
- number
- object

Values are divided into two

- Primitive (can have only one value)
- Non promitive (array and objects)

# Primitive values

## Undefined

Conceptually `undefined` indicates the absence of a value. When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation to a `undefined` variable your resule will be a `NaN` which means "Not a Number". If you concathenate a string with an `undefined` variable, you will get a string of `undefined`

## null

`null` indecates the absence of an object

## boolean

The `boolean` vaule is introduced by George Boole.
It is inhabitated by two vales `true` and `false`. `Boolean` values are usually used for conditional operators, including `ternary operators`, `if...else`, `while` etc:

## string

The `string` type represents textual data enclosed in single or double quote.

```javascript
let firstName = "zareel";
```

## number

The `number` type can be integer or floating point

# Non Primitive values

## Array

example

```javascript
let arr = [25, "zareel", true, "118"];
```

## Object

example

```javascript
{
  firstName: zareel;
  lastName: kalam;
}
```

# Variables

`let`, `var`, and `const` are keywords use to declare variables.

```javascript
var x = 25;
let y = "25";
const z = "zareel";
```

One of the biggest problems with declaring variable with the `var` keyword is that you can easily overwrite the variable declarations

```javascript
var name = "zareel";
var name = "shon";
console.log(name);
```

In the code above, the name variable is originally declared as `zareel` and then overridden to be `shon`. The console the desplays the string `shon`. Because this behaviour does not throw an error, searching for and fixing bugs becomes more difficult

A keyword `let` was introduced in ES6, a major update to JavaScript to solve this potential issue with the `var` keyword.

if you replace `var` with `let` in the code above, it results in an error.
With `let` a variable with the same name can be declared only once.

# Operators

## Assignment operator

`(=)` x = y

`(+=)` x = x + y

`(-=)` x = x - y

`(*=)` x = x \* y

`(/=)` x = x / y

`(%=)` x = x % y

`(**=)` x = x \*\* y

```javascript
let number = 2;
number += 5;
console.log(number);
//output 7
```

# Arthmetic operator

`(+)` addition

`(-)` subtraction

`(*)` Multiplication

`(/)` Division

`(%)` Modulus (remainder)

`(++)` Increment

`(--)` Decrement

```javascript
let number1 = 4;
let number2 = 6;
let result = number1 + number2;
console.log(result);
//output  10
```

# Comparison Operator

`(==)` eual to

`(===)` equal value and equal type

`(!=)` not equal to

`(!==)` not equal value and not equal type

`(>)` greater than

`(<)` lesser than

`(>=)` greater than equal to

`(<=)` lesser than equal to

`(?)` ternary operator

```javascript
let temperature = 20;
if (temperature <= 20) {
  console.log("Its cold outside");
} else if (temperature >= 30) {
  console.log("Its hot outside");
} else {
  console.log("Have a good day");
}
//output "Its cold outside"
```

# Logical Operator

`(&&)` and

`(||)` or

`(!)` not

# Type Operator

`typeof` returns the type of a variable

```javascript
let name = "zareel";
console.log(typeof name);
//output string
```
