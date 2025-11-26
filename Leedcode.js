// var findXSum = function (nums, k, x) { let start = 0; let end = k - 1; let arr = []; while (end < nums.length) { let ar = nums.splice(start, end+1); let g = []; for (let i = 0; i < ar.length; i++) { let val = 0; for (let j = 0; j < ar.length; j++) { if (ar[i] === ar[j]) val++; } if (val > 1 && !g.includes(ar[i] * val)) { let b = ar[i] * val; g.push(b); } } if (g.length <= 1) { let sum = 0; let maxi = 0; for (let i = 0; i < ar.lenght; i++) { if (maxi < ar[i]) maxi = ar[i]; } sum = (g[0] || 0 ) + maxi; arr.push(sum); } else if (g.length > 1) { g.sort((a, b) => b-a); let sum = g[0] + g[1]; arr.push(sum); } start++; end++; } return arr; };

// let nums = [1, 1, 2, 2, 3, 4, 2, 3];
// let k = 6;
// let x = 2;
// console.log(findXSum(nums, k, x));


// var hasGroupsSizeX = function(deck) {
//     deck.sort((a,b) => a-b);
//     let start = 0;
//     let end = 1;
//     let n = deck.length;
//     let arr = []
//         let count = 0;
//     while(n){
//         if(deck[start] === deck[end]){
//             count++
//             end++;
//             n--;

//         }
//         if(deck[start] !== deck[end]){
//             start = end;
//             end++;
//             n--;
//             arr.push(count);
//             count = 0;
//         }
//     }
//     let sum = 0
//     for(let i =0 ; i<arr.length-1; i++){
//         let count = 0;
//         if(arr[i] == arr[i+1]) count++;

//     }
//    if(sum%2 !== 0 && arr.length%2 === 0) return false;
//    return true;

// };

// console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))


// var countOperations = function(num1, num2) {
//     let count = 0;
//     let num = 0
//     while(num1 !== 0 || num2 !== 0){
//        if(num1>num2){
//             num = num1-num2;
//             num1 = num;
//             console.log(num)

//        }
//        else{
//         num = num2 - num1
//         num2 = num;
//         console.log(num)
//        }
//     }
//     return count;

// };

// countOperations(2, 3);



// let str = ["10","0001","111001","1","0"]

// var findMaxForm = function (str, m, n) {
//     str.sort((a, b) => a.length - b.length)
//     let M = 0;
//     let N = 0;

//     let count = 0;
//     for(let i = 0; i<str.length; i++){
//         count++;
//         for(let j = 0; j<str[i].length; j++){

//             if(str[i][j] === 0) M++;
//             else N++;
//         }

//         if (M >= m && N >= n) break;

//     }
//     return count-1
// };

// let a = findMaxForm(["10", "0", "1"], 5, 3)
// console.log(a)

// let nums = [15252, 16764, 27963, 7817, 26155, 20757, 3478, 22602, 20404, 6739, 16790, 10588, 16521, 6644, 20880, 15632, 27078, 25463, 20124, 15728, 30042, 16604, 17223, 4388, 23646, 32683, 23688, 12439, 30630, 3895, 7926, 22101, 32406, 21540, 31799, 3768, 26679, 21799, 23740]
// nums.sort((a, b) => a - b);
// console.log(nums)
// let obj = {};
// var maximumGap = function (nums) {
//     if (nums.length < 2) return 0;

//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length - 1; i++) {
//         let rem = nums[i + 1] - nums[i];
//         if (obj[rem]) obj[rem]++;
//         else obj[rem] = 1;
//     }




// };
// let v = maximumGap(nums);

// console.log(obj)
// let max = 0;

// for (let val in obj) {
//     let a = Number(val)
//     if (a >= max ) max = val;
//     console.log(val)
// }
// console.log(max)




// 287

// var findDuplicate = function (nums) {
//     let sum = nums.reduce((acc, curr) => acc+curr, 0);
//     let max = 0;
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] > max) max = nums[i];
//     }
//     console.log(max);
//     let total = 0;
//     for(let i = 1; i<=max; i++){
//         total += i;

//     }
//     return sum-total;


// }
// let arr = [3, 1, 3, 4, 2];
// let val = findDuplicate(arr);
// console.log(val)



// 442
// var findDuplicates = function (nums) {
//     if (nums.length === 1) return [];
//     nums.sort((a, b) => a - b);
//     let t = [];
//     for(let i = 0; nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1]) t.push(nums[i]);
//     }
//     return t;
// };
// let arr = [4, 3, 2, 7, 8, 2, 3, 1]
// let a = findDuplicates(arr);
// console.log(a)


// var findMaxLength = function (nums) {

//     let one = 0;
//     let zero = 0;
//     let oneArr = [];
//     let zeroArr = [];

//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] === 1) one++;
//         else{
//             oneArr.push(one);
//             one = 0;
//         }
//     }

//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] !== 1){zero++}

//         else{
//             // console.log(zero)
//             zeroArr.push(zero);
//             zero = 0;
//         }

//     }
//     if (zero > 0 || nums[nums.length - 1] === 0) {
//     zeroArr.push(zero);
// }


//     let maxZero = 0;
//     for(let i = 0; i<zeroArr.length; i++){
//         if(zeroArr[i] > maxZero) maxZero = zeroArr[i];
//     }

//     let maxOne = 0;
//     for(let i = 0; i<oneArr.length; i++){
//         if(oneArr[i] > maxOne) maxOne = oneArr[i];
//     }

//     if(maxOne>maxZero) {
//         return maxZero*2;
//     }

//     return maxOne*2;




