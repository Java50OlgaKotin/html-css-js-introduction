/*const array = [123, 9, 28, 3, 44];
array.sort(function(e1, e2) {
    return e2 - e1;
    //return e1.toString().length - e2.toString().length;
});
console.log(`result of sorting [123, 9, 28, 3, 44] is ${array}`);

const ar1 = [123, 9, 28, 3, 44, -123];
ar1.sort(function(e1, e2) {
    let res = e1.toString().length - e2.toString().length;
    if(!res) {
        res = e1 - e2;
    }
    return res;
});
console.log(`result of sorting [123, 9, 28, 3, 44] is ${ar1}`);

////////////////////////
*/
function sum(array) {
    const res = array.reduce(function(res, cur) {
        return res + cur;
    });
    return res;
}
console.log(`sum([1,2,3,4,5]) is ${sum([1,2,3,4,5])}`);



