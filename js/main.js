/*----- constants -----*/ 
const arrNum = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const arrSymbol = ['Hearts', 'Spades', 'Clubs', 'Diamonds']



/*----- app's state (variables) -----*/ 
let deckOfCards = []
let winner 
let valueOfUniqueCards



/*----- cached element references -----*/ 
hitBtnEl = document.getElementById('hit')

standBtnEl = document.getElementById('stand')

dealerScoreMessageEl = document.getElementById('dealer-score')

playerScoreMessageEl = document.getElementById('player-score')

dealerTotalScoreMessageEl = document.getElementById('dealer-total-score')

resetBtnEl = document.getElementById('reset')




/*----- event listeners -----*/ 





/*----- functions -----*/

// this function is to make the deck of 52 cards 
// First thing we loop through every symbol 
// and then inside of the first loop we loop another for every symbol we loop through the numbers
// and then we put it inside an object with value and symbol 
// and then we set deck of card to empty array and we push it inside of it
function init() {

}

function makeDeck() {
    for(let i = 0; i < arrSymbol.length; i++) {
        for(let j = 0; j < arrNum.length; j++) {
            let cardValue = {value: arrNum[j], symbol: arrSymbol[i]}
            deckOfCards.push(cardValue)
            if(arrNum[j] === 'K' && arrNum[j] === 'Q' && arrNum[j] === 'J') {
                valueOfUniqueCards = 10
            }
            if(arrNum[j] === 'A') {
                valueOfUniqueCards = 11
            }
        }
    }
}
// console.log(makeDeck())
// console.log(deckOfCards[10].value)







