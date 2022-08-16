'use strict'
//===================================================ARRAY METHODS================================================================//

//....................simple array methods..................//
//1) at Method     --> for both array and string
//
let ar = [10, 20, 30, 40, 50];
console.log(ar[0]);     // normally
console.log(ar.at(0));  // enhance readablity
 
console.log(arr[ar.length-1]);
console.log(ar.slice(-1));        //it will give array of length 1  [ 50 ].
console.log(ar.at(-1));
console.log(ar.at(-2));           // accepts -ve index and print in reverse.
//

//.......................forEach............................//
//It is a higher order function.... it takes a callback function as input... easier to deal with index
//callback function has 3 parameter (currentElement, index, array) ..... role of callback function is to execute the code inide it for the current itteration.
//difference b/w forEach and for of loop is : we can't break out of forEach.
//
let arrr = [10, 20, 30, 40, 50];
arrr.forEach( (currElem, index, array) => console.log(`${currElem} at ${index} of array ${array}`) );
//

//......................Map Method........................//
//It is also used to loop over arrays but it creates a brand new aray without damaging given array.
//it takes 3 arguments as input (currentElement, index, array)
//
let arr = [10, -20, 30, -40, 50];
//arr.map( (curr)=> console.log(curr*2));
const mapEg =  arr.map( (curr)=> curr*5);       // to add elements in new array return elements
arr.map(curr => console.log(`${curr>0?`Positive ${curr}`:`Negative ${Math.abs(curr)}`} `)) // backtick trick to combine string.
console.log(mapEg);
//
//......................Filter Method........................//
//it will create a new arry of those elements which gives true to the condition applied
//it takes 3 arguments as input (currentElement, index, array)
//
const filterEg = arr.filter( curr => curr > 0 ); 
console.log(filterEg);

//......................Reduce Method........................//
let initialValue =0;
const reduceEg = arr.reduce((acc, curr) => acc+curr, initialValue); // acc will store the value after  operaton and wee can also give initial value to accumulator
console.log(reduceEg)
//


//use all together:
// if dogAge <= 2: humanAge = (2* dogAge) else (16+ dogAge *4)
//test data array = [3,4,5,6,7,2,1,10];
//used chain of methods to caluclate human age ->map, to age >30 --> filter, to average -> reduce
//
let dogAge = [3,4,5,6,7,2,1,10];
let humAge = dogAge.map( curr => curr > 2 ? 16+curr*4: 2*curr).filter(curr => curr>30)
.reduce((acc, curr, index, arr) => acc+curr/arr.length,0);
console.log(humAge);


//.....................find Method........................//
//to return one element from array .... helpful if we already know something to find exact one
//      -----filter-------------vs----------find-------------
// 1) returns array satisfying  | 1)  return only first one
//    conditon                  |
// 2) all elements              | 2) first only


const onlyFirst = dogAge.find( curr => (curr > 5));
console.log(onlyFirst);
//.....................find index Method........................//
//to return one index
const onlyFirstIndex = dogAge.findIndex( curr => curr>5);
console.log(onlyFirstIndex);

//.....................includes Method........................//
// only return true/false depending on it exist or not 
//CHECKS EQUALITY 
const includesElem = dogAge.includes(7);
console.log(includesElem);

//.....................some Method........................//
// return true if anything validates the condition else false
//CHECKS CONDITION
let isValid = dogAge.some( curr => curr > 7);
console.log(isValid);
isValid = dogAge.some( curr => curr > 11);
console.log(isValid);

//.....................EVERY Method........................//
//return true if all satisfy the conition else false.
let isValidEvery = dogAge.every( curr => curr > 7);
console.log(isValidEvery);              // not all are greater than 7
isValidEvery = dogAge.every( curr => curr < 11);
console.log(isValidEvery);             //all are less than 11 --> true
//

//.....................flat  Method........................//
//to simplify nested arrays to as single array up to one level default else useflat(level)  
//
let nestArr = [[1,2,3], 4,[5,6,7,[8,9,10]]];
console.log(nestArr.flat());                    // [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10 ] ]
console.log(nestArr.flat(2));                   // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
//
//.....................flatMap Method........................//
//combination of flat and map method
//
let nestArr1 = [[1,2,3], 4,[5,6,7]];
const flatMapEg = nestArr1.flatMap( curr => curr );
console.log(flatMapEg)
//
//.......................sorting arrays .......................//
// sorts the  arry in alphabetic order ... on basis of string 
// Mutate origninal array ...
//
let unsortedArr = [1,-2,3,-4,5,-6,7,-8]

let sortedArr = unsortedArr.slice().sort();  // use slice method to keep the copy of an array here.  
console.log(sortedArr);                         // [-2, -4, -6, -8, 1,  3,  5,  7]
//to solve the above problem try  this 
//use compare callback function: to KEEP ORDER return >0(for ascending); to switch return >

// let sortedArrNum = unsortedArr.sort( (a,b) => {
//     if(a>b) return 1;
//     if(b>a) return -1;
// });
// easier version is ASCENDING 
let asArrNum = unsortedArr.slice().sort( (a,b) => a-b );
console.log(asArrNum);
console.log(unsortedArr);
// easier version is DESCENDING 
let decArrNum = unsortedArr.sort( (a,b) => b-a );
console.log(decArrNum);
//

//.......................ways to create arrays .......................//
//using new keyword 
//
let array1 = new Array(7);  // index as input 
let array2 = new Array([1,2,3]);  // elements as input

//......fill Method ........//   
//adds item to an array .. takes item and starting index as input
array1.fill(1,3);              //.fill(items, startIndex, EndIndex)
console.log(array1, array2);    //array1[ <3 empty items>, 1, 1, 1, 1 ], array2 [ [ 1, 2, 3 ] ]
//

//......from Method ........// 
// helpful from converting array from itterables...for eg. from queryselectorAll retuens array like ut not array 
//eg. generating 50 random output of dice roll.
let array3 = Array.from({length:50}, (_, i) => Math.floor(6*(Math.random()) +1));   //[ 1, 2, 3, 4, 5 ]
console.log(array3)