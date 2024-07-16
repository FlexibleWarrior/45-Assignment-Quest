"use strict";
//43.Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Waeslay', 'Albes Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'the Great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianArray = copyArray(magician);
make_great(magician);
console.log('\n\nthis is my original Array:');
show_magicians(magician);
console.log('\n\nthis is my modified copy of the Array:');
show_magicians(copymagicianArray);
