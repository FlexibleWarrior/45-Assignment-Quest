"use strict";
//2.Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
let personName = '';
personName = prompt('what is your name') || '';
if (personName !== `Hello ${personName}, would you like to learn some Python today?`) {
}
else {
    alert('You have to fill your name!');
}
