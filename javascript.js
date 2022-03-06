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
            break;
        case(button == 'Clear'):
            break;
        case(button == 'Delete'):
            break;
        case(button  == '='):
            break;
        case(button == '+'):
            break;
        case(button  == '-'):
            break;
        case(button  == 'x'):
            break;
        case(button  == '÷'):
            break;
    }
}