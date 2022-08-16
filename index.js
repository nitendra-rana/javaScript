"use strict";

//(1)call by method => result will be method itself.
//
let methodCall = {
    calSum: function(){
        console.log(this);
    }

}

methodCall.calSum();

//

// (2) simple function call will give output undefined (in strict mode ) else window object.
//
function simpleFun(){
    console.log(this);
}
simpleFun();
//

//(3) arrow function will give out lexical environment
//works difeerently for node and browsers.
//
let fun= () => {
    console.log(this);
}
fun();
//

// opinion --> never ever use arrow functions as method {object};

// annoyomous function  as method

//solution 1 to solve problem of this keyword

//
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

//

//method 2 to solve the problem of this function
//
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

//
//arguments keyword only exits in regular functions
//
const numArgu = {
    fun: function(a, b) {
console.log(arguments);
}
}
numArgu.fun(1, 2);
//

//+++=====================================================================  ============================================
//--------------------------------------------------------------------------------------------------------------------------------

//DataStructues in Js

// 1) array destructuing, skipping some non-essential values;

//
let arr = [1, 2, 3];

let [first, , third] = arr;

console.log(first, third);

//

// switching variables
//
let arr = [1, 2, 3];
let [first, second] = arr;
console.log(first, second)
[first, second] = [second, first]; //=> Cannot set properties of undefined (setting '2')
console.log(first, second)
//

// destructuring objects  (remember: variable name should match exactly to the property names)
//
const obj1 = {
    fName: "Nik",
    lName: "Rana",
    age: 25
}

let {fName, lName, age} = obj1;

console.log(`${fName} ${lName}, Your age is ${age}`)
//
// variable with differnt name than properties can be used as following:
//property: newVarName
//
const obj1 = {
    fName: "Nik",
    lName: "Rana",
    age: 25
}

let {fName: Name1,  lName:Name2, age:Age1} = obj1;

console.log(`${Name1} ${Name2}, Your age is ${Age1}`)

//
//setting up default values

//
const obj1 = {
    fName: "Nik",
    lName: "Rana",
    age: 25
}

const {menu = [], fName: Name = "1"} = obj1; // if the property do not exist in obj1 will be initialized default
console.log(menu, Name);
//

//Mutating Variables
//
let a = 10;
let b= 20;
const obj2 = {a: 1, b: 2};
// we can't do it like const {a, b } = obj2 ==> because a and b are already defined

({a, b } = obj2) // it will override the value of a and b.
console.log(a, b);

//

//Nested objects destructuring
//
const obj2 = {a: 1, b: 2, c: { d:12, e:15}};
let { c: {d, e} } = obj2
console.log(d, e);
//

// properties order need not to match while destructring an object.

// passing a object as argument and destructuring at parameters;
//
const obj2 = {a: 1, b: 2, c: { d:12, e:15}};
function add({c:{d}, a,b }){
    console.log(a, b, d);
}
add(obj2);
//

//////////////////////////////////////////////////////////////////////////////////////////////////////

//  spread operator  (after es2018 -->also works with objects although they aren't itterable)

//
let a = [1, 2, 3];
let b = [...a, 4, 5, 6];
console.log(b);  // [ 1, 2, 3, 4, 5, 6 ]
console.log(...b);  // 1 2 3 4 5 6
//

//object

//
let obj1 = {
    a:1, b:2, c:3, d:4, e:5, f:6
};

let obj2 = {
    ...obj1,
    g:7, h:8, i:9, j:10,
}

console.log(obj2);    //{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }
console.log(...obj2); // Error: Found non-callable @@iterator

//
//================================================================================================================
//REST(...left) = Spread(...right)
//================================================================================================================================================

// REST pattern => collects all the elements which remain unused during assignment. and it should be the last during assignment
// rest helps in making functions wich ca take any no of parameter.

//
const [a,b, ...others] = [1,2,3,4,5,6,7,8,9]
console.log(a,b ); // 1 2 
console.log(others) //[ 3, 4, 5, 6, 7, 8, 9]
//

// used when extra arguments are passed.

