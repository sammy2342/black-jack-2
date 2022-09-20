/*----- constants -----*/ 
const arrNum = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K']
const arrSymbol = ['h', 's', 'c', 'd']



/*----- app's state (variables) -----*/ 
let deckOfCards = []
let winner 
let valueOfUniqueCards
let newDeck = []
let lastElementInArray



/*----- cached element references -----*/ 
hitBtnEl = document.getElementById('hit')

standBtnEl = document.getElementById('stand')

dealerScoreMessageEl = document.getElementById('dealer-score')

playerScoreMessageEl = document.getElementById('player-score')

dealerTotalScoreMessageEl = document.getElementById('dealer-total-score')

resetBtnEl = document.getElementById('reset')




/*----- event listeners -----*/ 

hitBtnEl.addEventListener('click', randomizeDeck)





/*----- functions -----*/

// this function is to make the deck of 52 cards 
// First thing we loop through every symbol 
// and then inside of the first loop we loop another for every symbol we loop through the numbers
// and then we put it inside an object with value and symbol 
// and then we set deck of card to empty array and we push it inside of it
function init() {
    makeDeck()
    // console.log(deckOfCards)
    randomizeDeck()
}

function makeDeck() {
    for(let i = 0; i < arrSymbol.length; i++) {
        for(let j = 0; j < arrNum.length; j++) {
            let cardValue = {value: arrNum[j], symbol: arrSymbol[i]}
            deckOfCards.push(cardValue)
            // Not sure if the if statement works
            if(arrNum[j] === 'K' && arrNum[j] === 'Q' && arrNum[j] === 'J') {
                valueOfUniqueCards = 10
            }
            if(arrNum[j] === 'A') {
                valueOfUniqueCards = 11
            }
        }
    }
}

function randomizeDeck() {
    // first thing we are getting a random index 
    // then we store that random index in removecard 
    // then we remove that index from deck of cards and we add it to the new deck
    let randomCard = Math.floor(Math.random() * deckOfCards.length)
    let removeCard = deckOfCards.splice(randomCard, 1)
    if(newDeck.length < 52) {
        newDeck.push(removeCard)
    } else {
        return 
    }
    
    returnLastElementInArray()
    renderCardOnPage()
    // console.log(newDeck)
    // console.log(deckOfCards)
}

// we want to add this information in a class so it displays on the page 
function returnLastElementInArray() {
    lastElementInArray = newDeck.pop()
    return console.log(`card ${lastElementInArray[0].symbol}${lastElementInArray[0].value} xlarge`)
}


function renderCardOnPage() {
    //first thing we wanna create a div 
    // and then we want to give it a class name of returnLastElementInArray whic is (card cardnumber xlarge)
    let createDiv = document.createElement('div') 
    // console.log(createDiv)
    let addDiv = document.querySelector('.card-container').appendChild(createDiv)
    addDiv.classList.add('card', `${lastElementInArray[0].symbol}${lastElementInArray[0].value}`, 'xlarge')
}






init()

