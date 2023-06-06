const input = document.getElementById('form-control');
const numbers = document.querySelector('.calc-number');
const operators = document.querySelector('.calc-operators');

numbers.addEventListener('click', function (event){
    console.dir(event.target.innerText)
})

input.addEventListener('input',function (event){
    console.log(event.target)
})