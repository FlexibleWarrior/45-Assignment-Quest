"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Equality and inequality Test. 1
console.log("Equality Test With String: ", "Apple" === "Apple");
//Equality and inequality Test. 2
console.log("inequality Test With String: ", "Apple" != "Orange");
//tests using the lower case function.
console.log("Lower Case Function test:", "HELLO".toLowerCase() === "hello");
// Numerical test involving equality.
console.log("Equality test with number:", 26 === 26);
// Numerical test involving inequality.
console.log("Inequality test with number:", 26 != 35);
// greater than test.
console.log("Greater than test: ", 10 > 5);
// less than test.
console.log("Greater than test: ", 5 < 10);
//greater than or equal to,
console.log("Greater than and equal to test: ", 10 >= 10);
// and less than ot equal to.
console.log("Less than or equal to test:", 5 <= 10);
//test using "and" & "or" operators.
console.log("and operators test:", 5 === 5 && 10 > 5);
//test using  "or" operators.
console.log("and operators test:", 5 === 5 || false);
//test wether an item is in a array.
const fruits = ['Pear', 'Banana', 'Guava'];
console.log('test "pear" in the array:', fruits.includes('Pear'));
//test wether an item is not in a array.
console.log('testing "Apple" is not in array', !fruits.includes("Apple"));
