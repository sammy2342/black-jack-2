/*----- constants -----*/ 
const arrNum = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K']
const arrSymbol = ['h', 's', 'c', 'd']



/*----- app's state (variables) -----*/ 
let deckOfCards = []
let newDeck = []
let playerHand = []
let dealerHand = []



/*----- cached element references -----*/ 
hitBtnEl = document.getElementById('hit')

standBtnEl = document.getElementById('stand')

dealerScoreMessageEl = document.getElementById('dealer-score')

playerScoreMessageEl = document.getElementById('player-score')

dealerTotalScoreMessageEl = document.getElementById('dealer-total-score')

resetBtnEl = document.getElementById('reset')




/*----- event listeners -----*/ 

hitBtnEl.addEventListener('click', playerHitBtn)

standBtnEl.addEventListener('click', playerStand)

resetBtnEl.addEventListener('click', resetBtn)



/*----- functions -----*/

// this function is to make the deck of 52 cards 
// First thing we loop through every symbol 
// and then inside of the first loop we loop another for every symbol we loop through the numbers
// and then we put it inside an object with value and symbol 
// and then we set deck of card to empty array and we push it inside of it
// function init() {
//     makeDeck()
//     // console.log(deckOfCards)
//     randomizeDeck()
//     dealerRandomDeckOfCards()
//     renderDealerCodeOnPage()
// }

