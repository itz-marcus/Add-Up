//variables set to be use in the functions and eventlistener
let array = document.querySelector('input')
let calculate = document.querySelector('button')
let answer = document.querySelectorAll('label')[1]

function addNums(total,num) {
    return eval(`${total}+${num}`) //function to get the total 
}

calculate.addEventListener('click',()=>{
    let numbers = array.value.split(',')  //to turn into an array and remove commas
    answer.innerText ='Result: ' + numbers.reduce(addNums)
},)

