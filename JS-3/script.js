//  variables, arithmetic operators.
// Datatype. typeof operators.

// let, const, var

// let vs const.
// let can be reassigned.
// const cannot.

// var

// Why we don't use var?
// var allows variables names to be duplicated.

// var a = 20;
// var a ="abc";
// console.log(a);

// hoisting.
console.log(b);
var b = 30;

// console.log(a);
// never use var.


// let x = 5;
// let x = 100;

// ocnsole.log(y);
// let y = 30;

// const: once assigned cannot be changed.
// const dob = 1995;
// dob = 1990;
// console.log(dob); this is not allowed!

// comparison operators: All these return either true or false.
// =, !=, <, >, <=, >=, ===, !==

// == equality operator
console.log(20==20); // true
console.log("abc"=="hello"); //false

// != not equal to: if both values are diff result is true, false other wise.
console.log("abc" != "hello");
console.log(50 != 50);
console.log("abc" != "abc");

// < less then operator
console.log(80<10);
console.log(100<200);

// > greator than operator
console.log(50>10);
console.log(50>50);

// <= less then equal to op
console.log(5<=5);
console.log(10<=11);

// >= greator then equal to op
console.log(20>=120);
console.log("abc">="abc");

// == vs === and != vs !==.
// == weak equality operator, checks only value Not datatype.

console.log(10=="10");
console.log(true==1);

console.log(true==false);
console.log("1"=="3")

// always use ===
// === checks both datatype and value.
console.log(50==="50");
console.log(true===1);

console.log(false===false);
console.log(100===110);


