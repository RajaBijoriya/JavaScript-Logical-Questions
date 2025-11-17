let arr = [1, 1, 1, 2, 2, 3,3,3,3,3] 
let k = 2;
let val = [];
let obj = {}
for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=0; j<arr.length; j++){
        if(arr[i] === arr[j]) count++;
    }
    if(count>1){
        if (obj[arr[i]]) continue;
        else {
            obj[arr[i]] = count;
            val.push(arr[i])
        }
    }

}
console.log(val)
val.sort((a,b) => a-b)
console.log(val)
console.log(val[0], val[1])
console.log(obj)
