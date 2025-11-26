// creating node;

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// let a = new ListNode(10);
// let b = new ListNode(20);
// let c = new ListNode(30);

// a.next = b;
// b.next = c;
// console.log(ListNode)
// console.log(a) 

// // ListNode {
// //     val: 10,
// //         next: ListNode { val: 20, next: ListNode { val: 30, next: null } }
// // }

// console.log(b)

// // ListNode { val: 20, next: ListNode { val: 30, next: null } }
// console.log(c)
// // ListNode { val: 30, next: null }

// travershing in linked list


function PrintL(head)  {
    let curr = head;

    while(curr !== null){
        console.log(curr.val);
        curr = curr.next
    }
}

// PrintL(a)

//  insert in beginning (head me insert)
// let newNode = new ListNode(50);
// newNode.next = a;
// a = newNode

// PrintL(newNode)


// inserted at the last
// function insertLast(head, value) {
//     if(!head) return new ListNode(value);
//     let curr = head;
//     while(curr.next !== null){
//         curr = curr.next
//     }
//     curr.next = new ListNode(value)
//     return head;
// }

// insertLast(a, 50);
// PrintL(a)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// var reverseList = function (head) {
//      let prev = null;
//      let curr = head;
//      while(curr){
//         let nextNode = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = nextNode;
//      }    

//      return prev
// };

// let head = [1, 2, 3, 4, 5]
// reverseList(head);



// var minimumOperations = function(nums) {
//    let count = 0;
//    for(let i = 0; i<nums.length; i++){
//       let n = nums[i];
//       if(n%3 !== 0){
//         while(n%3 !== 0){
//             let a = n - 1;
//             let b = n + 1;
//             if(a%3 === 0){
//                 count++;
//                 n = a;
//             }
//             else {
//                 count++;
//                 n = b;
//             }
//       }
//    }

// }
//    return count;
// };

// let arr = [3, 6, 9];
// let v = minimumOperations(arr);
// console.log(v)

// var myAtoi = function (s) {
//    let num = "";
//    for(let i = 0; i<s.length; i++){
//     let a = Number(s[i]);
//      if(isNaN(a)) break;
//      num += a;
//    }
  
//    return Number(num);
// };
// let b = "1337c0d3";
// let x = myAtoi(b);
console.log(x);
