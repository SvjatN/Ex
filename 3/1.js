let countNum = 10;

let arr = [];
let countEvenNumber = 0;

for (let i = 0; i < countNum; i++) {
    let temp =  Math.floor(Math.random() * 100000);

    arr.push(temp);
    
    if ( arr[i] % 2 == 0) {
        countEvenNumber += 1;
    }
}

console.log(arr);
console.log(countEvenNumber);