'use strict';

let num = 50;

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
	console.log(i);
}

for (let i = 0, i < 3, i++) {
    console.log(i);
    for (let j = 0, j < 3, j++) {
        console.log(j);
    }
}


function returnNeighboringNumbers(num) {
    let arr = [];
    for (let i = 1; i <= 3; i++) {
        arr[i-1] = num;
    }
    return arr;
}
returnNeighboringNumbers(5);