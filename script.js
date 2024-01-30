function add(x,y) {
	return x+y
};

function subtract(x,y) {
	return x-y
};

function multiply(x,y) {
  return x*y
};

function divide(x,y) {
	return x/y
};


let operator = '' ;


function operate(operate,firstNum,secondNum){
    firstNum = parseFloat(firstNum)
    secondNum = parseFloat(secondNum)
    if (operate == 'add'){
        return add(firstNum,secondNum)
    }else if (operate == 'subtract'){
        return subtract(firstNum,secondNum)
    }else if (operate == 'multiple'){
        return multiply(firstNum,secondNum)
    }else if (operate == 'divide'){
        console.log('b')
        return divide(firstNum,secondNum)
    }

}

const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display')
let startNewNum = false
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (startNewNum == false){
            console.log('startNewNum = false')
            const inputNum = number.textContent;
            let tempDis = display.textContent;
            tempDis = tempDis === '0' ? '' : tempDis;
            tempDis = tempDis.concat(inputNum); // Concatenate the new number to the existing display value
            display.textContent = tempDis;
            secondNumber = display.textContent
            
        } else if (startNewNum == true){
            firstNumber = display.textContent
            console.log('startNewNum = true')
            const inputNum = number.textContent;
            tempDis = ''
            tempDis = tempDis.concat(inputNum); // Concatenate the new number to the existing display value
            display.textContent = tempDis;
            startNewNum = false
            secondNumber = display.textContent
        }
        
    });
});

const clear = document.querySelector('.clear')
clear.addEventListener('click',()=>{
    display.textContent = 0
    operation = ''
    startNewNum = false
    firstNumber = ''
    secondNumber = ''
})

const operators = document.querySelectorAll('.operator')
let operation = ''
let firstNumber = ''
let secondNumber = ''
let clickOper = false
operators.forEach(operator => {
    operator.addEventListener('click',()=>{
        startNewNum = true
         
        
        console.log('firstNumber: '+ firstNumber ) 
        console.log('secondNumber: '+ secondNumber ) 
        let action = operator.textContent;
        if (firstNumber != '' && secondNumber != ''){
            console.log('implied cal:' + operation)
            let result = operate(operation, firstNumber, secondNumber);
            console.log(firstNumber + ' ' + operation + ' ' + secondNumber+ ' = ' + result )
            display.textContent = result;
        }
        if (action == '/'){
            operation = 'divide'
        } else if (action == '*'){
            operation = 'multiple'
        } else if (action == '+'){
            operation = 'add'
        } else if (action == '-'){
            operation = 'subtract'
        } 
        clickOper = true
    })
})

//const calculate = document.querySelectorAll('.calculate')
//calculate.addEventListener('click',()=>{
//    display.textContent = operate(operation,firstNumber,display.textContent)
//
//})

const calculate = document.querySelector('.calculate'); // Use querySelector for a single element
calculate.addEventListener('click', () => {
    // Convert string to numbers for calculation
    let firstNum = parseFloat(firstNumber);
    let secondNum = parseFloat(display.textContent);

    // Check if the operation is valid
    if (operation) {
        let result = operate(operation, firstNum, secondNum);
        display.textContent = result;

        // Optionally, reset the operation and first number after calculation
        operation = '';
        firstNumber = 0;
    }
});
