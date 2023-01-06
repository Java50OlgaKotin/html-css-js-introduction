/*const ar = [];
const ar1 = [1,2,3,4];
ar.push(ar1);
ar.push(34,'abc');
ar.push(...ar1);

function getRandomNumber(min, max) {
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min + 1));
}
for(let i = 0; i < 10; i++) {
console.log(getRandomNumber(0, 2));
}

function getRandomMatrix(rows, columns, min, max) {
    const matrix = [];
    for(let i = 0; i < rows; i++) {
        matrix.push([]);
        for(let j = 0; j < columns; j++) {
            matrix[i].push(getRandomNumber(min, max));
        }
    }

    return matrix;
}

const matrix = getRandomMatrix(3, 4, 0, 9);
for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < )
}


const ar10 = [1,2,3,4,5];
const srt = ar10.join('_');


<ul class="list_class"><li class="item_class"><div class="white/black"></div> **** </li></ul>
function getHtmlUl(array)

return htmlString;

const strClass = getRandomNumber(0, 1) === 0 ? `white` : `black`;
const str1 = "hello world";
const str2 = 'hello' + 'world';
const str3 = `Class = "${strClass}"`;

function matrixTransp(matrix) {   
}*/


//const array = [10, 20, 30, -10, 11, 100];
//array.splice(2, 2);
//const index = array.indexOf(30);
//array.splice(index, 1);
//const res = array.splice(index, 1);
//array.splice(index) - removing all number from 30
//insert:
//array.splice(index, 0, -10, -20);
//replase:
//array.splice(index, 2, 20);
//const ar1 = [40, 200];
//array.splice(index, 1, ...ar1);

/*const numbersPerPage = 2; 
const page = 2;
const firstIndex = (page - 1)*numbersPerPage;
const pageNumbers = array.slice(firstIndex, firstIndex + numbersPerPage);*/

/*const ar1 = array.map(multyply2);
function multyply2(number) {
    return number*2;
}

const ar2 = array.map(function(number, index){
    return (index + 1) + '. ' + number;
});

const ar3 = array.map(function(number) {
    return `<li>${number}</li>`;
});

const ulElement = `<ul>${ar3.join('')}</ul>`;*/

////////////// HW-14 Task 1 /////////////

let str1 = 'pappy';
let str2 = 'apple';
let ar1 = [];
ar1 = Array.from(str1);
let ar2 = [];
ar2 = Array.from(str2);
let res = [];

for(let i = 0; i < ar1.length; i++){
    for(let j = 0; j < ar2.length; j++){
        console.log(ar1[i]);
        console.log(ar2[j]);
        if(ar1[i] == ar2[j] && i == j) {
            res[i] = 'green';
            break;
        }
        if(ar1[i] == ar2[j] && i != j){
            res[i] = 'yellow';
        }
        console.log(res[i]);
    }
    
}
   
/*const res = ar2.map(function coloringString(ar1, index, ar2)


{   console.log(ar1[index]), 
    console.log(ar2[index]);

    return ar1[index] + ar2[index];
});*/

////////////// HW-14 Task 2 /////////////

/*const min = 5;
const max = 15;
const ar4 = array.filter(function(number) {
    return number >= min && number <= max;
});*/

const ar5 = array.filter(function(__, index) {
return index % 2 === 0;
});

/* function getNumbersWithDigitsAmount(digitsAmount, array) {
    returns array of 
}
getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000])
returns [100, -100]
*/