//consts
const cardList = document.querySelector('.deck');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const i = document.getElementsByTagName('i');
const restart = document.getElementById('restart');
const timer = document.getElementById('timer');
const stars = document.getElementById('stars');
const boxCounter = document.getElementById('moves');


//values 

let moves = 0;
let minutes = 0;
let seconds = 0;
let totalTime = 0;
//let stars = 3;
let startTime = true;



//card List
let cardArray = [
	'fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o',
	'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt',
	'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf',
	'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb',
]

// Shuffle function 
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Create Cards
function createCards(){
	let cardsShuffleArray = shuffle(cardArray);

	cardList.innerHTML = "";
	for(let x = 0; x < cardsShuffleArray.length; x++){
	    const newCard = document.createElement('li');
		const newIcon = document.createElement('i');
		newCard.cover = cardsShuffleArray[x];
		newCard.classList.add('card');
		newIcon.classList.add('fa', cardsShuffleArray[x]);
		const newCardList = document.querySelector('.deck');
		newCardList.appendChild(newCard);
		newCard.appendChild(newIcon);
	}
}

//I stuck here
const cards = document.querySelector

function selectCard(){
	console.log('test');
	cards.classList.add('open', 'show');
};

cards.addEventListener('click', selectCard);

//end of stuck

//Main function
function game(){
	createCards();
	
}
game();
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
