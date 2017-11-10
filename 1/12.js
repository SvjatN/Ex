let a = 72;
let first = Math.floor((a / 10));
let second = a - first * 10;
if (first < second) {
    console.log(0);
} else {
    let rem  =  (first%second);
    console.log((first - rem)/second);
}