//
function add(a, b, ...others){
    let sum1 =0;
    for(let num in  others){
        sum1+= Number(num);
    }
    let sum = a+ b+ sum1
    console.log(sum);
}
add(1,2,3,4,5,6,7);
//
//========================  =========================================================================== ========
// short circuting (short circuit evaluation)
//boolean operator can USE any data type, RETURN any data type and do S-C

////////// OR (||) short-circuting will return first apperaring truthy value else last falsy value*
///==> replacement of terniory operatior
//
console.log(3|| 'name');                        //3
console.log(null|| 3);                          //3
console.log(undefined|| null);                  //null ---> it returns second value even it is falsy.
console.log(0|| "name");                        //name
console.log(0||null||undefined||'name'||3);     //name    -->this is called chain shortcircuting

problem: is when we have to take o as a value somewhere.
//

//////// AND (&&) short circuting will return first apperaring falsy value else last truly value
//====> replacement of if statement
//
console.log(3 && 'name');                        //name
console.log(null && 3);                          //null
console.log(undefined && null);                  //undefined ---> it returns second value even it is truly.
console.log(0 && "name");                        //0
console.log('name'&& 3 && 4 && "this" && null); // null ==> first appearance of falsy values
//

//NULLSHING COLLASING operator  (??)  [NULLISH vaues are NULL and Undefined {do not include 0 and ''(empty string)}]
//==== works on the idea of nullish value not falsy value.

//
console.log(null ??0); // will return 0
console.log(0 ??null); // will return 0 -- 0 is not a nullish value
//

//logical assignement operator
//
let a =20;
let b =40;
let c = 0;
a ||= 10;  // or 
b &&= null;
c ??= null;
console.log(a, b, c);  // 20 null 0
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FOR of LOOP
//
let arr = [1,2,3,4,5,6,7,8,9,10,11];

for(const num of arr) console.log(num);
// to find index of 
for(const num of arr.entries()) console.log(num); // return array with index and value
// so to print seprately destructure the array 
for(const [index, value] of arr.entries()) console.log(`${index} with ${value}`)
//

//Enhanced object literals
//
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
//

//////////////////////////////////////////////////////////////////////////////////////////////

//Option Chaining
//
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openOn = {
  0: "10:00 AM",
  2: "10:00 AM",
  3: "10:00 AM",
  5: "10:00 AM",
  6: "10:00 AM",
  Fun(a, b) {
    console.log(a, b);
    return null; //even it exist but returns null --> will print  nothing
  },
};
for (const [index, day] of days.entries()) {
  //console.log(openOn?.[index] ?? "closed"); // if open exist then we will see that day is defined or not
}
openOn.Fun?.(2, 3) ?? console.log("does not exist"); /// == if not null/undefined => it ill print some value

//
// optional chaining for arrays 
//
let arr = [1,2, 3, 0, {
    name: "hello"
}];

console.log(arr[4]?.name ?? "item do not exist"); // for arr[3] it will print the message ""
//

// without optional chaining same code will be 
//
let arr = [1,2, 3, 0, {
    name: "hello"
}];
if(arr.length>=4){
    console.log(arr[4].name)
}else{
    console.log("item do not exist")
}
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LOOPING OVER OBJECTS 
//
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openOn = {
  [days[0]]: "10:00 AM",
  [days[2]]: "11:00 AM",
  [days[3]]: "12:00 AM",
  [days[5]]: "09:00 AM",
  [days[6]]: "08:00 AM",
}
let str = `we are open on `
 for (const day of Object.keys(openOn)){       /////=>  Object.keys(openOn)
    str+= `${day},`
 }
 for (const time of Object.values(openOn)){       /////=>  Object.values(openOn)
    str+= `${time},`
 }
 console.log(str);

 const entries = Object.entries(openOn);
 console.log(entries);
 for(const ent in entries){
    console.log(ent);   // 0,1,2,3,4  index like data for objects
 }
 //


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////    //////////////////////////////////////  ////    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //SETS
 //=> to get unique values out we use,
 //
const arr = [1,2,3,3,3,6]
 const set1 = new Set("string");
 console.log(set1);
 const set2 = [...new Set(arr)]; //==> array to set and back to array;  // set2 is not a set
 console.log(set2, set1.size, set1.has(1),  );
