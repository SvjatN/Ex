let arr = [  7, 8, 1, 2, 2, 3, 1, 4, 1,1,1,1,1,1];
let temp = 2;
let arrLength = [];

for (let i = 1; i < arr.length ; i++) {
    if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
        (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
        temp = temp + 1;
        
    } else {
        arrLength.push(temp);
        temp = 2;
    } 
    //console.log(arr[i - 1] + "  " + arr[i] + "  " + arr[i + 1]);
    //console.log(temp);
    //console.log((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
    //(arr[i] < arr[i - 1] && arr[i] < arr[i + 1]));
}
console.log(Math.max(...arrLength));