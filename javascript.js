//TODO: Optional feature HISTORY
//      Chaining operations
//      disable decimal point
//      rounding

let operandOne = '';
let operandTwo = '';
let operator = null;
let func = null;
let inputNumber = '';
let result = 0;

const input = document.querySelector('.input');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => buttonPress(button.textContent));
})

//Determines which button was pressed
function buttonPress(button)
{
    switch(true)
    {
        case( button == '.' || !isNaN(button)):
            inputNumber = "" + inputNumber + button;
            displayInput(inputNumber);
            break;
        case(button == 'Clear'):
            clearCalc();
            break;
        case(button == 'Delete'):
            inputNumber = inputNumber.slice(0, -1);
            displayInput(inputNumber);
            break;
        case(button  == '='):
            operandTwo = parseFloat(inputNumber);
            result = operate(result,operator, operandTwo);
            displayInput(result);
            operandOne = result;
            operandTwo = '';
            inputNumber = '';
            break;
        case(button == '+'):
            operation(button);
            break;
        case(button  == '-'):
            operation(button);
            break;
        case(button  == 'x'):
            operation(button);
            break;
        case(button  == '÷'):
            operation(button);
            break;
    }
}

//Used to prepare for next operand.
function operation(button)
{
    operator = button;
    if(operandOne != '' && operandTwo != '')
    {
        operandOne = result;
        operandTwo = parseFloat(inputNumber);
        result = operate(result, operator, operandTwo);
        displayInput(result);
        operandOne = result;
        operandTwo = '';
        inputNumber = '';
    }

    if(operandOne == '')
    {
        operandOne = parseFloat(inputNumber);
        inputNumber = '';
    }
    else if(operandTwo == '' && inputNumber != '')
    {
        operandTwo = parseFloat(inputNumber);
        result = operate(operandOne, operator, operandTwo);
        displayInput(result);
        inputNumber = '';
    }
}

//Displays number to screen, shoes 0 if no inpt exists.
function displayInput(num)
{
    if(num == '')
    {
        input.textContent = '0';
    }
    else
    {
        input.textContent = num;
    }

}

function clearCalc()
{
    operandTwo = '';
    operandOne = '';
    inputNumber = '';
    operator = null;
    displayInput("0");
}

//Perform math oerpations based on parameters.
function operate(operandOne, operator, operandTwo)
{
    switch(operator)
    {
        case '+':
            result = operandOne + operandTwo;
            break;
        case '-':
            result = operandOne - operandTwo;
            break;
        case 'x':
            result = operandOne * operandTwo;
            break;
        case'÷':
            result = operandOne / operandTwo
            break;
    }
    return result;
}