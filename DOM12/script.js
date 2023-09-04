//   <h1 id = "one" class = "two" name = "nm">Mayuri</h1> 

// byTagName 

let headOne = document.querySelector('h1')
console.log(headOne)
// byClass
let byClass = document.querySelector('.two')
console.log(byClass)
//byId 
let byId = document.querySelector('#one')
console.log(byId)
// by attribute
// tagName[attribute = "value"]
let byTagName = document.querySelector("h1[name = 'nm']")
console.log(byTagName)
//<p id = "three" class = "four" name = "five"> I am buying fruits</p>


// document.querySelector('#three')
// document.querySelector('.four')
// document.querySelector('p')
// document.querySelector('p[name = "nm"]')

headOne.addEventListener('click',function(){
    headOne.style.color = "red"
    headOne.textContent = "Poorva"
})