let number = 7;

if (number === 1 || number === 0)
    number = 1;
let n1 = 1;
let n2 = 1;
let n3;
for (let i = 2; i <= number; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;


}
number = n3;
console.log(number);