let arr = [123, 12, 45, 3, 5, 6, 7, 1,2];
let temp = 0;
let arrTemp = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
        temp = temp +1;
    } else {
        // не розумію чому тут хоче temp+1 ,а не temp
        arrTemp.push(temp+1);  
        temp = 0;
    }
}
console.log(Math.max(...arrTemp));