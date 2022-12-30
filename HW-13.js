////////// Task 1 ////////// 
function getRandomNumber(min, max) {
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min + 1));
}

function getRandomArray(arLength, min, max) {
    const ar = [];
    for(let i = 0; i < arLength; i++) {
        ar[i] = getRandomNumber(min, max);
        }
        return ar;
    }  
const ar = getRandomArray(9, 0, 1);
let res1 = getHtmlUl(ar);
console.log(res1);
function getHtmlUl(array) {
    let htmlString = '<ul class="list_class"><li class="item_class">';
for(let i = 0; i < array.length; i++){
    const divClass = array[i] === 0 ? `white` : `black`;
    htmlString = htmlString + `<div class="${divClass}"></div>`;
}
    htmlString = htmlString + '</li></ul>';
    return htmlString;
}

////////// Task 2 //////////

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
let rows = 4;
let columns = 3;
const matrix = getRandomMatrix(rows, columns, 0, 9);

let res2 = matrixTransp(matrix);
function matrixTransp(matrix) {
    const matrixTransp = getNewMatrix(columns, rows);
    function getNewMatrix(newRows, newColumns) {
        const newMatrix = [];
        for(let i = 0; i < newRows; i++) {
            newMatrix.push([]);
            for(let j = 0; j < newColumns; j++) {
                newMatrix[i].push(0);
            }
        }
        return newMatrix;
    }
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            matrixTransp[j][i] = matrix[i][j];
            }
        }
    return matrixTransp;
}
