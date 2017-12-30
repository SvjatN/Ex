let arr = [1, 2, 3, 4, 5, 4, 3, 2, 2, 1, 3, 4];
let temp = 0;
let temp2 = 0;
let arrTemp1 = [];
let arrTemp2 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i + 1]) {
        temp = temp + 1;
        if (i === arr.length-2) {
            arrTemp1.push(temp+1);     
        }
    } else {
        arrTemp1.push(temp + 1);
        temp = 0;
    }
    console.log(+ arr[i] + "  " + arr[i + 1]);
    console.log(temp);
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
        temp2 = temp2 + 1;
        if (i === arr.length-2) {
            arrTemp2.push(temp2+1);     
        }
    } else {
        arrTemp2.push(temp2 + 1)
        temp2 = 0;
    }
    console.log(+ arr[i] + "  " + arr[i + 1]);
    console.log(temp2);
}
console.log(arrTemp1);
console.log(arrTemp2);
console.log(Math.max(...arrTemp1, ...arrTemp2));