/*let str = "123m";
let num = parseInt(str) + 10;
let str1 = "123";
let numInt = parseInt(str1);
let numFloat = parseFloat(str1);*/

function myParseInt(str, base) {
base = base || 10;
let res = 0;
for(let i = 0; i < str.length; i++){
    res = res * base + getCode(str[i]);

}
return res;
}

function getCode(symbol){
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
let str1 = "123a";
let num = parseInt(str1, 36);
let myNum = myParseInt(str1, 36);


/////////////////////

let number = 255;
let str = "" + number;
str = number.toString(36);

function myToString(number, base){
    let res = "";
    base = base || 10;
    number = Math.trunc(Math.abs(number));
    do {
        const digit = number % base;
        const symbol = getSymbol(digit, base);
        res = symbol + res;
        number = Math.trunc(number / base);

    }while(number);
    return res;
}

function getSymbol(digit, base){
    const codeA = 'a'.charCodeAt();
    let symbol;
    if(digit < 10) {
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;
}

let num100 = 990500;
let str100 = num100.toString();
let myStr100 = myToString(num100);
str100 = num100.toString(36);
myStr100 = myToString(num100, 36);
num100 = 123.45;
str100 = num100.toString(16);
myStr100 = myToString(num100,16);
