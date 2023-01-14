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
const questionsWords = [["A person skilled in an applied art", "craftsman"], 
["A picture made using paint", "painting"], 
["Tv or radio transmission", "broadcast"], 
["What is the name of science for promotion of the goods", "marketing"], 
["A study about interactions among organisms and environvent", "ecology"], 
["Knowledge and skill that is gained through time spent doing a job or activity", "experience"], 
["A change of biological populations over successive generations", "evolution"], 
["What wood are matches made from", "aspen"], 
["A Greek who have burned down the Temple of Artemis of Ephesus", "herostratus"], 
["Hard surface, ground under the water of a reservoir", "bottom"], 
["Last month of winter", "february"], 
["Plot of land used for growing fruit trees", "garden"], 
["African wild horse, characterized by a characteristic striped color of the skin", "zebra"]];

let currentIndex = 0;
let word;

// functions
function startGame() {
    
    letterInputElement.readOnly = false;
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
function processLetter() {
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
    letterInputElement.readOnly = true;
    checkWord();
}
function checkWord() {
    wordInputElement.readOnly = false;
    wordInputElement.style.backgroundColor = "lightblue";
    if(wordInputElement.value === word) {
        resultMessage.style.color = "blue";
        
        arrayWord.forEach(function(letter, index){
            lettersDivs[index].innerHTML = letter;
            lettersDivs[index].style.color = "white";
        })

        resultMessage.innerHTML = "Congratulations! You have won the game! :)"; 
        finishGame()   
    }   
    if(wordInputElement.value !=0 && wordInputElement.value != word) {
        resultMessage.style.color = "red";
        resultMessage.innerHTML = "Sorry, it's a wrong word :(";
        finishGame()
    }  
}
function finishGame() {
    wordInputElement.readOnly = true;
    wordInputElement.style.backgroundColor = "white";
    wordInputElement.value = '';
    if(currentIndex === (questionsWords.length - 1)) {
        currentIndex = 0;
    } else {    
        currentIndex++;
    }
    playAgain.style.display = "block";
}

//actions
startGame();