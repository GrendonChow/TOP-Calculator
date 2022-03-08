let inputNumber = '';
let arr = [];
let historyNumber = '';

const input = document.querySelector('.input');
const history = document.querySelector('.history');

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
            if(button == '.')
            {
                document.getElementById("decimalBtn").disabled = true;
                console.log("TEST");
            }
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
                displayHistory(button)
                inputNumber = result;
                arr = [];
            }
            else{
                displayInput('Error');
                inputNumber = '';
            }
            document.getElementById("decimalBtn").disabled = false;
            break;
        case(button == '+'):
            displayHistory(button);
            operation(button);
            break;
        case(button  == '-'):
            displayHistory(button);
            operation(button);
            break;
        case(button  == 'x'):
            displayHistory(button);
            operation(button);
            break;
        case(button  == '÷'):
            displayHistory(button);
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
    document.getElementById("decimalBtn").disabled = false;
}

//Used to append and display history of previois math problems
function displayHistory(operator = '')
{
    if(operator == '=')
    {
        historyNumber = '' + historyNumber + ' ' + arr[1]+ ' '+ inputNumber + ' ' + operator;
    }
    else if(arr[0] == undefined)
    {
        historyNumber = inputNumber;
    }
    else
    {
        historyNumber = historyNumber + ' ' + operator + ' ' + inputNumber;
    }
    history.textContent = historyNumber;

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
    history.innerHTML = '&nbsp;'
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