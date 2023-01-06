function coloringString(str1, str2) {
const arStr2 = Array.from(str2);
const res = arStr2.map(function(symbol, index){
    let color;
    if(symbol === str1[index]){
        color = "green";
    } else {
        color = str1.includes(symbol) ? "yellow" : "red";
    }
    return color;
})
return res;
}
console.log(`coloringString("pappy", "apple") returns ${coloringString("pappy", "apple")}`);
console.log(`coloringString("pappy", "pappy") returns ${coloringString("pappy", "pappy")}`);

function getNumbersWithDigitsAmount(digitsAmount, array) {
    const res = array.filter(function(number) {
        const nDigits = getNumberDigits(number);
        return nDigits === digitsAmount;
    });
    return res;
}

function getNumberDigits(number) {
    number = Math.abs(Math.trunc(number));
    const res = number.toString().length;
    return res;
}
console.log(`getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]) returns ${getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000])}`);