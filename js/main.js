/*----- constants -----*/ 
const arrNum = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K']
const arrSymbol = ['h', 's', 'c', 'd']



/*----- app's state (variables) -----*/ 
let deckOfCards, newDeck, playerHand, dealerHand



/*----- cached element references -----*/ 
hitBtnEl = document.getElementById('hit')

standBtnEl = document.getElementById('stand')

dealerScoreMessageEl = document.getElementById('dealer-score')

playerScoreMessageEl = document.getElementById('player-score')

dealerTotalScoreMessageEl = document.getElementById('dealer-total-score')

resetBtnEl = document.getElementById('reset')

displayWinnerEl = document.querySelector('.display-winner')

const cardEl = document.querySelector('.card')

const playerEl = document.querySelector('main')

const dealerEl = document.querySelector('.main2')

removeBackCardEl = document.getElementById('flip-card')

/*----- event listeners -----*/ 

hitBtnEl.addEventListener('click', playerHitBtn)

standBtnEl.addEventListener('click', playerStand)

resetBtnEl.addEventListener('click', resetBtn)



/*----- functions -----*/

// Intilize deck ***********************************************************************************
function makeDeck() {
    for(let i = 0; i < arrSymbol.length; i++) {
        for(let j = 0; j < arrNum.length; j++) {
            cardValue = {value: arrNum[j], symbol: arrSymbol[i]}
            deckOfCards.push(cardValue)
            // Not sure if the if statement works
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
// changed dealer hand to 1
function dealCards() {
    for(let i = 0; i < 2; i++) {
        playerHand.push(newDeck.pop())
    }
    for(let i = 0; i < 1; i++) {
        dealerHand.push(newDeck.pop())
    }
    console.log(dealerHand)
}

// render *******************************************************************************

function render() {
    renderPlayerHand()
    renderDealerHand()
    displayPlayerScore()
    displayDealerHand()
    // addDealerCardtoPage()
}

function renderPlayerHand() {
    // first im going to loop through the player hand 
    // forEach card in th player hand create a div and give it the proper classes 
    // after creating the div append them to the dom 
    document.getElementById('players-card').innerHTML = ''
    playerHand.forEach(card => {
        // console.log(card)
        let newPlayerHandDiv = document.createElement('div')
        newPlayerHandDiv.classList.add(`card`,`${card.symbol}${card.value}`,'xlarge')
        document.getElementById('players-card').appendChild(newPlayerHandDiv)
    })
}

function renderDealerHand() {
    document.getElementById('dealers-card').innerHTML = ''
    dealerHand.forEach(card => {
        // console.log(card)
        let newDealerHandDiv = document.createElement('div')
        newDealerHandDiv.classList.add(`card`,`${card.symbol}${card.value}`,'xlarge')
        document.getElementById('dealers-card').appendChild(newDealerHandDiv)
    })
}

function playerHitBtn() {
    let playerSumOfCards = calculatePlayerScore()
    if(playerSumOfCards < 21) {
    let newCard = newDeck.pop()
    playerHand.push(newCard)
    displayPlayerScore()
    checkWinner()
    render()
    }
}

function calculatePlayerScore() {
    let playerScore = 0
    for(let i = 0; i < playerHand.length; i++) {
        if(playerHand[i].value === 'Q' || playerHand[i].value === 'J' || playerHand[i].value === 'K') {
            playerScore += 10
        }else if(playerHand[i].value === 'A' && playerScore < 11) {
            playerScore += 11
        } else if(playerHand[i].value === 'A' && playerScore >= 11) {
            playerScore += 1
        } else {
            playerScore += parseInt(playerHand[i].value)
        }
        // console.log(playerScore)
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
        }else if(dealerHand[i].value === 'A' && dealerScore < 11) {
            dealerHand[i].value = '11'
        } else if(dealerHand[i].value === 'A' && dealerScore > 11) {
            dealerHand[i].value = '1'
        }
        dealerScore += parseInt(dealerHand[i].value)
        // console.log(dealerScore)
    }
    return dealerScore
}

function displayDealerHand() {
    let renderDealerScre = calculateDealerScore()
    dealerScoreMessageEl.innerHTML = renderDealerScre
} 

// invoke when player clicks on stand
function addDealerCardtoPage() {
    let sumOfDealerScore = calculateDealerScore()
    while(sumOfDealerScore < 17) {
        let newDealerCard = newDeck.pop()
        dealerHand.push(newDealerCard)
        // console.log(dealerHand)
        sumOfDealerScore = calculateDealerScore()
        // console.log(sumOfDealerScore)
    }
    render()
    
}


function checkWinner() {
    let checkPlayerSum = calculatePlayerScore()
    let checkDealerSum = calculateDealerScore()
    // console.log(checkPlayerSum)
    // console.log(checkDealerSum)
    if(checkPlayerSum > 21) {
        displayWinnerEl.innerHTML = 'You went Bust'
    } else if(checkPlayerSum === 21) {
        displayWinnerEl.innerHTML = 'Black Jack'
    }
}


function checkWinnerStand() {
    let checkPlayerSum = calculatePlayerScore()
    let checkDealerSum = calculateDealerScore()
    console.log(checkDealerSum)
    console.log(checkPlayerSum)
    if(checkPlayerSum > checkDealerSum && checkPlayerSum <= 21) {
        displayWinnerEl.innerHTML = 'You Won'
    } else if(checkDealerSum > checkPlayerSum && checkDealerSum <= 21) {
        displayWinnerEl.innerHTML = 'You Lost'
    } else if(checkDealerSum === checkPlayerSum && checkDealerSum <= 21) {
        displayWinnerEl.innerHTML = 'You tied'
    } else if(checkDealerSum > 21) {
        displayWinnerEl.innerHTML = 'Dealer went bust'
    }
}

// use this function to check if a player hand is 21

function playerStand() { 
    addDealerCardtoPage()
    checkWinnerStand()
    removeBackCardEl.remove()
}


function init() {
    deckOfCards = []
    playerHand = []
    dealerHand = []
    newDeck = []
    console.log(dealerHand)
    makeDeck()
    randomizeDeck()
    dealCards()
    checkWinner()
    calculatePlayerScore()
    calculateDealerScore()
    render()
}
init()


function resetBtn() {
    init()
}