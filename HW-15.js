const array = [20, -10, 333, 1000, 552, 7, -7];

//////////// Task 1.1 ////////////
array.sort(function(e) {
    let res = (e%2 === 0) ? -1 : 1;
    return res;
});
console.log(`1 result of sorting is ${array}`);

//////////// Task 1.2 ////////////
array.sort(function(e) {
    let res = (e%2 === 0 ) ? 1 : -1;
    return res;
});
console.log(`2 result of sorting is ${array}`);

//////////// Task 1.3 ////////////
array.sort(function(e1, e2) {
    if(e1%2 != 0) {
        return e2 ? e2 - e1 : 1;
    }
    return (e2%2 != 0) ? -1 : e1 - e2;
});

console.log(`3 result of sorting is ${array}`);

//////////// Task 2.1 ////////////

function getMin(array) {
    const res = array.reduce(function(res, cur) {
        if(res <= cur) {
            res = res;
        } else {res = cur};
        return res;
    });
    return res;
}
console.log(`Min in array is ${getMin(array)}`);

//////////// Task 2.2 ////////////

function getMax(array) {
    const res = array.reduce(function(res, cur) {
        if(res <= cur) {
            res = cur;
        } else {res = res};
        return res;
    });
    return res;
}
console.log(`Max in array is ${getMax(array)}`);

//////////// Task 2.3 ////////////

function getAverage(array) {
        const res = array.reduce(function(res, cur) {
            return res + cur;
        });
        return res;
    }
console.log(`Average in array is ${Math.trunc(getAverage(array) / array.length)}`);

