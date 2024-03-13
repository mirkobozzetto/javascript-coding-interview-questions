// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// function fizzBuzz(n) {
//   let fizz = "fizz";
//   let buzz = "Buzz";
//   let content = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       content += fizz + buzz;
//     } else if (i % 3 === 0) {
//       content += fizz;
//     } else if (i % 5 === 0) {
//       content += buzz;
//     } else {
//       content += i;
//     }
//     content += "\n";
//   }
//   return content;

function fizzBuzz(n) {
  let result = "";
  for (let i = 0; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "fizz";
    if (i % 5 === 0) output += "Buzz";
    if (output === "") output = i;
    result += output + "\n";
  }
  return result;
}

console.log(fizzBuzz(150));
