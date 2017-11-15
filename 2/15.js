point1 = {
    x: 3,
    y: 3
};
point2 = {
    x: 2,
    y: 1
};

let tempSize = Math.sqrt(Math.pow( (point2.x - point1.x),2) + Math.pow((point2.y - point1.y),2));

let template  = 2.23606797749979 ;

if(tempSize == template ){
    console.log("Yes");
} else {
    console.log("No")
}
  


