



// 104-masala
// function sumObjectValues(obj) {
//     return Object.values(obj).reduce((acc, key) => {
//
//         if(typeof key === 'object'){
//             return acc  + sumObjectValues(key)
//         }
//         if(typeof key === 'number'){
//             return acc + key;
//         }
//         return acc
//     },0);
// }
//
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };
// // console.log(sumObjectValues(obj));
// // Output: 6



// 105-masala

// function rotateArrayLeft(arr, n) {
// n = n % arr.length;
// return arr.slice(n).concat(arr.slice(0,n));
// }
//
// // Test case
// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
// // Output: [3, 4, 5, 1, 2]



// 106-masala
function removeDigits(str) {
  let arise = str.split('').filter(item => isNaN(item)).join("");
  return arise
}

// Test case
// console.log(removeDigits("abc123def456 w" ));
// Output: "abcdef"



// 107-masala
// function oddIndexedElements(arr) {
//   return arr.filter((item,index) =>{
//       return index % 2 === 1
//     })
// }
//
// // Test case
// console.log(oddIndexedElements([1, 2, 3, 4, 5, 6]));
// // Output: [2, 4, 6]



// 108-masala
// function doubleValues(obj) {
//  for(let key in obj){
//      if(typeof obj[key] === 'number'){
//          obj[key] *= 2;
//      }else if(typeof obj[key] === 'object'){
//         doubleValues(obj[key]);
//      }
//  }
//  return obj;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };
// console.log(doubleValues(obj));
// // Output: { a: 2, b: { c: 4, d: { e: 6 } } }



// 109-masala
// function objectToArray(obj) {
//    return Object.keys(obj).reduce((acc,key) =>{
//        acc[key] = obj[key]
//        return acc;
//    },{})
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(objectToArray(obj));
// // Output: [["a", 1], ["b", 2], ["c", 3]]










// 110-masala
// function sortKeysByValue(obj) {
//     return Object.keys(obj).sort((a,b) => obj[a] - obj[b]).reduce((acc, key) => {
//         acc[key] = obj[key];
//         return acc;
//     },{})
// }
//
// // Test case
// const obj = {
//     a: 3,
//     b: 1,
//     c: 2
// };
// console.log(sortKeysByValue(obj));
// // Output: { b: 1, c: 2, a: 3 }