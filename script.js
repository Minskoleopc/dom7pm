// selecting the element 
// based on user action , change the element
// <p id = "one" class = "two" name = "three">para</p> 

// Css selector

// tagName

let tagNameP = document.querySelector('p')
console.log(tagNameP)

// className 
let byClassName = document.querySelector('.two')
console.log(byClassName)

// id
let byID = document.querySelector('#one')
console.log(byID)

// any attribute 
// tagName[attribut= "value"]

let byAttribute = document.querySelector('p[name="three"]')
console.log(byAttribute)


//<h3 class = "four" id = "five" name = "six">Chinmay</h3>
let tgName = document.querySelector("h3")
console.log(tgName)

let byId = document.querySelector('#five')
console.log(byId)

let byClassNameV = document.querySelector('.four')
console.log(byClassNameV)

let byIdd = document.querySelector('h3[id = "five"]')
console.log(byIdd)





