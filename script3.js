
// let info = ["chinmay","deshpande",23,45]
// console.log(info)

// let info2 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:45
// }
// console.log(info2)


//             0         1        2       3
let names = ["chinmay","sarika","poorva","komal"]

// retrive 
console.log(names[0])


// update 
names[0] = "tanmay"
console.log(names)

// add
names.push("hindi")
names.unshift("Er")
console.log(names)

// delete

names.pop()
names.shift()
names.splice(2,1)

//              0        1      2
let fruits = ["apple","mango","banana"] 
for(let i = 0 ; i < fruits.length ; i++){
    console.log(i)
    console.log(fruits[i])
}


//-------------------------------------------->

let vehicle = {
    color:"red",
    type:"SUV",
    model:"Q4"
}
//console.log(vehicle[0])
// retrive  (.notation and bracket notation)
console.log(vehicle.color)
console.log(vehicle['color'])

// update (.notation and bracket notation)
vehicle.color = "blue"
vehicle['color']= "purple"
console.log(vehicle)
// add  (.notation and bracket notation)
vehicle.start = "automation"
vehicle['city'] = "pune"
console.log(vehicle)
// delete (.notation and bracket notation)

delete vehicle.color
delete vehicle['type']
console.log(vehicle)


let animal = {
    legs:4,
    city:"ujjain",
    state:"MP",
    color:"red"
}

// retrive 
console.log(animal.city)
console.log(animal['city'])
// update 
animal.city = "tadoba"
animal['city'] = "pench"
console.log(animal)
// add 

animal.name = "cat"
animal['eye'] = 2
console.log(animal)

// delete
delete animal['eye']
delete animal.city






