let firstNum = -1;
let lastNum = 1;

for(let x = 0; x < 11; x++){
    x = firstNum + lastNum;
    firstNum = lastNum;
    lastNum = x;
    console.log(x);
}