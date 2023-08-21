let h1 = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('button')

buttonOne.addEventListener('click',function(){
    let colorText = inputText.value
    h1.style.color = colorText
    inputText.value = ""
    
})