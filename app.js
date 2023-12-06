function add(a,b){
    return a+b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return b === 0 ? 'indivisible' : a / b;
};

function operate(operator, number1, number2){
         
}

const clearBtn = document.querySelector(".clear-btn");
const egual = document.querySelector(".egualBtn");
let display = document.querySelector(".display");
const numberkeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll(".operator");
const deleteBtn = document.querySelector(".del-btn");

let displayValue = '';
let number1;
let number2;
let operator;
let operation;
let result = 0;
let isOperatorPressed = false;

//Events;
numberkeys.forEach(function(numberkey){
    numberkey.addEventListener('click', function(e){
        displayValue += e.target.textContent
        display.innerHTML = displayValue;
        if(isOperatorPressed) {
          number2 = e.target.textContent;
        }        
    })
})

operatorKeys.forEach(function(operatorKey){
  operatorKey.addEventListener('click', function(e){
     number1 = displayValue;
     displayValue += e.target.innerHTML;
     operator = e.target.innerHTML;
     if (operator === '+') {
        display.innerHTML = operator; 
     } else if (operator === '-') {
      display.innerHTML = operator;
     } else if (operator === '*') {
      display.innerHTML = operator;
     } else if (operator === '/') {
      display.innerHTML = operator;
     }
     //display.innerHTML += operator;
     isOperatorPressed = true;
     if (result) {
      number1 = result;
      }          
  })
})
egual.addEventListener('click', function(e){
  number1 = Number(number1)
  number2 = Number(number2)
  if (operator === '+') {
    result = number1 + number2; 
    display.innerHTML = result;
  }
  else if (operator === '-') {
     result = number1 - number2;
    display.innerHTML = result;
  } 
  else if (operator === '*') {
    result = number1 * number2;
    display.innerHTML = result;
  }
  else if (operator === '/') {
    result = number1 / number2;
    display.innerHTML = result;
  }
})

clearBtn.addEventListener('click', function(e){
    displayValue = '';
    number1 = 0;
    number2 = 0;
    result = '';
    display.innerHTML = result;
   })
   
   deleteBtn.addEventListener('click', function(e){
     displayValue = displayValue.slice(0, -1)
     if(displayValue === '') {
       displayValue = ''
     }
    display.innerHTML = displayValue;
   })