// };
// let nums = [0, 1, 1, 1, 1, 1, 0, 0, 0]
// let a = findMaxLength(nums)
// console.log(a)
// let zeroo = 0
// let zerrrr = []
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//         zeroo++;
//     } else {
//         zerrrr.push(zeroo);
//         zeroo = 0;
//     }
// }
// if (zeroo > 0 || nums[nums.length - 1] === 0) {
//     zerrrr.push(zeroo);
// }
// console.log(zerrrr)
// 2154

// var findFinalValue = function (nums, original) {
//     let found = 0;
//      nums.sort((a,b) => a-b);
//      console.log(nums)
//      for(let i = 0; i<nums.length; i++){
//         if(nums[i] === original){
//             original = original * 2;
//             found = original;
//         }
//      }
//     if (found > original) return found;
//     return original;

// };

// let arr = [8, 19, 4, 2, 15, 3]
// let num = 2;
// let a = findFinalValue(arr, num);
// console.log(a)

// console.log(s)
// let s = "leetcode"
// let obj = {}
// let value = 0;
// for(let i = 0; i<s.length; i++){
// if(obj[s[i]]) obj[s[i]]++;
// else {

// obj[s[i]] = 1;
// value = i;

// }
// }
// console.log(obj)
// for(let val in obj){
//     if(obj[val] === 1){
//         console.log(s.indexOf(val))
//         break;
//     }
// }


// var removeDuplicateLetters = function (s) {

//     let last = {};
//     for(let i = 0; i<s.length; i++){
//         let ind = s.lastIndexOf(s[i]);
//         last[s[i]] = ind;
//     }
//     let arr = [];
//     for(let val in last){
//         arr.push(last[val]);
//     }
//     // arr.sort((a,b) => a-b);
//     let str = "";
//     for(let i = 0; i<arr.length; i++){
//         str = str+s[arr[i]];
//     }
//     return str;

// };

// let s = "cbacdcbc";
// let a =  removeDuplicateLetters(s);
// console.log(a)
// var maxSumDivThree = function(nums) {
//     if(nums.length === 1){
//         if(nums[0] % 3=== 0) return nums[0];
//         return 0;
//     }

//     let sum = 0;
//     for(let i = 0; i<nums.length; i++) sum += nums[i];

//     let val = 0;

//     for(let i = 0; i<nums.length; i++){
//         let a = sum - nums[i];
//         if(a%3 === 0 && a>val) val = a;
//         else continue;
//     }
//     return val

// };
// let nums = [1, 2, 3, 4, 4]

// let a = maxSumDivThree(nums)
// console.log(a);



// const BinaryToDicimal = (num) => {
//     let sum = 0;
//     while(num){
//         let rem = num%10;
//         sum = sum*2+rem;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

// let val = BinaryToDicimal(0111);
// console.log(val)

// var capitalizeTitle = function (title) {

//     let arr = [];
//     let val = ""
//     for (let i = 0; i <= title.length; i++) {

//         if (title[i] === " " || i === title.length) {
//             arr.push(val)
//             val = "";
//         }
//         else {
//             val = val + title[i];
//         }
//     }

//     let out = "";
//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i];
//         if(str.length < 3) out += str.toLowerCase() + " ";
//         else {
//             let a = "";
//             for(let j = 0; j<str.length; j++){
//                 let b = str[j];
//                 if(j === 0) a  = a + b.toUpperCase();
//                 else {
//                     a = a + b.toLowerCase();
//                 }
//             }
//             out = out + a + " ";
//         }

//     }
//     return out;



// };

// let title = "capiTalIze te titLe";
// let val = capitalizeTitle(title)
// console.log(val)

// let isPalindrone = (s) => {

// }


// var longestPalindrome = function (s) {
//     let start = 0;
//     let end = s.length - 1;


// };

//  let s = "babad"


// var minWindow = function (s, t) {
//     let output = "";
//     if(s.length < t.length) return "";
//     for(let i = 0; i<s.length; i++){

//     }

// };

// let s = "ADOBECODEBANC", t = "ABC"

// var removeDuplicates = function (s) {
//    let arr = [];
//    for(let i = 0; i<s.length; i++){
//     arr.push(s[i]);
//    }
//    for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr.length-1; j++){
//         if(arr[j] === arr[j+1]){

//         }
//     }
//    }
//    console.log(arr)
// };
// let s = "abbaca"
// let a = removeDuplicates(s)


// var smallestRepunitDivByK = function(k) {

//     let value = "";
//    while(value.length < k){
//       value = value + "1";
//    }
//    let val = Number(value);
//    if(val % k === 0) return value.length;
//    return -1;

// };

// let a = smallestRepunitDivByK(7);
// console.log(a)


// var maxRepeating = function (sequence, word) {
//     if(sequence.length === 1 && word.length === 1 && sequence === word) return 1;
  
//     let start = 0;
//     let end = word.length;
//     let count = 0;
//    while(end < sequence.length){
//     let str = sequence.slice(start, end);
//     console.log(str)
//     if(str === word){
//         count++;
//         start = start + word.length;
//         end = end + word.length;
//     }
//     else{
//         start++;
//         end++;
//     }

//    }
//     return count;
    
// };


let str = "ababc"
let a = maxRepeating(str, "ab");
console.log(a)

let next = 1;
// let count = 0;
// for (let i = 0; i < sequence.length; i++) {
//     let a = sequence[start] + sequence[next];
//     if (a === word) {
//         count++;
//         start += 2;
//         next += 2;
//     }
//     else {
//         start++
//         next++;

//     }
// }
// return count;