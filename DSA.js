// 11. Unique Values
//  Given an array with duplicates(e.g., [1, 2, 2, 3, 4, 4]), use filter() and
// indexOf() to create a new array with unique values.Return the new
//     array

// let arr = [1, 2, 2, 3, 4, 4];
// // let newArr = arr.filter((val) => val !== val+1 )
// // console.log(newArr)

// let obj = {};
// let newArr = [];
// for(let i=0; i<arr.length; i++){
//     if(obj[arr[i]]) continue;
//     else {
//         obj[arr[i]] = 1;
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr)

// 12. Group by Length
//  Given an array of strings(e.g., ["cat", "dog", "elephant", "rat"]), use
// reduce() to create an object grouping words by their length(e.g., {
//     3:
//         ["cat", "dog", "rat"], 8: ["elephant"]
// }).Return the object

// let str = ["cat", "dog", "elephant", "rat"];
// let obj = {};
// for(let i=0; i<str.length; i++){
//    if(obj[str[i].length]){
//     obj[str[i].length] = [...str[i], str[i]];
//    }
//    else {
//     obj[str[i].length] = [str[i]]
//    }
// }
// console.log(obj)

// 13. Sort and Slice
//  Given an array of numbers(e.g., [5, 2, 9, 1, 7, 6]), use sort() to sort in
//     ascending order and slice() to return the first 3 elements.Return the
//  resulting array

// let arr = [5, 2, 9, 1, 7, 6]
// arr.sort((a,b) => a-b);
// console.log(arr.slice(0,3))

// 14. Flatten Nested Array
//  Given a nested array(e.g., [1, [2, 3], [4, [5]]]), use flat() to flatten it to a
// single - level array.Return the flattened array

// let flateArr = [];
// function Flatten(arr) {
//    for(let i=0; i<arr.length; i++){
//     if(Array.isArray(arr[i])) {
//         Flatten(arr[i]);
//     }
//     else{
//         flateArr.push(arr[i]);
//     }
//    }
// }
// let arr = [1, [2, 3], [4, [5]]];
// Flatten(arr)
// console.log(flateArr)

// 15. Find First Match
//  Given an array of objects(e.g., [{ id: 1, name: "Alice" }, {
//     id: 2, name:
//         "Bob"
// }]), use find() to return the first object where name starts with "B"
//  using startsWith().Return the object or null.

// let arr = [
//   { id: 1, name: "Alice" },
//   {
//     id: 2,
//     name: "Bob",
//   },
// ];
// // let val = arr.find((val) => {
// //     if (val.name.startsWith === "B") return val
// // });
// // console.log(val)
// let obj = {}
// for(let i=0; i<arr.length; i++){
//     if(arr[i].name[0] === "B"){

//        obj = arr[i];
//     }
// }
// console.log(arr[1].name[0] === "B")
// console.log(obj)

// 6. Reverse Words
//  Given a sentence(e.g., "Hello world"), use split(), reverse(), and join() to
//  reverse the order of words(e.g., "world Hello").Return the new string.

// let str = "Hello world";
// let val = str.split(" ").reverse().join(" ")
// console.log(val)

// 7. Extract Substring
//  Given a string(e.g., "The price is $19.99"), use match() with a regular
//  expression to extract the decimal number(e.g., "19.99").Return the
//  matched string or null.

// let str = "The price is $19.99";

// 8. Camel Case Converter
//  Given a string with words separated by spaces(e.g., "hello world"), use
// split(), map(), and join() to convert it to camelCase(e.g., "helloWorld").
//  Capitalize the first letter of each word except the first.Return the result
// let str = "hello world kese he app"
// let newStr = "";
// for(let i = 0; i<str.length; i++){
//     if(str[i] === 0) newStr = newStr + str[i];
//     else if(str[i] === " ") continue;
//     else if(str[i-1] === " ") newStr = newStr + str[i].toUpperCase();
//     else {
//         newStr = newStr + str[i];
//     }
// }
// console.log(newStr)

