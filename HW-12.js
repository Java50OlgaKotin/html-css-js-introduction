function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    if(str[0] == "-")
    {
        for(let i = 1; i < str.length; i++) {
            let strNum = getCode(str[i], base);
            if(getCode(str[1], base) == -1){
                return NaN;
                break;
            }
            if(strNum != -1){
                res = res * base + strNum;
                }else{
                    break;}
    }   
        return res*(-1);
    } 
    else {
        for(let i = 0; i < str.length; i++){
            let strNum = getCode(str[i], base);
            if(getCode(str[0], base) == -1){
                return NaN;
                break;
            }
            if(strNum != -1){
                res = res * base + strNum;
                }else{
                    break;}
        }
        return res;
    }
}
function getCode(symbol, base) {
    base = base || 10;
    symbol = symbol.toLowerCase();
    if(base <= 10){
        if(symbol <= 9){
            const res = +symbol;
            return res;
        }else {
            return -1;
        }
    }

    if(base > 10){
        const codeA = 'a'.charCodeAt();
        let symbolCode = symbol.charCodeAt();
        if(symbolCode >= 48 && symbolCode <= 57){
            const res = +symbol;
            return res;
        }
        if(symbolCode >= 97 && symbolCode < (codeA + base - 10)){
            const res = symbol.charCodeAt() - codeA + 10;
            return res;
        }else{
            return -1;
        }
    }
}

let str1 = "-f123.m";
let num = parseInt(str1, 16);
let myNum = myParseInt(str1, 16);
console.log("Input: " + str1);
console.log("Output. ParseInt: " + num);
console.log("Output. MyParseInt: " + myNum);
console.log("*****************************");


/////***************/////

function myToString(number, base) {
    let resInt = '';
    let resFr = '';
    let minus = '';
    if(number < 0){
        minus = '-';}
    base = base || 10;
    number = Math.abs(number);
    let frNumber = number.toString().split(".")[1];
    let intNumber = Math.trunc(number);

    do {
        const digit = intNumber % base;
        const symbol = getSymbol(digit);
        resInt = symbol + resInt;
        intNumber = Math.trunc(intNumber / base);

    }while(intNumber);

    if(frNumber >= 0){
    do {
        const digit = frNumber % base;
        const symbol = getSymbol(digit);
        resFr = symbol + resFr;
        frNumber = Math.trunc(frNumber / base);

    }while(frNumber);
    return minus + resInt + "." + resFr;
    }
    else return minus + resInt;
}
function getSymbol(digit) {
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
let num100 = 1.1;
let str = num100.toString(16);
let myStr = myToString(num100);
console.log("Input: " + num100);
console.log("Output. String: " + str);
console.log("Output. MyString: " + myStr);