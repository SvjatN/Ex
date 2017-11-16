function reverseNew(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[arr.length - i - 1]);
    }

    return newArr;
}
//console.log(reverse([1, 9, 34, 4]));

let arr = [1, 2, 3, 4, 5] ;
    for (let i =0;i<=arr.length /2;i++) {

           let temp = arr[arr.length -i -1];
           arr[arr.length  -i  -1] = arr[i];
           arr[i] = temp;
    }

console.log(arr);

