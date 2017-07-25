// "Write a program that prints the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print
//“Buzz”. For numbers which are multiples of both three and five print
// “FizzBuzz”."

let a = 1

function fizzBuzz(){
  if (a < 101 && a % 3 === 0 && a % 5 === 0){
    console.log(a + " FizzBuzz!");
    a = a + 1;
    fizzBuzz();
  } else if (a < 101 && a % 5 === 0){
    console.log(a + " Buzz");
    a = a + 1;
    fizzBuzz();
  } else if (a < 101 && a % 3 === 0){
    console.log(a + " Fizz");
    a = a + 1;
    fizzBuzz();
  } else if (a < 101){
    console.log(a);
    a = a + 1;
    fizzBuzz();
  }
}

fizzBuzz();
