// <p id = "one" class = "two" name = "nm">para</p>
// Css selector 

// byTagName

let para = document.querySelector('p')
console.log(para)
// byClass 

let byClassName = document.querySelector('.two')
console.log(byClassName)

// byId 
let byId = document.querySelector('#one')
console.log(byId)


// anyatrribute
let byName = document.querySelector('p[name = "nm"]')
console.log(byName)