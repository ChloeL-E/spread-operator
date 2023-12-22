/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1,2,3];
let arr2 = arr1;

console.log("First Array:", arr1); // First array: [1, 2, 3]

arr2.push(4);
console.log("Second Array:", arr2); // Second Array: [1,2,3,4]
console.log("First Array:", arr1); // First array: [1, 2, 3, 4]
//the .push to arr2 has also been pushed into arr1 as they are both linked

// Copying an array

let arr3 = [4,5,6];
let arr4 = [...arr3];

arr4.push(7,8,9);
console.log("Third Array:", arr3);
console.log("Fourth Array:", arr4);
// using the ...(spread), arr3 is spread into arr4.
//so even once we change arr4, arr3 will be left unchanged
//we effectively made a new copy of arr3 called arr4

// Copying an object

let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d:4};

let obj3 = {...obj1, b:5}; //this overides b:2 to b:5;

console.log("First Object: ", obj1); 
// First Object: {a:1, b:2, c:3}
console.log("Second Object: ", obj2); 
// Second Object: {a:1, b:2, c:3, d:4}
console.log("Third Object: ", obj3); 
// Third Object: {a:1, b:5, c:3,
//we've made a new copy of obj1 called obj2
//we can use (spread) ... to copy then add 
// a new object property:value, obj1 remains unchanged


// Copying only part of an array/object

let arr5 = [...arr1, {...obj1}, ...arr2 , x, y, z];
console.log(arr5); 
// logs [1, 2, 3, {a:1, b: 2, c: 3}, 4, 5, 6, x, y, z]