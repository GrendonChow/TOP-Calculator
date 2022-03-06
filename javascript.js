let operandOne = '';
let operandTwo = '';
let operator = null;
let func = null;
let displayNumber = '';

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
        case(!isNaN(button)):
            displayNumber = "" + displayNumber + button;
            displayInput(displayNumber);
            break;
        case(button == 'Clear'):
            clearCalc();
            break;
        case(button == 'Delete'):
            displayNumber = displayNumber.slice(0, -1);
            displayInput(displayNumber);
            break;
        case(button  == '='):
            operandTwo = parseInt(displayNumber);
            displayInput(operate(operandOne, operator, operandTwo));
            displayNumber = '';
            break;
        case(button == '+'):
            operator = button;
            operation();
            break;
        case(button  == '-'):
            operator = button;
            operation();
            break;
        case(button  == 'x'):
            operator = button;
            operation();
            break;
        case(button  == '÷'):
            operator = button;
            operation();
            break;
    }
}

//Used to prepare for next operand.
function operation()
{
    displayInput('0');
    operandOne = parseInt(displayNumber);
    displayNumber = '';
}
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
    displayNumber = '';
    operator = null;
    displayInput("0");
}

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