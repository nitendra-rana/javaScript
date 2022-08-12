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