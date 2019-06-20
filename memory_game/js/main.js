console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkforMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

function flipCard(cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkforMatch();
};
flipCard (0);
flipCard (2);

