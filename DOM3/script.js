//<h1 id = "one" class = "two" name = "nm">Chinmay</h1>
let headOne = document.querySelector('h1')
console.log(headOne)

// based on user action changing the property of element
headOne.addEventListener('click',function(){
    headOne.style.color = "red"
})