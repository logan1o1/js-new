let randomNum = parseInt(((Math.random()) * 10)+ 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validate(guess);
    })
}


function validate(guess) {
    if (isNaN(guess)) {
        alert('plz enter a valid no.');
    }else if (guess < 1) {
        alert('plz enter a no. from 1-100');
    }else if (guess > 100) {
        alert('plz enter a no. from 1-100');
    }else{
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over! The Random no. was: ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You have Won !`);
    }else if(guess < randomNum){
        displayMessage(`The number is wayy too low nigga`);
    }else if(guess > randomNum){
        displayMessage(`The number is wayy too high nigga`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<button id='newGame'>New Game</button>`;
    startOver.appendChild(p)
    playGame =false;
    startGame()
}

function startGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function (event) {
        randomNum = parseInt(((Math.random()) * 10)+ 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame= true;
    })
}