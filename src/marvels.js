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
let lettersDivs;

// global variables
const questionsWords = [["q1", "atryeue"], ["q2", "ffssd"]];
let currentIndex = 0;
let word;

// functions
function startGame() {
    word = questionsWords[currentIndex][1];
    const arrayWord = Array.from(word);
    getWordDivs();
    questionElement.innerHTML = questionsWords[currentIndex][0]; 
    playAgain.style.display = "none";
    resultMessage.innerHTML = '';
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    letterInputElement.value ='';
}
function getWordDivs() {
    arrayWord = Array.from(word);
    wordElement.innerHTML = arrayWord.reduce(function (res, cur) {
        res = res + '<div class="letter"></div>'
        return res;
    },'');
    lettersDivs = document.querySelectorAll(".letter");
}
function checkWord() {

}
function processLetter() {
    wordInputElement.readOnly = false;   
    const trialLetter = letterInputElement.value;   
    if(word.includes(trialLetter)) {
        
    }  
        }

function takeChance() {
    wordInputElement.readOnly = false;
}
function finishGame() {

}

//actions
startGame();