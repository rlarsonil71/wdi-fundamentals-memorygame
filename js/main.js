/* UNIT 7 
console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// Display values of any two cards to console
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

// UNIT 8
var cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

// First flipped card
cardOne = cards[0];

// Add cardOne to cardsInPlay array
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

// Second flipped card
cardTwo = cards[2];

// Add cardTwo to cardsInPlay array
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

// Check if 2 cards have been played
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}



