let userInputEl = document.getElementById('userInput');
userInputEl.focus();

let buttonEls = document.querySelectorAll('button');
let expression="";

userInputEl.addEventListener('keyup', (event)=> {
    expression = event.target.value
    if (event.key === 'Enter') {
        userInputEl.blur();
        result = eval(expression);
        userInputEl.value = result;
        expression = result;
    }
});

for (let buttonEl of buttonEls) {
    buttonEl.addEventListener('click', event=> {
        userInputEl.focus();
        // console.log("Button is clicked");

        // buttonText = event.target.innerText;
        buttonText = event.target.textContent;
        // console.log(buttonText);
        if (buttonText == "x") buttonText = "*";

        if (buttonText == "=") {
            userInputEl.blur();
            // console.log(expression);
            result = eval(expression);
            userInputEl.value = result;
            expression = result;
        }
        else if (buttonText == "AC") {
            expression = '';
            userInputEl.value = '';
        }
        else if (buttonText == '+/-') {
            if (expression[0] == '-') {
                expression = expression.slice(1);
            }
            else {
                expression = '-' + expression;
            }
            userInputEl.value = expression;
        }
        else {
            expression += buttonText;
            userInputEl.value = expression;
        }
        
    })
}
