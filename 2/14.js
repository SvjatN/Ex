"use strict";

let point1 = {
    x: 1 ,
    y: 1
};
let point2 = {
    x: 4,
    y: 4
}; 
let temp = (Math.abs(point1.x - point2.x )== Math.abs(point1.y - point2.y));
console.log( temp ? "Yes": "NO");