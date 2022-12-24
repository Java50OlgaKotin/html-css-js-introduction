
let number = -762903.45;

///// task 1 /////

let res1 = getDigitsSum(number);
console.log("Task 1. Sum of digits = " + res1);

function getDigitsSum(number)
{
    if (number < 0)
        number = -number;

        // number = Math.trunc(Math.abs(number));

    number = Math.trunc(number);

    let sum = 0;
    let rem = 0;
    do{
        rem = number % 10;
        sum = sum + rem;
        number = number / 10;
        number = Math.trunc(number);
    } while(number != 0);              //while(number);

    return sum;
}

///// task 2 /////

let res2 = eval('9000/((10+20)**2)');
console.log("Task 2. Result of expression: " + res2);

/*
function commputeExpression(expressionStr){
    let res
    try{
    res = eval(expressionStr);
    } catch(e) {
        res = NaN;
    }
    return res;
}
console.log(...)
*/

///// task 3 /////

let ananas = "A" + ("ab" / 2) + "AS";
let res3 = ananas.toLocaleLowerCase();
console.log("Task 3. " + res3);

///// task 4 /////

let res5 = digitsCount(number);
function digitsCount(number)
{
    number = Math.trunc(number);
    let dCount = 0;
    while(number != 0)
        {
            number = number / 10;
            number = Math.trunc(number);
            dCount++;
        }

return (dCount - 1);
}

let res6 = multiplier(res5);
function multiplier(dCount)
{
    let mult = 1;
    while(dCount > 0)
        {
            mult = mult*10;
            dCount--;
        }
return mult;
}

let res4 = reverseNumber(number);
console.log("Task 4. Reverse number: " + res4);

function reverseNumber(number)
{
    number = Math.trunc(number);
    let newNum = 0;
    let rem = 0;
    let mult = res6;
    
do
    {
        rem = (number % 10) * mult;
        mult = mult / 10;
        newNum = newNum + rem;
        number = number / 10;
        number = Math.trunc(number);
    }while(number != 0 && mult > 0);

return newNum;
}

