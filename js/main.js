/*
 *  Ron Larson
 *  WDI Fundamentals - Boston (Liberty Mutual)
 *  3/19/17
 */
 
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

/* UNIT 11 - Remove cardId function parameter to no longer hard-code the
 *            index number of the card that should be flipped.
 *
 * var flipCard = function (cardId) {
 */

 var flipCard = function() {

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

    // UNIT 11 - Get and store data-id attribute of the card that was just clicked
	//         - Use 'this' keyword to access the card that was just clicked
	var cardId = this.getAttribute('data-id'); 

    // Display card that was flipped over
    // -- UNIT 10:  Added access of object properties
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    // Add flipped card to cardsInPlay array
    cardsInPlay.push(cards[cardId].rank);

    // UNIT 11 - Display image for the face of clicked card in place of the back of the card
	//         - Use 'this' keyword to access the card that was just clicked
	this.setAttribute('src', cards[cardId].cardImage);    

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

// UNIT 11 - Create game board
var createBoard = function() {
	// Add each card to the game board
	for (var i = 0; i < cards.length; i++) {
		// Create new img card element
		var cardElement = document.createElement('img');
		// Add a src attribute to the cardElement pointing to card's back image
		cardElement.setAttribute('src', 'images/back.png');
		// Set cardElement's new data-id attribute to index of current element (i)
		cardElement.setAttribute('data-id', i);
		// Add flipCard Event Listener upon user click to cardElement
		cardElement.addEventListener('click', flipCard);
		// Append current cardElement to game board (game-board element ID)
		document.getElementById('game-board').appendChild(cardElement);
	}
}

/* UNIT 10 - Make calls to flip card
 * // Simulate user flipping a card
 * flipCard(0);  // Flip first card in card array
 * flipCard(2);  // Flip third card in card array
 */

// UNIT 11 - Create game board by calling gameBoard function
createBoard(); 
