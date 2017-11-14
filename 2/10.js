let arr = [2, 4, 4, 6];

let flag = true;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
        flag = false;
        break;
    }
}

if (flag) {
    console.log("yes");
} else {
    console.log("No");
}
