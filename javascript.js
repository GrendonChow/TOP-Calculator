//TODO: Optional feature HISTORY
//      Chaining operations
//      disable decimal point
//      rounding

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
        case( button == '.' || !isNaN(button)):
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
            operandTwo = parseFloat(displayNumber);
            displayInput(operate(operandOne, operator, operandTwo));
            displayNumber = '';
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
    displayInput('0');
    operandOne = parseFloat(displayNumber);
    displayNumber = '';
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
    displayNumber = '';
    operator = null;
    displayInput("0");
}

//Perform math oerpations based on parameters.
function operate(operandOne, operator, operandTwo)
{
    console.log(operandOne + " " + operandTwo)
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