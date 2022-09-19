/*----- constants -----*/ 
const arrNum = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const arrSymbol = ['Hearts', 'Spades', 'Clubs', 'Diamonds']



/*----- app's state (variables) -----*/ 
let deckOfCards = []
let winner 
let valueOfCard



/*----- cached element references -----*/ 




/*----- event listeners -----*/ 





/*----- functions -----*/

// this function is to make the deck of 52 cards 
// First thing we loop through every symbol 
// and then inside of the first loop we loop another for every symbol we loop through the numbers
// and then we put it inside an object with value and symbol 
// and then we set deck of card to empty array and we push it inside of it
function makeDeck() {
    for(let i = 0; i < arrSymbol.length; i++) {
        for(let j = 0; j < arrNum.length; j++) {
            let cardValue = {value: arrNum[j], symbol: arrSymbol[i]}

            deckOfCards.push(cardValue)
            if(arrNum[i] === 'J' && arrNum[i] === 'Q' && arrNum[i] === 'K') {
                valueOfCard = value[10] 
                console.log(valueOfCard)
                
            }
        }
    }
}
console.log(makeDeck())
console.log(deckOfCards)





