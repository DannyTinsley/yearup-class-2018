// Write a program that will `console.log` the numbers from 1 to 100. But for multiples of three `console.log` “Fizz” instead of the number and for the multiples of five `console.log` “Buzz”. For numbers which are multiples of both three and five `console.log` “FizzBuzz”.


// function FizzorBuzz (num){
//   for (let leCount= 0; leCount<100; leCount++){
//   if (leCount/num===3){
//      console.log ("Fizz");
//   }
//   else if (leCount/num=== 5){
//      console.log ("Buzz");
//   }
//   else if (leCount/num=== 3 or 5){
//      console.log ("FizzBuzz");
//   }
//   }
// console.log (FizzorBuzz);

for (let i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