// 9. Count Vowels
//  Given a string(e.g., "javascript"), use match() with a regex to count the
//  number of vowels(a, e, i, o, u, case -insensitive).Return the count.

// let str = "javascript";
// let count = 0;
// let vowels = "aeiou"
// for(let i=0; i<str.length; i++){
//    let val = str[i].toLowerCase();
//    let a = vowels.match(val)
//    if(a) count++;
// }
// console.log(count)

//  10. Truncate String
//  Given a string and a max length (e.g., "This is a long string", 10), use
//  slice() to truncate the string to the max length and append "..." if
//  truncated. Return the result (e.g., "This is a ...").

// let str = "This is a long string";
// console.log(str.slice(0,10)+"...");

// 11. Format Currency
//  Given a number(e.g., 1234.567), use toFixed() and toLocaleString() to
//  format it as a currency string with 2 decimal places(e.g., "1,234.57").
//  Return the formatted string.

// let currency = 1234.567;
// console.log(currency.toFixed(2).toLocaleString())

// 12. Random Array of Numbers
//  Given a size n(e.g., 5), use Array.from() and Math.random() to create an
//  array of n random integers between 1 and 100. Return the array

// let n = 5;
// for(let i=0; i<n; i++){

// }

// 13. Round to Nearest Multiple
//  Given a number and a multiple(e.g., 17, 5), use Math.round() to round
//  the number to the nearest multiple of the given value(e.g., 15).Return
//  the result

// let val = 20;
// let div = 3;

// let rem = Math.round(val/div);
// console.log(rem*div)

// 14. Deep Clone Object
//  Given an object(e.g., { a: 1, b: { c: 2 } }), use JSON.parse() and
// JSON.stringify() to create a deep clone of the object.Return the cloned
// object

// let obj1 = { a: 1, b: { c: 2 } };

// let obj2 = JSON.parse(obj1)
// console.log(obj2)

// 15. Filter Object Properties
//  Given an object(e.g., { name: "Alice", age: 25, city: "NYC" }) and an array
//  of keys(e.g., ["name", "city"]), use Object.fromEntries() and
// Object.entries() to create a new object with only the specified keys.
//  Return the new object

// let obj = { name: "Alice", age: 25, city: "NYC" };
// let arr = ["name", "city"]

// let obj1 = {};
// for(let i=0; i<arr.length; i++){

// }

// 1. Sliding Window Sum
//  Given an array of numbers and a window size(e.g., [1, 2, 3, 4, 5], 3), use
// slice() and reduce() to compute the sum of each sliding window of the
//  given size(e.g., [6, 9, 12]).Return the array of sums.

// )

// const SlidingWindowSum = (arr, num) => {
//     let sumArr = [];

//     for (let i = 0; i <= arr.length - num; i++) {
//         // take window of size 'num'
//         let val = arr.slice(i, i + num);

//         // calculate sum of this window
//         let value = 0;
//         for (let j = 0; j < val.length; j++) {
//             value += val[j];
//         }

//         sumArr.push(value);
//     }

//     return sumArr;
// };

// let arr = [1, 2, 3, 4, 5];
// console.log(SlidingWindowSum(arr, 3));

// const val = SlidingWindowSum([1, 2, 3, 4, 5], 3)
// console.log(arr.slice())

// 2. Intersection of Arrays
//  Given two arrays of numbers(e.g., [1, 2, 2, 3], [2, 3, 4]), use filter() and
// includes() to find the intersection(common elements, including
//  duplicates).Return the intersection array

// let arr = [1, 2, 2, 3];
// let arr2 = [2, 3, 4];
// let arr3 = []
// let obj = {}
// for(let i=0; i<arr.length; i++){
//    if(obj[arr[i]]) continue;
//    else{
//        if (arr2.includes(arr[i])) {
//            arr3.push(arr[i]);
//            obj[arr[i]] = 1;
//        }
//    }
// }
// console.log(arr3)
// console.log(obj)

