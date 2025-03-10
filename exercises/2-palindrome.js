// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed.

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

function palindrome(str) {
  const inv = str.split("").reverse().join("");
  return str === inv;
  //  * or ...
  // if (str === str.split("").reverse().join("")) {
  //   return true;
  // } else {
  //   return false;
  // }
}

console.log(palindrome("kayak"));
