"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['imran khan', 'nawaz shareef', 'asif zardari'];
// for (let i=0 ; i<guest_list.length; i++){
//     console.log( 'Dear Mr. ' + guest_list[i] + ',\n\n its our pleasure to invite you in our party. \n\nthank you!\n\n')
// }
let absent_guest = 'imran khan';
let new_guest = 'kamran tessori';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\n its our pleasure to invite you in our party. \n\nthank you!\n\n');
}
console.log('Mr.imran khan is not coming to the party.');
console.log('Good news! we find a big table so we are inviting 3 more guests.');
guest_list.unshift('sir zia khan');
guest_list.splice(2, 0, 'Maryum nawaz');
guest_list.push('Bilawal Bhutto Zardari');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\n its our pleasure to invite you in our party. \n\nthank you!\n\n');
}