//  set1.clear()
//  set1.delete(1)
//  set1.add(5)
for(const elem of set1) console.log(elem); // set sets are itterable 
//

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      MAP
//
const map1 = new Map();

                          // set will add new value and return the map that is chainaing is possible
map1.set("fname", "Nik").set('lname', 'Rana').set(true, "online").set(10,'will leave');
console.log(map1.get(10)); // get will return the value of the key  "data type of key matters"

console.log(
map1.delete(true),
map1.has(10),
map1.size
);

//arrays as key 

let arr = [1,2]             //It will not work if we tries this
map1.set(arr, "this");      //map1.set([1,2], "this")
console.log(map1.get(arr)); //map1.get([1,2])    ==> bcqz they are not same array in heap

//map itteration 
for(const [key, value] of map1) console.log(key, value);

// 

//?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        //STRINGS//
//                        
let str = "stringify...";
console.log(
    str[3], 
    str.length, 
    str.indexOf("r"), 
    str.lastIndexOf("i"), 
    str.slice(3),
    str.slice(-2),
    str.slice(-2, -4),
    str.toUpperCase(),
    str.toLowerCase(),
    str.replace('i','j'),
    str.split('i'),
    ["this ", str].join('+'),
    str.padStart(15,'+'),
    str.padEnd(15, '+'),
    str.repeat(3),
    );
//


//================================FUNCTIONS IN DETAIL============================================//

//=>1 DEFAULT PARAMETERS

//
function defPam(a, b=7, c=10) /// here b and c are default parameters, c can be used a c= b*2 .. but b = c*2 is not possible
{   
    console.log(a*b+c);
}

defPam(1);          //1*7+10 =17
defPam(1,2);        //1*2+10 =12
defPam(1,2,3);      //1*2+3 = 5
//

//=> PARAMETERS { VALUE VS REFRENCE} ==> js dosen't use pass by refrence

//
const obj1 = {
    a:1, b: 2, c:3
}
let k= 10;
function passingParms(value, ref){       //obj1 refrence is here and value is copied 
    value =100
    ref.a =20;
    console.log(value, ref);            //100 { a: 20, b: 2, c: 3 } ==> a updated here
}
passingParms(k,obj1);
console.log(k, obj1);                   //10 { a: 20, b: 2, c: 3 } ===> a is updated here also
//

//==> FIRST CLASS FUNCTIONS + HIGHER OREDER fUNCTIONS (first class citizens)

//FIRST CLASS FUNCTIONS  |==> functions are treated as values, passed as objects, returned back by functions
//(first class is a feature. of js, other programming language may have or not i.e, the function can be stored as values)
//
const value = function(){
    console.log("First class function");
}
//HIGHER ORDER FUNCTIONS TAKES FUNCTION AS ARGUMENTS AND CAN RETURN FUNCTIONS.

function fun1(passFunc){            // HIGHER ORER FUNCTION PASSING FIRST CLASS FUNCTION AS PARAMETER
    return function(passFunc){      //HIGHER ORER FUNCTION RETURNING FIRST CLASS FUNCTION.
        return passFunc; 
    }
   
}

fun1(value());
//

//////Q.)reverse the string////////////
//
let str = "hello this is working";
const str2 =str.split(' ');
console.log(str2);
let str3 ='';
for(let i = str2.length-1; i>=0; i--){
    str3+= str2[i]+ " " ;
}
console.log(str3)

//

//CALLBACK FUNCTIONS => functions we do not call by ourselves, instead we tell another function to call them later
// callbacks are used in JavaScript all the time
//
const reverse = function(str){
    let str1 = str.split(" ");
    str1 = str1.reverse();
    return str1.join(" ");
}
function transform (str, func){  // here func(reverse) is a callback function and transform is a H.O.F.
    console.log(func.name)
    return func(str);
}

const print = transform("javaScript is fun to learn", reverse);
console.log(print);
//

//=> FUNCTION RETURNING FUNCTIONS
//
const greeting = function(str){
    return str;
}
const returnFunc = function(greet){
    return(
        function(name){
        console.log((` ${greet} ${name}`))
    });
}
// 
//now using arrow function
//
const greeting = str => str;

