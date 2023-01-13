// references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const lettersRemainedElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
let initialLettersNumber = 0;
let remaindLettersNumber;
let lettersDivs;

// global variables
const questionsWords = [["q1", "table"], ["q2", "ffssd"]];
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
    remaindLettersNumber = Math.trunc(arrayWord.length - (30*arrayWord.length/100))
    lettersRemainedElement.innerHTML = `You can enter ${remaindLettersNumber} letters`;

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
    wordInputElement.style.backgroundColor = "lightblue";
    if(wordInputElement.value === word) {
        resultMessage.style.color = "blue";
        resultMessage.innerHTML = "Congratulations! You have won the game! :)";    
        playAgain.style.display = "block";    
    }   
    if(wordInputElement.value !=0 && wordInputElement.value != word) {
        resultMessage.style.color = "red";
        resultMessage.innerHTML = "Sorry, it's a wrong word :(";
        playAgain.style.display = "block";
    }

}
function processLetter() {
    wordInputElement.readOnly = false;   
    const trialLetter = letterInputElement.value;   
    for(let i=0; i < arrayWord.length; i++) {
        if(arrayWord[i] === trialLetter) {
            lettersDivs[i].innerHTML = trialLetter;
            lettersDivs[i].style.color = "white";
        }
    }
    remaindLettersNumber--;
    lettersRemainedElement.innerHTML = `You can enter ${remaindLettersNumber} letters`;
    if(remaindLettersNumber === 0){
        lettersRemainedElement.innerHTML = `No attempts left. You have to try to guess the word.`;
        letterInputElement.readOnly = true;
        checkWord();
    }
    letterInputElement.value ='';
}          
function takeChance() {
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
    checkWord();
}
function finishGame() {

}

//actions
startGame();