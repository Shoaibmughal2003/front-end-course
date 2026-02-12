// Three ways to creat Variabe.

// Using Var
// Using Let
// using Const

// Let
let fullname = "Ali";

// Reassigning a value.
fullname = "Muhammad Ali";
console.log(fullname);

let favNumber = 20;

// Datatype: Total 8 datatype.
// Number, string, boolean, bignit, symbol, object, null, undefined.
// "" -> is called string: Sequence of characters.
// 80, 9, 0, -1 Number.

//  How to check datatype of a variable?
console.log(typeof fullname);
console.log(typeof favNumber);

// Boolean: true/false.

let adult = true;
console.log(adult);

let gameplaying = false;
console.log(gameplaying);

console.log(typeof adult);
console.log(typeof gameplaying);

// Bigint: What problem number has that bigint trying to solve?
// number has a limit: 2^53
// What to do now?
// use bigint
// bigint: arbitrary length

let accountBalance = 12345678907534568676623n;
console.log(accountBalance);
console.log(typeof accountBalance);

// What is null?
// Null; Is a value which means absence of a value.
// Cnic: null

let value = null;
console.log(value);
console.log(typeof value);

// 5/0 division by zero is not allowed. undefined
// Undefined: Any state which cannot be defined!
// If variable has not been initialized it results in Undefined.

let output;
console.log(output);

// operators: =
// = assignment operators.

let a = 20;
let b = 30;

// How to assign variable value b in a?

a = b;
b = 100;
console.log(a);
console.log(b);


// swap these two variable values.

let x = 20;
let y = 30;

let z = x;
x = y;
y = z;
console.log(x);
console.log(y);