const returnFunc = greet => name => console.log((` ${greet} ${name}`))

returnFunc("hello");              //Nothing will be in output
returnFunc("hello")("reu");     //hello reu                             
const greetfunc =  returnFunc("hello");
greetfunc("Nik");               // here we will get output as -> hello Nik   ====This works because of closures===
//

//=> CALL METHOD     : works if we have to open another branch and use same team for functioning, Team must know whom they are working for
//
let obj1 = {
    func: "first",
    storeNum: [],
    addElem(name, luckyNo){
          this.storeNum.push({
            func:`in function ${this.func}`,
            name:`${name} in ${this.func}`,
            LuckyN0:`${luckyNo} in ${this.func}`, 
        });
    }
}

let obj2 ={
    func:"second",
    storeNum:[]
}
let method = obj1.addElem;

//method("nitendra", 7); --> this will not work (Cannot read properties of undefined (reading 'storeNum'))
//that is why we use call method

method.call(obj2,"nitendra", 7);
console.log(obj2.storeNum);
method.call(obj1,"reu", 9);
console.log(obj1.storeNum);

/// formate/structure of all the object must be same where we are applying call method

//=> APPLY METHOD  ==> takes this and array as input
let arr1 = ["nik", 17];
method.apply(obj1, arr1);
console.log(obj1);
// but it is not recommeded to use apply method instead we can use call 
method.call(obj1, ...arr1);
console.log(obj1);

//===========Bind Method+++++++++ set the method for new object

let obj2Method = obj1.addElem.bind(obj2);   // we can also use  { method.bind(obj2) }

obj2Method("Rana", 25);                     // enhance redablity.

console.log(obj2.storeNum);

// bind helps us building partial application, for eg

let Name = obj1.addElem.bind(obj2, "Nitendra Rana"); // partial appplication binding
Name("23"); 
Name("48");                            // we only need to give remaining input in this function name is fixed 
console.log(obj2.storeNum);

//

//=> IMMEDIATLY INVOKED FUNCTIONS  : should be wrapped inside (round breackets): js treat it as an expression
// to call it simply use () at the end
//
(function(){
    let str ="immediatly invoked functions"
    
    console.log("this is a self invoking function");
})();
(()  => {
    let str ="immediatly invoked functions"
    
    console.log("this is a self invoking arrow function");
})();
//

//==============================================CLOSURE====================================================================
//
definations:
CLOSURE:  (1)a closure is the closed over variable environment of the execution 
          context in which a function was created even after that execution 
          context is gone.

          (2)a closure gives a function access to all the variables of its parent 
          function. So the function in which it is defined even after that parent 
          function has returned. So the function keeps a reference to its outer 
          scope even after that outer scope is gone.

          (3) a closure makes sure that a function does never lose connection to the
            variables that existed at the function's birthplace. It remembers the 
            variables, even after the birthplace is gone.
//

//eg.
//
const func1 = function(){                       //Global execution is created 
    let count = 0;
    return function(){
        count++
        console.log(`now count is ${count}`)
    }
}
const checkClosure = func1();                  // here func1 is executed and removed from execution context.

checkClosure();                                //we don't have environment for variable but it will take from the closure
checkClosure();                                // same and updated 
checkClosure();                                // same and updated 

console.dir(checkClosure);

//
//other examples of closures 
//
let f;                              //decleration of variable f

const ClosureEg1= function(){
    let a =10;
    f = function(){                 //assignment of var f as function 
        console.log(`In the environment of ClosureEg1 function value is ${a*2}`);
    }
}
const ClosureEg2= function(){
    let a =50;
    f = function(){                 //assignment of var f as function 
        console.log(`In the environment of ClosureEg2 function value is ${a*2}`);
    }
    setTimeout(function(){
        console.log(`Time will tell your story ${a}`)
    }, 3000);
}
ClosureEg1();   //without calling this function a will never we created so we need to call it first to assign value of f()
f();            // f() will always remember its environmet where it has assigned value;

ClosureEg2();   //without calling this function a will never we created so we need to call it first to assign value of f()
f();

//



