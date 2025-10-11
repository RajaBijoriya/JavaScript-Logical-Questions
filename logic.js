// 32. Merge Sorted Arrays
//  Merge two sorted arrays into a single sorted array.
//     Example: Input: [1, 3, 5], [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6]

// let a = [1, 3, 5];
// let b = [2, 4, 6];
// let arr = [...a, ...b]
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length-1; j++){
//         if(arr[j] > arr[j+1]){
//             let a = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = a;
//         }
//     }
// }

// console.log(arr)














// 27. Group Anagrams
//  Given an array of strings, group all anagrams together.
//     Example: Input: ["eat", "tea", "tan", "ate", "nat", "bat"] →
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
// 28. Longest Palindromic Substring
//  Given a string, find the longest substring that is a palindrome.
//     Example: Input: "babad" → Output: "bab" or "aba"
// 29. Valid Parentheses
//  Given a string containing parentheses, check if they are valid(properly
//  nested).
//     Example: Input: "()[]{}" → Output: true
// 30. String Compression
//  Given a string, compress it by counting consecutive characters.
//     Example: Input: "aabcccccaaa" → Output: "a2b1c5a3"













// 26. Longest Substring Without Repeating Characters
//  Given a string, find the length of the longest substring without
//  repeating characters.
//     Example: Input: "abcabcbb" → Output: 3(substring: "abc")

// let str = "abcabcbb"
// for(let i = 0; i<str.length; i++){

// }
















// 25. Capitalize Words
//  Given a string, capitalize the first letter of each word.
//     Example: Input: "hello world" → Output: "Hello World"

let str = "hello world";
let str2 = "";

for(let i=0; i<str.length; i++){
  
    if(i === 0){
        let val = str[i].toLocaleUpperCase()
        
        str2 = str2+val;
    }
    if(str[i] === " "){
        let val = str[i+1].toLocaleUpperCase()

        str2 = str2 + " " + val;
    }
    else{
        str2 = str2+ str[i];
    }
}
console.log(str2)













// 24. Power of Two
//  Given a number, return true if it is a power of two.
//     Example: Input: 16 → Output: true

// const PowerTwo = (n) => {

//    while(n%2 === 0){
//     if(n===1){
//         break;
//     }
//     n = n/2;
//    }
//    if(n===1){
//     return true;
//    }
//    return false;



// }
// console.log(PowerTwo(6))







// 23. Is Prime Number
//  Write a function to check if a number is prime.
//     Example: Input: 11 → Output: true

// const IsPrime = (n) => {
//     let i = 0;
//     let count = 0;
//     for(i=2; i<n; i++){
//         if(n%i === 0) count++;
//     }
//     if(count === 0) return true
//     else return false;

// }
// console.log(IsPrime(11))








// 22. Fibonacci Sequence
//  Given a number n, return the first n numbers of the Fibonacci
// sequence.
//     Example: Input: 6 → Output: [0, 1, 1, 2, 3, 5]



// const FibonacciSequence = (n) => {
//     let arr = [];
//     let a = 0;
//     let b = 1;
//     if(n === 1){
//         arr.push(a);
//         return arr;
//     }
//     if(n === 2) {
//         arr.push(a);
//         arr.push(b);
//         return arr;
//     }
//     else {
//         arr.push(a);
//         arr.push(b)
//         for(let i=2; i<=n; i++){
//             let c = a+b;
//             arr.push(c);
//             a = b;
//             b = c;
            

//         }
//     }
//     return arr;
// }

// console.log(FibonacciSequence(5))















// 21. Factorial
//  Write a function to compute the factorial of a number.
//     Example: Input: 5 → Output: 120

// const Factorial = (n) => {
    
//     // for(let i=n; i>1; i--){
//     //     pro = pro * i;
//     // }
//     // return pro


//     // recurrion
//     if(n==1) return 1;
//      return n*Factorial(n-1)
// }
// console.log(Factorial(5))







// 20. Flatten Array
//  Given a nested array, flatten it into a single - level array.
//     Example: Input: [1, [2, 3], [4, [5]]] → Output: [1, 2, 3, 4, 5]

// let arr = [1, [2, 3], [4, [5, [6, [7, [8]]]]]];
// let arr1 = [];
// const FlatterArray = (arr) => {
//      for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             FlatterArray(arr[i]);
//         }
//         else{
//             arr1.push(arr[i]);
//         }
//      }
// }

// FlatterArray(arr);
// console.log(arr1)












// 19. Chunk Array
//  Given an array and a size, split the array into subarrays of the given size.
//     Example: Input: [1, 2, 3, 4, 5], size = 2 → Output: [[1, 2], [3,
//         4], [5]]


// let arr = [1, 2, 3, 4, 5, 3, 4,3,5];
// let arr1 = [];

// for(let i=0; i<arr.length; ){
//     let val  = [];
//     let size = 2;
//     while(size){
//        if(i<arr.length){
//            val.push(arr[i]);
//            i++;
//            size--;
//        }
//        else{
//         break;
//        }
//     }
//     arr1.push(val);
// }
// console.log(arr1)






















// 18. Find Second Largest
//  Given an array of numbers, find the second largest number.
//     Example: Input: [10, 5, 8, 12] → Output: 10


// let arr = [10, 5, 8, 1];
// let firstMax = 0;
// let secondMax = 0;
// for(let i = 0; i<arr.length; i++){
//    if(firstMax< arr[i]) firstMax = arr[i];
   
  
// }

// for(let j=0; j<arr.length; j++){
//     if(arr[j] < firstMax && arr[j] > secondMax) secondMax = arr[j];
// }

// console.log(secondMax)



















// 17. Product of Array Except Self
//  Given an array of numbers, return an array where each element is the
//  product of all other elements.
//     Example: Input: [1, 2, 3, 4] → Output: [24, 12, 8, 6]

// let arr = [1, 2, 3, 4];
// let arr1 = [];
// for(let i = 0; i<arr.length; i++){
//     let pro = 1;
//    for(let j=0; j<arr.length; j++){
//          if(arr[i] === arr[j]) continue;
//          else{
//             pro = pro * arr[j];
//          }
//    }
//    arr1.push(pro);
// }

// console.log(arr1)








// 16. Contains Duplicate
//  Given an array of numbers, return true if any value appears at least
// twice.
//     Example: Input: [1, 2, 3, ] → Output: true


// const IsDup = (arr) => {
//    for(let i=0; i<arr.length; i++){

//       let count = 0;
//       for(let j=0; j<arr.length; j++){
//         if(arr[i] === arr[j]) count++;
//       }

//       if(count>=2) return true;
//    }
//    return false;
// }
// let arr = [1,2,3,2];
// console.log(IsDup(arr))



















// 15. Sum of Two Numbers
//  Given an array of numbers and a target sum, return the indices of two
//  numbers that add up to the target.
//     Example: Input: [2, 7, 11, 15], target = 9 → Output: [0, 1]

// let arr =  [2, 7, 11, 15]
// let target = 9;
// let value = [];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] + arr[j] === target){
//             value.push(i);
//             value.push(j)
//         }
//     }
// }
// console.log(value)







// 14. Array Intersection
//  Given two arrays, return an array of their common elements.
//     Example: Input: [1, 2, 2, 1], [2, 2] → Output: [2]

// let arr1 = [1, 2, 2, 1];
// let arr2 = [3];

// if(arr1.length > arr2.length){
//     for(let i=0; i<arr2.length; i++){
//          let count = 0;
//         for(let j=0; j<arr1.length; j++){
//            if(arr2[i] === arr1[i]) count++;
//         }
//         if(count>=2){
//             console.log(arr1[i]);
//         }
//     }
// }










// 13. Move Zeros
//  Given an array of numbers, move all zeros to the end while maintaining
//  the relative order of non - zero elements.
//     Example: Input: [0, 1, 0, 3, 12] → Output: [1, 3, 12, 0, 0]

// let arr = [0, 1, 0,2 ,0,2,0,8,3, 12];
// let start = 0;
// let end = arr.length - 1;
// while(start <= end) {
//     if(arr[start] === 0 && arr[end] !== 0){
//        let val = arr[start];
//        arr[start] = arr[end];
//        arr[end] = val;
//        start++;
//        end--;
//     }
//     else{
//         start++;
//     }
  
    
// }
// console.log(arr)








// 12. Find Missing Number
//  Given an array of numbers from 1 to n with one number missing, find
//  the missing number.
//  Example: Input: [1, 2, 4, 5] → Output: 3
// let arr = [0,1,3,4];

// let MaxVal = 0;
// let sumVal = 0;
// for(let i=0; i<arr.length; i++){
//     if(MaxVal < arr[i]) MaxVal = arr[i];
//     sumVal = sumVal + arr[i];

// }
// console.log(MaxVal)
// let total_Sum = 0;
// for(let i=1; i<=MaxVal; i++){
//     total_Sum = total_Sum + i;    
// }

// console.log(total_Sum - sumVal)






















//  11. Rotate Array
//  Given an array and a number k , rotate the array to the right by k
//  steps.
//  Example: Input: [1, 2, 3, 4, 5], k = 2 → Output: [4, 5, 1, 2, 3]

























//10
// const firstNon = (str) => {
//   let val = -1;

//   for (let i = 0; i < str.length; i++) {
//     let count = 0;

//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) count++;
//     }

//     if (count == 1) {
//       val = i;
//       return val;
//     }
//   }
//   return val;
// };

// console.log(firstNon("lleedcode"));

//9
// const RemDup = (arr) => {
//   let arr1 = [];
//   let obj = {};

//   for(let i=0; i<arr.length; i++){
//     if(obj[arr[i]] === 1) continue;
//     else{
//       obj[arr[i]] = 1;
//       arr1.push(arr[i]);
//     }
//   }

//   return arr1;
// }

// let arr = [1, 2, 2, 3, 1];

// console.log(RemDup(arr));

// const VowelsCheck = (str) => {
//   let count = 0;
//   for(let i = 0; i<str.length; i++){
//     if(str[i] === "a" || str[i] === "o"  || str[i] === "e"  || str[i] === "i"  || str[i] === "u") count++
//   }
//   return count;
// }

// console.log(VowelsCheck("hello"))

// const StrToNum = (str) => {
//   let num = 0;
//   for(let i=0; i<str.length; i++){
//     num = num + str[i];
//   }
//   return num;
// }

// console.log(StrToNum("3242"))

// 5
// const sumArr = (arr) => {
//   let totalSum = 0;
//   for(let i=0; i<arr.length; i++){
//     totalSum = totalSum + arr[i];
//   }
//   return totalSum;
// }

// let arr = [2, 4, 5, 6];
// let count = sumArr(arr);

// console.log(count)

//4

// const maxNum = (arr) => {
//   let Maxi = 0;
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > Maxi) Maxi = arr[i];
//   }
//   return Maxi;
// }

// let arr  = [3, 1, 4, 99, 5];
// let maxValue = maxNum(arr)

// console.log(maxValue)

// let n = 20;
// for(let i=1; i<=n; i++){
//   if(i%3 === 0) console.log(i ,"===", "Fizz");
//   else if(i%5 === 0) console.log(i, "===", "Buzz");
//   else if(i%3 === 0 && i%5 === 0) console.log("FizzBuzz")
// }

// let str = "hello"
// let str2 = ""
// for(let i=str.length-1; i>=0; i--){
//   str2 = str2 + str[i]
// }
// console.log(str2)

// let str = "A man, a plan, a canal: Panama";
// const Palindrone = (str) => {
//   let str1 = "";

// for(let i=0; i<str.length; i++){
//   if(str[i] === "," || str[i] === ":" || str[i] === " ") continue;
//   else{
//     let a = str[i].toLowerCase()
//     str1 = str1+a;
//   }
// }

// let start = 0;
// let end = str1.length-1;
// let check = true;
// while(start < end) {
//   if(str1[start] !== str1[end]) check = false;
//   start++;
//   end--;
// }
// return check;
// }

// let val = Palindrone(str);
// console.log(val)
