/*
 * Create a list that holds all of your cards
 */
const cardsIcons = ['fa fa-laptop', 'fa fa-laptop','fa fa-money','fa fa-money','fa fa-shopping-basket',
 'fa fa-shopping-basket','fa fa-truck','fa fa-truck','fa fa-amazon','fa fa-amazon','fa fa-tree','fa fa-tree',
 'fa fa-building', 'fa fa-building','fa fa-television','fa fa-television']
 

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

const cardLayout = document.querySelector('.deck');

let i = 0;

while (i < cardsIcons.length) {
  const cardBlock = document.createElement('div');
  cardBlock.classList.add('card');
  cardBlock,innerHTML = '<i class="<${icons[i]"></i>'
  cardLayout.appendChild(cardBlock);
  i++;
}


// Shuffle function from http://stackoverflow.com/a/2450976
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
