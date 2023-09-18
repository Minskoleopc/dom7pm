// object literal
// program 1
let  chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:34,
    rollNo:45,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(amol.firstName)
console.log(chinmay.firstName)

amol.display()
chinmay.display()


// function constructor 
function PersonB(fn,ln,age,rollNo){
    this.firstName = fn 
    this.lastName = ln 
    this.age = age
    this.rollNo = rollNo
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol2 = new PersonB("amol2","rao2",23,44)
amol2.display()
let chinmay2 = new PersonB("chinmay2","deshpande2",34,45)
chinmay2.display()
console.log(chinmay2)

// Es6 class

// let  chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:34,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

class PersonC {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age 
        this.rollNo = rollNo
        this.display = function(){
            console.log(this.firstName + this.lastName)
        }
    }
}

let amol3 = new PersonC("amol3","rao3",23,46)
amol3.display()
let amol4 = new PersonC("amol4","rao4",23,46)
amol4.display()

// Object.create()
let amol5 = Object.create({})
console.log(amol5)
amol5.firstName = "amol5"
amol5.lastName = "rao5"
amol5.age = 23
amol5.rollNo = 34
amol5.display = function(){
    console.log(this.firstName + this.lastName)
}
console.log(amol5)
amol5.display()

// python
// cypress
// react js
// javascript projects