// // Input: "hello"
// // Output: "olleh"

// function reverseString(str) {
//   const string = str.split("");

//   const reverseStr = string.reverse();

//   const newString = reverseStr.join("");

//   return newString;
// }

// console.log(reverseString("hello"));

// Input: 7 → true
// Input: 10 → false
// function isPrime(num) {
//   if (num <= 1) return false; // 0 and 1 are not prime
//   if (num === 2) return true; // 2 is prime
//   if (num % 2 === 0) return false; // eliminate even numbers > 2

//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// console.log(isPrime(12));

// Print numbers 1–20
// If divisible by 3 → "Fizz"
// If divisible by 5 → "Buzz"
// If divisible by 3 & 5 → "FizzBuzz"
// function fizzBuzz() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz();

// 4. Find Largest Number in an Array
// Input: [3, 7, 2, 9, 5]
// Output: 9
// function findMax(arr) {
//   const sortedArray = arr.sort((a, b) => b - a);

//   const biggestNumber = sortedArray.shift();

//   return biggestNumber;
// }

// const Input = [2, 3, 4, 5, 7, 9, 10];
// console.log(findMax(Input));

// 5. Palindrome Check
// Input: "racecar" → true
// Input: "hello"   → false
// function isPalindrome(str) {
//   const reverse = str.split("").reverse().join("");

//   if (str === reverse) {
//     return true;
//   } else return false;
// }

// console.log(isPalindrome("hello"));

// 6. Count Vowels in a String
// Input: "javascript" → 3
// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let counter = 0;

//   for (const char of str) {
//     if (vowels.includes(char)) counter++;
//   }

//   return counter;
// }

// const string = "javascript";
// console.log(countVowels(string));

// 7. Flatten a Nested Array (1 level)
// Input: [1, [2, 3], [4, 5]]
// Output: [1, 2, 3, 4, 5]
// function flattenArray(arr) {
//   const flatArr = arr.flat();
//   return flatArr;
// }

// const input = [1, [2, 3], [4, 5]];
// console.log(flattenArray(input));

// Input: [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]
// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
//   }

// const input = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(input));
