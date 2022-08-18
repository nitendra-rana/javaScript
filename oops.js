//==================================OOPS=========================================//
////// Way of programming code ////////
//==> 4 pillers of OOPs
//Abstraction: Ignoring or hiding details that doesn't matters.
//Encapsulation: Keepring some properties and methods private indise the class
//Inheritance: Making all properties and methods of parent class available to child class.
//Polymorphism: Child class can overrite a method it inherited from a parent class.

//==================================JAVASCRIPT OOPS=========================================//

//PROTOTYPES  : All object in js are linked to a prototype object

//                  PROTOTYPE
//                     |^|   (deligation)prototypal inheritance
//                     |^|
//                   OBJECTS


//The prototypes contains methods(behaviours) that are  accessible to all objects linked to that prototype.
//In simple: Behaviour is deligated to the linked prototype object.
// or Objects deligates their behaviour to prototype.

////////////How to create prototypes ////////////////

//1// CONSTRUCTOR FUCNTION : technique to create objects from functions
//2// ES6 Classes : Modern alternative to constructor function syntax, although behind working is same like constructors
//3// Object.create():easiest and Most stright fordward way of linking other object to prototype object

///////////CONSTRUCTOR FUCNTION////////
//only diff. b/w regular function and constructor function is, use of new keyword in constructor functions
//eg.              ...namimng convention: Start with capital letter

//
//----------------------------------------------------------------------
const Constfunct = function() {   //                                    |
     console.log(this);         //  Constfunct {}                       |
}                                //                                     |
new Constfunct();           //                                          |
// working behind the scene:                                            |
//step1: New {}(empty object) is created                                |
//step2: function is called & (this) is assigned to {}(empty object)    |
//step3: {}(empty object) is linked to prototype                        |
//step4: function automatically returns {}(empty object).               |
//-----------------------------------------------------------------------
//

//eg.2 

//
const Person = function(fname, lname){      // if we use Arrow function : TypeError:Person is not a constructor
     //instance properties
    this.fname = fname;
    this.lname = lname;
    //!AVOID: increase performace issue when because of so many this keyword when lot of instances will be made out of it.
    // |  this.fullName = function() {
    // |      console.log(`${this.fname} ${this.lname}`)
    // |  }
}


Person.prototype.fullName = function() { //// whatever we set using this method will be available to all instances of person
    console.log(`${this.fname} ${this.lname}`)
};
const nitendra = new Person("Nitendra", "Rana")
console.log(nitendra);
console.log( nitendra instanceof Person);   //true : it also create instance like class
nitendra.fullName() //this works because {nitendra} has access to properties and methods of Person function prototypes
// fullName() i not a owned properety of nitendra, only owned properties are those decleared directly
/////// Any object has access to the method and properties of its prototypes.

console.log(nitendra.__proto__);            //constructor: ƒ (fname, lname)


//REMINDER:::: REMINDER:::::REMINDER:::::
// Prototype is not a [Person Function]'s prototype It is a seprate object created by it.
//_ _ proto _ _  is a prototype of a object created by constructor function. 

//==>PROTOTYPE CHAIN: property of object, looking up for the properties/metods in prototype 

// if js can not find some properties in prototype it will keep looking up in a prototype chain untill reaches to null
//its similar to scope chain: but works with the properties and objects.
//object.properties -> prototype which contain built in methods like -->hasOwnProperty('name');

console.dir(nitendra.__proto__.__proto__);  //this is object.protype(top of the prototype chain)            //constructor: ƒ Object()
console.log(nitendra.__proto__.__proto__.__proto__);    //null

//
//Every function is an object so it has its own prototype;
//prototype exist for reusablity of code
//
let arrO = [1,2,3,4,5,6]
console.log(arrO.__proto__);
//
// we can add new method to the Array prototype just by using  Array.prototype  <=

///////////////////////ES6 CLASSES////////////////////

//In javascript classes are sprcial type of funtions : so we have class expression and class decleration
// const PersonCl = class { //body }      <=== this is a class expression.

//

class PersonCl{                           //<=== this is a class decleration
    constructor(fname, birthYear){       // cosntructor must be used exactly smae as here, automatically called whenever we create new instance
        this.fname = fname;
        this.birthYear = birthYear
    }
    // All the methods we write outside of a constrctor will be the the prototype of an object

   //calcAge Method will be automatically added to prototype peroperties 
   calcAge(){
        console.log(2022-this.birthYear)
    }
}
const nitendra1 = new PersonCl("Nitendra", 1997);
console.log(nitendra1);
nitendra1.calcAge();
const riya = new PersonCl("Riya", 2001);
console.log(riya);
riya.calcAge();

//Note : 1)classes are not hoisted, functions are. 
//       2) classes are also first class citizens 
//       3) classes are exexuted in strict mode
//

////////////gettters and setters////////////

// getter are setters acts as properties not like functions, so we can easily deal with them like other properties.
//Helpful in Data validation
//
const nums = {
    type: "Number1",
    arr: [1,2,3,4,5,6],

    get num(){
        return this.arr.slice(-1).pop();
    },
    set num(n){       // set require only one argument
        return this.arr.push(n);
    },
    //setting property that already exist..... (recommended using different name for the variable)
    set typeCheck(type){
        console.log(type);
        if(type.includes("1")) this._type = type;
        else console.log("number not included");
    },
    get typeCheck(){
        return this._type 
    },
    // static method  (other methods will be instance methods)
    /*
    static calc(){
    console.log("this is static for arr");
    */
}

console.log(nums.num);
//nums.num(10);                 //TypeError: nums.num is not a function
nums.num = 50;
console.log(nums.arr);
console.log(nums.__proto__);

nums.typeCheck = "num"  // number not included   dava validation 
nums.typeCheck = "num1" // num1

//

//////////////////Static Methods////////////////
//Methods which are connected to the constructor are called static methods 
//eg. 
//
let arr= [1,2,3,4,5,6];
console.log(Array.from(arr))  // ==> from is a static function
//

//but we cant't use it as >>>> below
//console.log([1,2,3,4,5,6].from(arr))  //TypeError:[1,2,3,4,5,6].from is not a function

// to create static method  either this method or the static keyword as above
//
arr.calc = function(){
    console.log("this is static for arr");
}
arr.calc();
//  


//third way of creating prototype inheritance or deligation is :
////////////////////   Object.create()    ////////////////////////////


const PersonProto = {
        calcAge(){
            console.log(" lets see how object.create works");
        }
}
let person1 = Object.create(PersonProto)
person1.name = "nitendra"       //to set other properties
console.log(person1);
console.log(person1.__proto__);         // { calcAge: [Function: calcAge] }
console.log(PersonProto.__proto__);



//we can set the prototype of objects manually to any object that we want.  