// Intilize deck ***********************************************************************************
function makeDeck() {
    for(let i = 0; i < arrSymbol.length; i++) {
        for(let j = 0; j < arrNum.length; j++) {
            cardValue = {value: arrNum[j], symbol: arrSymbol[i]}
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
    while(deckOfCards.length){
        let randomCard = Math.floor(Math.random() * deckOfCards.length)
        let removeCard = deckOfCards.splice(randomCard, 1)
        newDeck.push(removeCard[0])
    }
}

// we want to add this information in a class so it displays on the page 
function dealCards() {
    for(let i = 0; i < 2; i++) {
        playerHand.push(newDeck.pop())
    }
    for(let i = 0; i < 2; i++) {
        dealerHand.push(newDeck.pop())
    }
}

// render *******************************************************************************

function render() {
    renderPlayerHand()
    renderDealerHand()
    calculatePlayerScore()
    displayPlayerScore()
}

function renderPlayerHand() {
    // first im going to loop through the player hand 
    // forEach card in th player hand create a div and give it the proper classes 
    // after creating the div append them to the dom 
    playerHand.forEach(card => {
        console.log(card)
        let newPlayerHandDiv = document.createElement('div')
        newPlayerHandDiv.classList.add(`card`,`${card.symbol}${card.value}`,'xlarge')
        document.querySelector('main').appendChild(newPlayerHandDiv)
    })
}

function renderDealerHand() {
    dealerHand.forEach(card => {
        console.log(card)
        let newDealerHandDiv = document.createElement('div')
        newDealerHandDiv.classList.add(`card`,`${card.symbol}${card.value}`,'xlarge')
        document.querySelector('.main2').appendChild(newDealerHandDiv)
    })
}

function playerHitBtn() {
    let newCard = newDeck.pop()
    playerHand.push(newCard)
    let newPlayerCardDiv = document.createElement('div')
    newPlayerCardDiv.classList.add(`card`, `${newCard.symbol}${newCard.value}`, `xlarge`)
    document.querySelector('main').appendChild(newPlayerCardDiv)
    displayPlayerScore()
}

function calculatePlayerScore() {
    let playerScore = 0
    for(let i = 0; i < playerHand.length; i++) {
        if(playerHand[i].value === 'Q' || playerHand[i].value === 'J' || playerHand[i].value === 'K') {
            playerHand[i].value = '10'
        }else if(playerHand[i].value === 'A') {
            playerHand[i].value = '11'
        }
        playerScore += parseInt(playerHand[i].value)
        console.log(playerScore)
    }
    return playerScore
}

function displayPlayerScore() {
    let renderPlayerScore = calculatePlayerScore()
    playerScoreMessageEl.innerHTML = renderPlayerScore
}


function calculateDealerScore() {
    let dealerScore = 0
    for(let i = 0; i < dealerHand.length; i++) {
        if(dealerHand[i].value === 'Q' || dealerHand[i].value === 'J' || dealerHand[i].value === 'K') {
            dealerHand[i].value = '10'
        }else if(dealerHand[i].value === 'A') {
            dealerHand[i].value = '11'
        }
        dealerScore += parseInt(dealerHand[i].value)
        console.log(dealerScore)
    }
    return dealerScore
}

// function renderDealerHand() {
//     let renderDealerScre = calculateDealerScore()
//     dealerScoreMessageEl.innerHTML = renderDealerScre
// } 


function valueOfCards() {
    // console.log(lastElementInArray, 'is this working')
    valueOfTheCard = lastElementInArray[0].value
    if(valueOfTheCard === 'J' || valueOfTheCard === 'Q' || valueOfTheCard === 'K') {
        valueOfTheCard = 10
        valueOfTheCard = parseInt(valueOfTheCard)
    } 
    if(valueOfTheCard === 'A') {
        valueOfTheCard = 11 
        checkAce()
    }
    currentValue = parseInt(valueOfTheCard)
    // console.log(currentValue)
    
    return currentValue
    // console.log(currentValue)
}


let playerSum = 0
function addScoreForPlayer() {
    let valueOfPlayerCard = valueOfCards()
    playerSum = playerSum + valueOfPlayerCard
    return playerSum
    // checkAce()
}

// function displayPlayerScore() {
//     let sumOfPlayerScore = addScoreForPlayer()
//     playerScoreMessageEl.innerHTML = sumOfPlayerScore
//     // playerStand()
//     if(sumOfPlayerScore > 21){
//         alert('you went bust')
//     } else if(sumOfPlayerScore === 21) {
//         alert('You won')
//     }
// }

// still have to figure this out 
function checkAce() {
    // valueOfCards()
    // addScoreForPlayer()

    // console.log(playerSum)
    // console.log(currentValue)
    // console.log(valueOfTheCard)
    if(valueOfTheCard === 11 && playerSum <= 10) {
        valueOfTheCard = 11
    } else if(valueOfTheCard === 11 && playerSum >= 11) {
        valueOfTheCard = 1
    }
}

function playerStand() { 
    if(playerSum > dealerSum) {
        alert('you won')
    } else if(playerSum === dealerSum) {
        alert('Tied')
    } else if(dealerSum > playerSum) {
        alert('you Lost')
    }
}


// Dealer ***********************************************************************************

function dealerLastCardInArray() {
    // console.log(dealerDeckOfCards)
    dealerLastCardInArrayyy = dealerDeckOfCards.pop()
    // console.log(`card ${dealerLastCardInArrayyy[0].symbol}${dealerLastCardInArrayyy[0].value} xlarge`)
    // console.log(dealerLastCardInArrayyy)
    renderDealerCodeOnPage()

}

function dealerRandomDeckOfCards() {
    let dealerCard = Math.floor(Math.random() * deckOfCards.length)
    let removeDealerCard = deckOfCards.splice(dealerCard, 1)
    dealerDeckOfCards.push(removeDealerCard)
    // console.log(dealerDeckOfCards)
    // dealerLastCardInArray()
}



function renderDealerCodeOnPage() {
    dealerRandomDeckOfCards()
    createDealerDiv = document.createElement('div') 
    addDealerDiv = document.querySelector('.main2').appendChild(createDealerDiv)
    addDealerDiv.classList.add(`card`, `${dealerLastCardInArrayyy[0].symbol}${dealerLastCardInArrayyy[0].value}`, `xlarge`)
    // console.log(`card ${dealerLastCardInArrayyy[0].symbol}${dealerLastCardInArrayyy[0].value} xlarge`)
    // console.log(addDealerDiv)
    dealerScore()
}

function test() {
    while(dealerSum < 17) {
        renderDealerCodeOnPage()
    }
}


function dealerCardValue() {
    valueOfDealerCard = dealerLastCardInArrayyy[0].value
    // console.log(isNaN(valueOfDealerCard))
    if(isNaN(valueOfDealerCard)) { 
        if(valueOfDealerCard === 'A') {
            return 11
        } else {
            return 10
        }
        
    }
    return parseInt(valueOfDealerCard) 
}

dealerSum = 0
function addScoreForDealer() { 
    // dealerScore()
    newValueOfDealerCard = dealerCardValue()
    dealerSum += parseInt(newValueOfDealerCard)
    console.log(newValueOfDealerCard)
    return dealerSum
}

function dealerScore() { 
    addScoreForDealer()
    dealerScoreMessageEl.innerHTML = dealerSum
    // checkWinner()
}

function checkWinner() { 
    if(dealerSum > playerSum) {
        alert('you lost dealer won')
    } else if(playerSum === dealerSum) {
        alert('tie')
    } else if(playerSum > dealerSum) {
        alert('you won ;;')
    }
}

function resetBtn() {
}

function init() {
    makeDeck()
    randomizeDeck()
    dealCards()
    render()
}
init()


