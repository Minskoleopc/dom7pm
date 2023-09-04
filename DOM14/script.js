let ulList  = document.querySelector('ul')
console.log(ulList)

let inputText = document.querySelector('input')
console.log(inputText)

let button = document.querySelector('button')
console.log(button)

button.addEventListener('click',function(){
    let liText = inputText.value
    let newLi  = document.createElement('li') // <li></li>
    newLi.textContent = liText // <li>Payapa</li>
    ulList.appendChild(newLi)
    inputText.value = ""
})