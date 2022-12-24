function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    if(str[0] == "-")
    {
        for(let i = 1; i < str.length; i++) {
            let strNum = getCode(str[i], base);
            if(getCode(str[1]) == -1){
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
            if(getCode(str[0]) == -1){
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

    if(base > 10 && base <= 36){
        const codeA = 'a'.charCodeAt();
        const res = symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10;
        return res;
    }
}

let str1 = "-123a.8";
let num = parseInt(str1, 16);
let myNum = myParseInt(str1, 16);
console.log(myNum);

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

    do {
        const digit = frNumber % base;
        const symbol = getSymbol(digit);
        resFr = symbol + resFr;
        frNumber = Math.trunc(frNumber / base);

    }while(frNumber);

    return minus + resInt + "." + resFr;
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
let num100 = -990.5708;
let str = num100.toString();
let myStr = myToString(num100);
