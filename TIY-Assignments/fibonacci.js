// sum of even valued fibonacci numbers between 0 and 4,000,000

let x = 1;
let y = 2;
let fibonacciNumber = 0
let sum = 2;

function addNumbers(){
  if(fibonacciNumber<4000000){
    fibonacciNumber = x + y;
    if(fibonacciNumber % 2 === 0){
      sum = sum + fibonacciNumber;
      console.log("Current Sum: " + sum);
    }
    x = y;
    y = fibonacciNumber;
    addNumbers();
  } else {
    console.log("The sum of even valued fibonacci numbers between 0 and 4,000,000 is " + sum);
  }
}

addNumbers();
