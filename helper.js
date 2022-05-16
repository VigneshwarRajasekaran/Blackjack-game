
let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")


function getRandomCard() {
    let num=Math.floor( Math.random()*13 ) + 1 
    if(num>10){
        return 10
    }
    else if(num==1){
        return 11
    }
    else{
        return num
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[]
    cards[0]=firstCard
    cards[1]=secondCard
    sum=firstCard + secondCard
    isAlive=true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        isAlive = false
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

let startBtn=document.getElementById(start-btn)
function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    if(isAlive){
    renderGame()
    }
    
    
   
}
