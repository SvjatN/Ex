function reverseNew(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[arr.length - i - 1]);
    }

    return newArr;
}
//console.log(reverse([1, 9, 34, 4]));

let arr = [12, 34, 5, 0,86] ;
    
    
    for (let i = arr.length -1 ;i>=0 ; i--) {
        arr.push(arr[i]); 
    }
    for(let i = 0;i< arr.length/2 +1 ;i++){
       var removed = arr.slice(i);
    }
    arr = removed;

console.log(arr);

