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

// UNIT 8 and 9

// Global Variables
var cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

// Function: checkForMatch
// Purpose: Checks for a match of 2 cards
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}

// Function: flipCard
// Purpose: User flips a card
var flipCard = function (cardId) {

	// UNIT 8 - Commented out
	/*
	// First flipped card
	var cardOne = cards[0];

	// Add cardOne to cardsInPlay array
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

	// Second flipped card
	cardTwo = cards[2];

	// Add cardTwo to cardsInPlay array
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);
	*/

    // Display card that was flipped over
    console.log("User flipped " + cards[cardId]);

    // Add flipped card to cardsInPlay array
    cardsInPlay.push(cards[cardId]);

	// Check if 2 cards have been played
	if (cardsInPlay.length === 2) {
		checkForMatch();
		/* UNIT 8 - Moved to checkForMatch function in UNIT 9
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.")
		}
		*/
	}
}

// Simulate user flipping a card
flipCard(0);  // Flip first card in card array
flipCard(2);  // Flip third card in card array
