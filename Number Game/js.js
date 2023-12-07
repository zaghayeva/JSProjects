'use strict'
const checkBtn = document.querySelector(".btn-check")
const guessInput = document.querySelector(".guess-input")
const messageEL = document.querySelector(".message")
const scoreEl = document.querySelector('.score')
const background = document.querySelector('.background')
const reset = document.querySelector('#reset')
let secretNumber = Math.trunc(Math.random() * 20 + 1)
console.log(secretNumber);
let message = 'Start Guessing...'
let score = 20
let highScore = 0
checkBtn.addEventListener("click", () => {
    if (!guessInput.value) return messageEL.textContent = 'Please add number '
    const userGuess = Number(guessInput.value)
    if (userGuess !== secretNumber) {
        if (userGuess > secretNumber) messageEL.textContent = 'Too high'
        if (userGuess < secretNumber) messageEL.textContent = 'Too low'
        score = score - 1
        console.log(score);
        scoreEl.textContent = score
    }
    else {
        const guessbox = document.querySelector("#Guess")
        guessbox.textContent = secretNumber
        background.style.backgroundColor = "green"
        if (score  >  highScore) {
            highScore = score
            const span = document.querySelector('.highest-score')
            span.textContent = highScore
        }
    }
    reset.addEventListener("click", () => {
        background.style.backgroundColor = "black"
        const guessbox = document.querySelector("#Guess")
        guessbox.textContent = "?"
        scoreEl.textContent = "20"
        secretNumber = Math.trunc(Math.random() * 20 + 1)
        console.log(secretNumber);
    }
    )
})