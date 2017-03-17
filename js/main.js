// Global Variables

/* UNIT 7 - Define each card as separate global variables
 * console.log("Up and running!");

 * var cardOne = "queen";
 * var cardTwo = "queen";
 * var cardThree = "king";
 * var cardFour = "king";

 * // Display values of any two cards to console
 * console.log("User flipped " + cardOne);
 * console.log("User flipped " + cardThree);
 */

/*
 * UNIT 8 - Define array for cards
 * var cards = ["queen", "queen", "king", "king"];
 */

// UNIT 10 - Use object for cards (Remember to use commas after each array element!)
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

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

	/* UNIT 8 - Commented out
	 *
	 * // First flipped card
	 * var cardOne = cards[0];

	 * // Add cardOne to cardsInPlay array
	 * cardsInPlay.push(cardOne);
	 * console.log("User flipped " + cardOne);

	 * // Second flipped card
	 * cardTwo = cards[2];

	 * // Add cardTwo to cardsInPlay array
	 * cardsInPlay.push(cardTwo);
	 * console.log("User flipped " + cardTwo);
	 */

    // Display card that was flipped over
    // -- UNIT 10:  Added access of object properties
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    // Add flipped card to cardsInPlay array
    cardsInPlay.push(cards[cardId].rank);

	// Check if 2 cards have been played
	if (cardsInPlay.length === 2) {
		// Check if 2 cards match
		checkForMatch();
		/* UNIT 8 - Moved to checkForMatch function in UNIT 9
		 * if (cardsInPlay[0] === cardsInPlay[1]) {
		 * 	alert("You found a match!");
		 * } else {
		 *	alert("Sorry, try again.")
		 * }
		 */
	}
}

// Simulate user flipping a card
flipCard(0);  // Flip first card in card array
flipCard(2);  // Flip third card in card array
