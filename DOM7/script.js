
let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')

buttonOne.addEventListener('click',function(){
    headOne.textContent =   "Bye"
    headOne.style.color = "green"
    headOne.style.backgroundColor = "yellow"
})