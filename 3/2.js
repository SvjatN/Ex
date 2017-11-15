let countNum = 20;

let arr = [];
let sumOfTrirdNum = 0;

for (let i = 0; i < countNum; i++) {
    let temp = Math.floor(Math.random() * 10000);

     arr.push(temp);
    if ( String(arr[i]).length == 3) {

        sumOfTrirdNum += arr[i] ;
    }
}
console.log(arr);
console.log(sumOfTrirdNum);
