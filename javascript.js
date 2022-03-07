let inputNumber = '';
let arr = [];

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
            if(arr.length == 2)
            {
                result = operate(arr[0], arr[1], inputNumber);
                displayInput(result);
                arr = [];
                inputNumber = result;
            }
            else{
                displayInput('Error');
                inputNumber = '';
            }

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

//Used to display results prepare for next operand.
function operation(operator)
{
    if(arr.length == 2)
    {
        result = operate(arr[0], arr[1], inputNumber);
        arr[0] = result;
        arr[1] = operator;
        displayInput(result);
        inputNumber = '';
    }
    else
    {
        arr.push(inputNumber);
        arr.push(operator);
        inputNumber = '';
    }
}

//Displays number to screen, shows 0 if no input exists.
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

//Reset calculator to default state
function clearCalc()
{
    arr = [];
    inputNumber = '';
    displayInput("0");
}

//Perform math operations based on parameters.
function operate(operandOne, operator, operandTwo)
{
    let result = 0;
    operandOne = parseFloat(operandOne);
    operandTwo = parseFloat(operandTwo);
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