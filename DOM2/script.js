
// <h1 id = "one" class = "two" name="three">Chinmay</h1>

// byTagName
let tagName = document.querySelector('h1')
console.log(tagName)
// byClassName 
let byTwo = document.querySelector('.two')
console.log(byTwo)
// byID
let byId = document.querySelector('#one')
console.log(byId)
// attribute
let byAttribute = document.querySelector('h1[name="three"]')
console.log(byAttribute)

//<h1 id = "one" class = "two" name="three">Chinmay</h1>
// console.log(byAttribute.textContent)
// byAttribute.textContent = "poorva"
// byAttribute.style.color = "red"

byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "poorva"
})










// let a = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// console.log(a.firstName)
// a.firstName = "tanmay"
// console.log(a)
// let parents = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     parent:{
//         mother:"kancham deshpande",
//         father:"shirish deshpande"
//     }

// }

// console.log(parents.parent.mother)
// parents.parent.mother = "kanchan s deshpande"
