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



let str = ["10","0001","111001","1","0"]

var findMaxForm = function (str, m, n) {
    str.sort((a, b) => a.length - b.length)
    let M = 0;
    let N = 0;
    
    let count = 0;
    for(let i = 0; i<str.length; i++){
        count++;
        for(let j = 0; j<str[i].length; j++){
       
            if(str[i][j] === 0) M++;
            else N++;
        }
       
        if (M >= m && N >= n) break;
        
    }
    return count-1
};

let a = findMaxForm(["10", "0", "1"], 5, 3)
console.log(a)
