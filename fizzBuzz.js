/* Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/

var fizzBuzz = function(n) {
  var new_arr = [];
  for(var i=1;i<=n;i++){
    if(i%5 == 0 && i%3 == 0){
       new_arr.push("FizzBuzz")
    } else if(i%3 == 0){
      new_arr.push("Fizz");
    } else if(i%5 == 0){
       new_arr.push("Buzz")
    } else {
      new_arr.push(i.toString());
    }
  }
  return new_arr;
};
console.log(fizzBuzz(15));

/* Output >> [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/
