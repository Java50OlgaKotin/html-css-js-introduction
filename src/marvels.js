// references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const lettersRemainedElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
let initialLettersNumber;
let remaindLettersNumber;

// global variables
const questionsWords = [["q1", "a1"], ["q2", "a2"]];
let currentIndex = 0;

// functions
function startGame() {
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[currentIndex],[0];
    playAgain.style.display='none';
    resultMessage.innerHTML = '';
    wordElement.innerHTML = getWordDivs();
}
getWordDivs() {
    
}
function checkWord() {

}
function processLetter() {
    wordInputElement.readOnly = false;
}
function takeChance() {
    wordInputElement.readOnly = false;
}
function finishGame() {

}

//actions
startGame();