// Find the sum of all the multiples of 3 or 5 below 1000.

let a = b = threes = fives = sum = 0;

function whatIsA(){
  console.log("a="+a);
}

function whatIsB(){
  console.log("b="+b);
}

function whatIsThrees(){
  console.log("threes="+threes);
}

function whatIsFives(){
  console.log("fives="+fives);
}

// whatIsA();
// whatIsB();

function multiplesOfThree(){
  if (a<1000){
    a = a + 1;
    if (a % 3 === 0){
      threes = threes + a;
    }
    multiplesOfThree();
  } else {
    return threes;
  }
}
//multiplesOfThree();
// whatIsThrees();

function multiplesOfFive(){
  if (b<1000){
    b = b + 1;
    if (b % 5 === 0){
      fives = fives + b;
    }
    multiplesOfFive();
  } else {
    return fives;
  }
}
//multiplesOfFive();
// whatIsFives();

function threesAndFives(){
  multiplesOfThree();
  multiplesOfFive();
  sum = sum + multiplesOfThree();
  sum = sum + multiplesOfFive();
  console.log("The sum of all the multiples of 3 or 5 below 1000 is " + sum + ".");
}

threesAndFives();
