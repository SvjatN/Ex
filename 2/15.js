point1 = {
    x: 3,
    y: 1
};
point2 = {
    x: 1,
    y: 2
};

let hipotenuze = Math.sqrt(Math.pow( (point2.x - point1.x),2) + Math.pow((point2.y - point1.y),2));

let template  = Math.sqrt(5) ;

if(hipotenuze == template ){
    console.log("Yes");
} else {
    console.log("No")
}
  


