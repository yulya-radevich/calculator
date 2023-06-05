const input = document.getElementById('form-control');
const numbers = document.querySelector('.btn.btn-white');
const operators = document.querySelector('.calc-operators');

console.log(numbers)
numbers.addEventListener('click', function (event){
    console.log(event.target)
})

input.addEventListener('input',function (event){
    console.log(event.target)
})