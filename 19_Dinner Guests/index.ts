let guest_list: string[]= ['imran khan','nawaz shareef','asif zardari'];

// for (let i=0 ; i<guest_list.length; i++){
//     console.log( 'Dear Mr. ' + guest_list[i] + ',\n\n its our pleasure to invite you in our party. \n\nthank you!\n\n')
// }

let absent_guest :string = 'imran khan' ;
let new_guest :string = 'kamran tessori' ;
guest_list[0] = new_guest;

// for (let i=0 ; i<guest_list.length; i++){
//     console.log( 'Dear Mr. ' + guest_list[i] + ',\n\n its our pleasure to invite you in our party. \n\nthank you!\n\n')
// }

// console.log (`Mr.${absent_guest} is not coming to the party.`);
// console.log (`Good news! we find a big table so we are inviting 3 more guests.`)

guest_list.unshift('sir zia khan')
guest_list.splice( 2 , 0 , 'Maryum nawaz');
guest_list.push('Bilawal Bhutto Zardari');

// for (let i=0 ; i<guest_list.length; i++){
//     console.log( 'Dear Mr. ' + guest_list[i] + ',\n\n its our pleasure to invite you in our party. \n\nthank you!\n\n')
// }

// console.log('\nsorry we can not arrange big table, only two peoples will be invited.');

// yahan per mainay gueast remove kiye hain.
while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
//    console.log(`sorry Mr ${remove_guest}, you are not invited for dinner.`); 
}

// humare bachay hoay 2 invited guest.
// for(let i=0 ; i<guest_list.length; i++){
//     console.log( 'Dear Mr. ' + guest_list[i] + ',\n\n you are still invited. \n\nthank you!\n\n')
// }

//mene sare guest array se remove kar diye hain.
guest_list.splice(0,2);
console.log(guest_list);

// Exercise 19.

//print the message indicating the number of people you're inviting to dinner.

console.log(`Total Number Of Guest Are: ${guest_list.length}`);



