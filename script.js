// steps for calculator workflow 

// 1. press one number - we save that number in our display 

// 2. press an operator - we save that operator in our display 

// 3. press the second number - save the second number 

// 4. press equal sign - make a calculation 


const firstNumber  
const secondNumber  
let step = 0;
const operation  
let result = 0;

// you need to keep steps of your steps in operations and your result

// one way we can collect our information for operations is to put our numbers into an array

const display = document.getElementById('display');


function getNumber(num) {
    display.value = num;
}


function getOperator(op) {
    console.log(op)
}

function clearDisplay() {
    console.log('clear display')
}

const calculateEquals = () =>{
    console.log('calculate here!')
}