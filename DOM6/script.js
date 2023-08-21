
//  <h1 id = "one" class = "two" name = "nm">Chinmay Deshpande</h1>
// document.querySelector('h1')
// document.querySelector('.two')
// document.querySelector('#one')
// document.querySelector('h1[name= "nm"]')

// program 1
let headOne  = document.querySelector('h1')
console.log(headOne)

headOne.addEventListener('click',function(){
    headOne.style.color = "red"
})
