//  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// * Write three versions of this program, making sure each message is printed for the appropriate color alien -->


let alienColours: string = "green";

// * If the alien is green, print a message that the player earned 5 points.
// * If the alien is yellow, print a message that the player earned 10 points.
// * If the alien is red, print a message that the player earned 15 points.

//version 1 of the program.
if ( alienColours === "green"){
    console.log("version 1: player earned 5 points.");

}else if(alienColours === "yellow"){
    console.log("player earned 10 points.");

} else if(alienColours === "red"){
    console.log("player earned 15 points.");
}else{
    console.log("please select the right colour.")
}

//version 2 of the program.
alienColours = "yellow";

if ( alienColours === "green"){
    console.log("player earned 5 points.");

}else if(alienColours === "yellow"){
    console.log("version 2: player earned 10 points.");

} else if(alienColours === "red"){
    console.log("player earned 15 points.");
}else{
    console.log("please select the right colour.")
}

//version 3 of the program.
alienColours = "red";

if ( alienColours === "green"){
    console.log("player earned 5 points.");

}else if(alienColours === "yellow"){
    console.log("player earned 10 points.");

} else if(alienColours === "red"){
    console.log("version 3: player earned 15 points.");
}else{
    console.log("please select the right colour.")
}