// 3. Group and Aggregate
//  Given an array of objects(e.g., [{ category: "A", value: 10 }, {
//     category:
//         "B", value: 20
// }, { category: "A", value: 30 }]), use reduce() to group by
//  category and sum the value for each category(e.g., { A: 40, B: 20 }).
//  Return the result object

// let arr = [
//   { category: "A", value: 10 },
//   { category: "B", value: 20 },
//   { category: "A", value: 30 },
//   {category: "B", value: 30}
// ];

// let obj = {};
// for(let i=0; i<arr.length; i++){
//     if (obj[arr[i].category]){
//         let val = arr[i].value + obj[arr[i].category];
//         obj[arr[i].category] = val
//     }
//     else{
//         obj[arr[i].category] = arr[i].value;
//     }
// }
// console.log(obj)

// 4. Rotate Array
//  Given an array and a number k(e.g., [1, 2, 3, 4, 5], 2), use slice() and
// concat() to rotate the array to the right by k positions(e.g., [4, 5, 1, 2,
//     3]).Return the rotated array.


// 5. Partition Array
//  Given an array of numbers and a threshold(e.g., [1, 5, 3, 8, 2], 4), use
// reduce() or filter() to partition into two arrays: one with numbers less
//  than or equal to the threshold and one with numbers greater.Return
//  an array of the two arrays(e.g., [[1, 3, 2], [5, 8]])  


// 6. Parse Query String
//  Given a URL query string(e.g., "name=Alice&age=25&city=NYC"), use
// split(), map(), and reduce() to parse it into an object(e.g., {
//     name:
//         "Alice", age: "25", city: "NYC"
// }).Return the object

// let str = "name=Alice&age=25&city=NYC";
// let val = str.split("=").join(",")
// let str2 = val.split("&")
// let obj = {}
// for(let i=0; i<str2.length; i++){
//     // obj[str2[i]] = str2[i]
//     obj[str2[i].slice(-1,0)] = str2[i].slice(1,1)
    
// }
// console.log(obj)


// 7. Longest Word
//  Given a sentence(e.g., "The quick brown fox jumps"), use split(),
//     reduce(), and length to find the longest word(e.g., "quick").Return the
// word(or the first if tied)
// let str = "The quick brown fox jumps"
// let arr = str.split(" ");
// let len = 0;
// let word = "";
// arr.map(val => {
//     if(val.length>len){
//         len = val.length;
//         word = val;
//     }
// })
// console.log(str.split(" "))
// console.log(word)



// 8. String Compression
//  Given a string(e.g., "aabbbcc"), use split() and reduce() to compress it
//  into a string where repeated characters are counted(e.g., "a2b3c2").
//  Return the compressed string

// let str = "aabbbcc";
// let obj = {};
// let val = str.split("");
// for(let i=0; i<val.length; i++){
//     if(obj[val[i]]){
//         obj[val[i]]++
//     }
//     else obj[val[i]] = 1;
// }
// let str1 = ""
// for(let val in obj){
//     // console.log(val)
//     // console.log(obj[val])
//     str1 = str1+val+obj[val];
// }
// console.log(str1)



// 9. Template Formatter
//  Given a template string(e.g., "Hello, {name}!") and an object(e.g., {
//     name: "Alice"
// }), use replace() with a regex to replace placeholders with
//  object values.Return the formatted string(e.g., "Hello, Alice!")


// let str = "Hello, {name}"
// let obj = {
//     name: "Alice"
// }

// console.log(`Hello, ${obj.name}!`)


// 10. Palindrome Segments
//  Given a string(e.g., "racecarababa"), use slice() and split() to find all
// palindromic substrings longer than 2 characters.Return an array of
// palindromes(e.g., ["racecar", "aba"])

