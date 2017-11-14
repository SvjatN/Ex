function longestWord(string) {
    let arr = string.split(" ");
  
    let biggestWord = arr[0];

    let smallestWord = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (biggestWord.length < arr[i].length) {
             
               biggestWord = arr[i];
        }
        if (smallestWord.length > arr[i].length) {
           
            smallestWord = arr[i];
        }
    }
    return ( "longest   " + biggestWord +" smallest = " + smallestWord );
}
console.log(longestWord("ee qweewwe wer e"))