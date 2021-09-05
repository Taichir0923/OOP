// OOP - Object oriented Programming

// class Person {
//     constructor(ner, mergejil){
//         this.ner = ner;
//         this.mergejil = mergejil
//     }

//     getName(){
//         return this.ner
//     }

//     static sayHello(){
//         console.log("Hi")
//     }
// }

// class Child extends Person {
//     constructor(ner, mergejil){
//         super(ner, mergejil)
//     }
// }

// prototypical => 
// methodical / getter, setter, static / 

// let person = new Person("James", "Engineer");
// let person1 = new Person("John", "Writter")

// Өгөгдөл загварчлах

// let obj = {
//     ner: "Narada",
//     nas: 324,
//     mergejil: "jkl;",
//     sayHello(){
//         return this.arg()
//     },
//     arg(){
//         return 5
//     }
// }

// Array.prototype.getFirstElement = function(){
//     return this[0]
// }

// Array.prototype.myForEach = function(callback){
//     return 
// }

// let arr = [45, 43, 32, 57]

// arr.forEach(function(el){
//     console.log(el)
// })

// Blockchain

// de-centralized network

// centralized - Organization

// const Person = function(ner, mergejil){
//     this.ner = ner;
//     this.mergejil = mergejil
// }

// Person.prototype.getName = function(){
//     return this.ner;
// }

// Person.prototype.setName = function(argument){
//     this.ner = argument;
//     return this.ner
// }

// let hun = new Person("Bat", "Jolooch")

// call, apply, bind

// forEach => polyfill

// Array.prototype.myForEach = function(callback){
//     for(let i = 0; i < this.length; i++){
//         callback(this[i], i)
//     }
// }

// Array.prototype.myFilter = function(callback){
//     let result = [];

//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i])){ // true
//             result.push(this[i])
//         }
//     }

//     return result;
// }

// let arr1 = [
//     {
//         ner: "fdhjkl",
//         nas: 10
//     },
//     {
//         ner: "fdhjkl",
//         nas: 15
//     },
//     {
//         ner: "fdhjkl",
//         nas: 30
//     },
//     {
//         ner: "fdhjkl",
//         nas: 18
//     }
// ]

// let fil = arr1.myFilter(function(el){
//     return el.nas <= 18
// })


// let arr = ["fdsfsd", 234, true];
// console.log("Default")
// arr.forEach(function(el, index){
//     console.log(`${index}: ${el}`)
// })
// console.log("Custom")
// arr.myForEach(function(el, index){
//     console.log(`${index}: ${el}`)
// })
// map
let nums = [43,4325,23,4,534,634,52,3, 100];

Array.prototype.myMap = function(callback){
    let result = [];

    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i]))
    }

    return result
}

let mapped = nums.myMap(function(el){
    return el*2
})


// bubble sort