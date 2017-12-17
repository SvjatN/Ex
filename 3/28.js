let arr = [1, 0, 1, 0, 2, 0, 2, 0, 0];
let temp = 2;
let arrLength = [];

for (let i = 1; i < arr.length -1; i++) {

    if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
        (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
        temp = temp + 1;
        if (i === arr.length-2) {
            arrLength.push(temp);     
        }
    } else {
        arrLength.push(temp);
        temp = 2;
    }
    console.log(arr[i - 1] + "  " + arr[i] + "  " + arr[i + 1]);
    console.log(temp);
    console.log((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
        (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]));
}
console.log(arrLength);
console.log(Math.max(...arrLength));