let firstCard=getRandomCard()
let secondCard=getRandomCard()

let cards=[firstCard, secondCard]
let sum= firstCard + secondCard 
let hasBlackJack= false
let isAlive= true
let message=""
let messageEl = document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#card-el")
function renderGame(){ 
cardsEl.textContent="The cards are: "
for(i=0;i<cards.length;i++){
    cardsEl.textContent += cards[i]  + " "    
    }
sumEl.textContent="Sum: " + sum      
if(sum <= 21){
        message="Do you want to draw a new card?"
        }
        else if(sum === 21){
            message="Wohoo! You've got BlackJack! "
            hasBlackJack= true
            }
        else {
            message="You're out of the game! "
            isAlive= false
        } 
messageEl.textContent=message
}
function startGame(){
    renderGame()
}
let card=5
function newCard(){  
sum += card
cards.push(card)
console.log(cards)
renderGame()   
}
