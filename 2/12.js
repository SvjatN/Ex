function setColor(point){
    x = point.x;
    y = point.y;
    if((x%2==0)&&(y%2==0)){
        point.color = "black";
    } else {
        point.color = "white";
    }
}

let point1 = {
    x: 1, 
    y: 2,
    color: null
};
let point2 = {
    x: 2,
    y: 2,
    color: null
};

setColor(point1);
setColor(point2);

console.log((point1.color == point2.color) ? "Yes" : "No");


