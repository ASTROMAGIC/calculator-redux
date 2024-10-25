// steps for calculator workflow 

// 1. press one number - we save that number in our display 

// 2. press an operator - we save that operator in our display 

// 3. press the second number - save the second number 

// 4. press equal sign - make a calculation 


let firstNumber  
let secondNumber  
let step = 0;
let operation  
let result = 0;

// you need to keep steps of your steps in operations and your result

// one way we can collect our information for operations is to put our numbers into an array

const numArray = [];
const secondNumArray = [];

const display = document.getElementById('display');


function getNumber(num) {
    if(step === 0 || step === 1){
        numArray.push(num) // [1,2,5]
        step = 1
        firstNumber = Number(numArray.join('')) // merges array into one string
        display.value = firstNumber 
    } else if (step === 2){
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        display.value = secondNumber

    }

}


function getOperator(op) {
    step = 2
    operation = op
}

function clearDisplay() {
    console.log('clear display')
}

const calculateEquals = () =>{
    console.log('calculate here!')
}