"use strict";

//(1)call by method => result will be method itself.
/*
let methodCall = {
    calSum: function(){
        console.log(this);
    }

}

methodCall.calSum();

*/

// (2) simple function call will give output undefined (in strict mode ) else window object.
/*
function simpleFun(){
    console.log(this);
}
simpleFun();
*/

//(3) arrow function will give out lexixal environment
//works difeerently for node and browsers.
/*
let fun= () => {
    console.log(this);
}
fun();
*/

// openion --> never ever use arrow functions as method {object};

// annoyomous function  as method


//solution 1 to solve problem of this keyword 

/*
const obj = {

    fun: function (){
        console.log(this);
        const self = this;
        const inFun = function () {
            console.log(self);
        }
        inFun();
    }

}
obj.fun();

*/

//method 2 to solve the problem of this function
/*
const obj = {

    fun: function (){
        console.log(this);
        const inFun = () => {
            console.log(this);
        }
        inFun();
    }

}
obj.fun();

*/
//argumentx keyword only exits in regular functions
/*
const numArgu = {
    fun: function(a, b) {
console.log(arguments);
}
}
numArgu.fun(1, 2);
*/



//--------------------------------------------------------------------------------------------------------------------------------

//DataStructues in Js

// 1) array destructuing, skipping some non-esseintial values;

/*
let arr = [1, 2, 3];

let [first, , third] = arr;

console.log(first, third);

*/

// switching variables
/*
let arr = [1, 2, 3];
let [first, second] = arr;
console.log(first, second)
[first, second] = [second, first]; //=> Cannot set properties of undefined (setting '2')
console.log(first, second)
*/

// destructuring objects  (remember: variable name should match exactly to the property names)
/*
const obj1 = {
    fName: "Nik",
    lName: "Rana",
    age: 25
}

let {fName, lName, age} = obj1;

console.log(`${fName} ${lName}, Your age is ${age}`)
*/
// variable with differt name than properties can be used as following:
//property: newVarName
/*
const obj1 = {
    fName: "Nik",
    lName: "Rana",
    age: 25
}

let {fName: Name1,  lName:Name2, age:Age1} = obj1;

console.log(`${Name1} ${Name2}, Your age is ${Age1}`)

*/
//setting up default values

/*
const obj1 = {
    fName: "Nik",
    lName: "Rana",
    age: 25
}

const {menu = [], fName: Name = "1"} = obj1; // if the property do not exist in obj1 will be initialized default
console.log(menu, Name);
*/

//Mutating Variables 
/*
let a = 10;
let b= 20;
const obj2 = {a: 1, b: 2};
// we can't do it like const {a, b } = obj2 ==> because a and b are already defined

({a, b } = obj2) // it will override the value of a and b.
console.log(a, b);

*/

//Nested objects destructuring 
/*
const obj2 = {a: 1, b: 2, c: { d:12, e:15}};
let { c: {d, e} } = obj2
console.log(d, e);
*/

// properties order need not to match while destructring an object.

// passing a object as argument and destructuring at parameters;
/*
const obj2 = {a: 1, b: 2, c: { d:12, e:15}};
function add({c:{d}, a,b }){
    console.log(a, b, d);
}
add(obj2);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

//  spread operator  (after es2018 -->also works with objects although they aren't itterable)

/*
let a = [1, 2, 3];
let b = [...a, 4, 5, 6];
console.log(b);  // [ 1, 2, 3, 4, 5, 6 ]
console.log(...b);  // 1 2 3 4 5 6
*/

//object 

/*
let obj1 = {
    a:1, b:2, c:3, d:4, e:5, f:6
};

let obj2 = {
    ...obj1,
    g:7, h:8, i:9, j:10,
}

console.log(obj2);    //{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }
console.log(...obj2); // Error: Found non-callable @@iterator

*/
//================================================================================================================
//REST(...left) = Spread(...right)
//================================================================================================================================================


// REST pattern => collects all the elements which remain unused during assignment. and it should be the last during assignment
// rest helps in making functions wich ca take any no of parameter.

/*
const [a,b, ...others] = [1,2,3,4,5,6,7,8,9]
console.log(a,b ); // 1 2 
console.log(others) //[ 3, 4, 5, 6, 7, 8, 9]
*/

// used when extra arguments are passed.

/*
function add(a, b, ...others){
    let sum1 =0;
    for(let num in  others){
        sum1+= Number(num);
    }
    let sum = a+ b+ sum1
    console.log(sum);
}
add(1,2,3,4,5,6,7);
*/
//========================  =========================================================================== ========    
// short circuting (short circuit evaluation)
//boolean operator can USE any data type, RETURN any data type and do S-C

////////// OR (||) short-circuting will return first apperaring truthy value else last falsy value*
///==> replacement of terniory operatior
/*
console.log(3|| 'name');                        //3
console.log(null|| 3);                          //3
console.log(undefined|| null);                  //null ---> it returns second value even it is falsy.
console.log(0|| "name");                        //name
console.log(0||null||undefined||'name'||3);     //name    -->this is called chain shortcircuting

problem: is when we have to take o as a value somewhere.
*/


//////// AND (&&) short circuting will return first apperaring falsy value else last truly value
//====> replacement of if statement 
/*
console.log(3 && 'name');                        //name
console.log(null && 3);                          //null
console.log(undefined && null);                  //undefined ---> it returns second value even it is truly.
console.log(0 && "name");                        //0
console.log('name'&& 3 && 4 && "this" && null); // null ==> first appearance of falsy values
*/  


//NULLSHING COLLASING operator  (??)  [NULLISH vaues are NULL and Undefined {do not include 0 and ''(empty string)}]
//==== works on the idea of nullish value not falsy value.

/*
console.log(null ??0); // will return 0
console.log(0 ??null); // will return 0 -- 0 is not a nullish value
*/

//logical assignement operator 
/*
let a =20;
let b =40;
let c = 0;
a ||= 10;  // or 
b &&= null;
c ??= null;
console.log(a, b, c);  // 20 null 0
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FOR of LOOP
/*
let arr = [1,2,3,4,5,6,7,8,9,10,11];

for(const num of arr) console.log(num);
// to find index of 
for(const num of arr.entries()) console.log(num); // return array with index and value
// so to print seprately destructure the array 
for(const [index, value] of arr.entries()) console.log(`${index} with ${value}`)
*/

//Enhanced object literals 
/*
let obj1 = {
    "key1":1,
    "key2":2, 
    "key3":3
}
let alph =  ['a','b','c']
let obj = {
    [alph[2]]:1,                            // key can be evaluated inside square brackets[];
    obj1,                                   // not necessery to give name to an object if copying from somewhere
    fun(){                                  // not needed key for the functions
        console.log("this is a function");
        console.log(this);                  // here this points to obj itself.
    }
}

console.log(obj);
*/