// const Palindrome = (str) => {
//     let arr = [];
//     let val = [];
//     for(let i=0; i<str.length;){
//         let a = i+3;
//         let rem = str.slice(i, a);
//         i = a;
//         let rem1 = ""
//         for(let j=rem.length-1; j>=0; j--){
//             rem1 = rem1+rem[j];
//         }
//         if(rem === rem1){
//             arr.push(rem);
//         }
//     }
//     return arr;
// }

// console.log(Palindrome("racecarababa"))

//  Number Methods
// 11. Prime Number Filter
//  Given an array of numbers(e.g., [4, 5, 6, 7, 8]), use filter() and a helper
// function with Math.sqrt() to keep only prime numbers.Return the
//  filtered array

// let arr = [4, 5, 6, 7, 8];
// let arr1 = arr.filter((val) => {
//     let i = 0;
//     for(i=2; i<val; i++){
//         if(val%i === 0){
//             break;
//         }
//     }
//     if(i===val){
//         return val
//     }
  
// })

// console.log(arr1)





// 12. Generate Fibonacci Sequence
//  Given a number n(e.g., 6), use Array.from() and reduce() to generate
//  the first n numbers of the Fibonacci sequence(e.g., [0, 1, 1, 2, 3, 5]).
//  Return the array


// function fibonacci(n) {
//     return Array.from({ length: n }).reduce((acc, _, i) => {
//         if (i < 2) acc.push(i); // first two numbers: 0, 1
//         else acc.push(acc[i - 1] + acc[i - 2]); // sum of previous two
//         return acc;
//     }, []);
// }

// Example:
// console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]

// 13. Precise Average
//  Given an array of numbers(e.g., [1.234, 2.567, 3.891]), use reduce() and
// toFixed() to compute the average, rounded to 3 decimal places.Return
//  the result as a number.

// let arr = [1.234, 2.567, 3.891];

// let val = arr.reduce((acc, curr) => acc+ curr,0)/arr.length

// console.log(val.toFixed(3))




//  Object Methods
// 14. Nested Object Flattening
//  Given a nested object(e.g., { a: 1, b: { c: 2, d: { e: 3 } } }), use
// Object.entries() and reduce() to flatten it into a single - level object with
//  dot notation keys(e.g., { "a": 1, "b.c": 2, "b.d.e": 3 }).Return the flattened
// object.
// let obj = { a: 1, b: { c: 2, d: { e: 3 } } };
// let obj1 = {};

// // console.log(obj)
// const FlateObj = (obj) => {
//      for(let i=0; i<Object.keys(obj).length; i++){
//         if(Object.isExtensible(obj[i])){
//             FlateObj(obj[i])
//         }
//         else{
//             obj1[obj[i]] = obj[i];
//         }
//      }
// }

// FlateObj(obj);
// console.log(obj1)


// 14. Nested Object Flattening
// Given a nested object, flatten it into dot notation keys.

let obj = { a: 1, b: { c: 2, d: { e: 3 } } };
const nestObj = (obj) => {
    
}


// let flattened = flattenObject(obj);
// console.log(flattened);
// // Output: { "a": 1, "b.c": 2, "b.d.e": 3 }


// 15. Object Diff
//  Given two objects(e.g., { a: 1, b: 2, c: 3 } and { a: 1, b: 3 }), use
// Object.keys() and Object.entries() to return an object containing only
//  the properties that differ(e.g., { b: 3 }).Include properties present in one
//  object but not the other. ### Basic Level Questions(10 Questions)


// let obj = {a: 1, b: 2, c: 3};
// let obj1 = {a: 1, b: 3, d : 4};
// let ret = {};
// // for(let val in obj){
// //     if(obj[val] !== obj1[val]) 
// //      ret[val] = obj1[val];
// // }
// // console.log(ret)

// let keys = new Set([...Object.keys(obj), ...Object.keys(obj1)])
// console.log(keys)

// for(let val of keys){
//     if(obj[val] !== obj1[val]){
//         ret[val] = obj1[val] !== undefined ? obj1[val]: obj[val];
//     }
// }

// console.log(ret)
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.