
let a = 1;
let b = 2;

let g = a;
let h = -b;

let e = -a;
let f = b;

let c = -a;
let d = -b;

let d1 = Math.sqrt( Math.pow((a-e), 2 )    +  Math.pow((b- f), 2 )  ) ;
let d2 = Math.sqrt( Math.pow((a-g), 2 )    +  Math.pow((b- h), 2 )  ) ;

S = d2 * d1;

console.log(g + " " + h);
console.log(e + " " + f);
console.log(c + " " + d);

console.log(S);




