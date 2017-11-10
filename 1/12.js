
let a = 72;

let first = Math.floor((a / 10));

//console.log(first);

let second = a - first * 10;

//console.log(second);

    if (first < second) {

    console.log(0);
        } else {
    
    let rem  =  (first%second);
     
    console.log((first - rem)/second);


}