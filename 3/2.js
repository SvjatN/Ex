let countNum = 20;

let arr = [];
let sumOfTrirdNum = 0;

for (let i = 0; i < countNum; i++) {
    let temp = Math.floor(Math.random() * 10000);

    arr.push(temp);
    if ( String(temp).length == 3) {
        sumOfTrirdNum += 1;
    }
}
console.log(arr);
console.log(sumOfTrirdNum);
