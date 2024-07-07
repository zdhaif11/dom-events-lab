const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let initialDisplay = "0"; // number to be displayed initially
let value1 = ""; //first value clicked is stored here
let value2 = ""; // second value clicked is stored here
let chosenOperator = null; // operator chosen or not yet
let result = ""; //result of operation done
let num1;
let num2;


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.classList.contains('number')){
            if (chosenOperator === null){
                value1 += event.target.innerText;
                display.innerHTML = value1;
            }
            else if (chosenOperator !== null && value1 !== null){ 
                value2 += event.target.innerText;
                display.innerHTML = `${value1} ${chosenOperator} ${value2}`;
            }
        }
        else if (event.target.classList.contains('operator') && event.target.innerHTML !== "C"){
            chosenOperator = event.target.innerText;
            display.innerHTML = `${value1} ${chosenOperator}`;
        }
        else if (event.target.className === 'button equals'){
            if (value1 !== "" && value2 !== "" && chosenOperator !== null && result === ""){
                num1 = parseFloat(value1);
                num2 = parseFloat(value2);
                switch (chosenOperator) {
                    case "+":
                        result = num1 + num2;
                        display.innerHTML = result;
                        break;
                    case "-":
                        result = num1 - num2;
                        display.innerHTML = result;
                        break;
                    case "*":
                        result = num1 * num2;
                        display.innerHTML = result;
                        break;
                    case "/":
                            result = num1 / num2;
                            display.innerHTML = result;
                            console.log(`buttons - clicked equal divide ${result}`);
                        break;
                    default:
                        break;
                }
            }
            else if (chosenOperator === null && value1 !== ""){
                display.innerHTML = value1;
                
            }
            else if (chosenOperator === null && value1 !== "" && value2 === ""){
                display.innerHTML = `${value1} ${chosenOperator}`;
                
            }
            else if (chosenOperator !== null && value1 === "" && value2 === ""){
                display.innerHTML = chosenOperator;
               
            }
        }
        else{
            initialDisplay = "0";
            display.innerText = initialDisplay;
            value1 = "";
            value2 = "";
            result = "";
            chosenOperator = null;
        }
    });
});