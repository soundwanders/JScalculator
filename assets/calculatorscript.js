//calculatorscript.js

//---Create calculator display 
const calcDisplay = {
	displayValue: '0',
	firstOperand: null,
	waitForSecondOperand: 'false',
	operator: null,
}

//---Pressing number buttons will input them to calculator display
function inputDigit(digit) {
	const { displayValue, waitForSecondOperand } = calcDisplay;
  // Overwrite `displayValue` if the current value is '0' otherwise append
  if (waitForSecondOperand === true) {
    calcDisplay.displayValue = digit;
    calcDisplay.waitForSecondOperand = false;
  } else {
	calcDisplay.displayValue = displayValue === '0' ? digit: displayValue + digit;
  }
  console.log(calcDisplay);
};

//---Clicking decimal button will input decimal point to display
  // unless it already includes a decimal
  function decimal(point) {
    if (!calcDisplay.displayValue.includes(point)) {
        calcDisplay.displayValue += point;
      }
  };

//---Update calculator screen display with the value of const 'display'
function updateDisplay() {
	const display = document.querySelector('.calculatorDisplay');
	// update value of screen element with content of `displayValue`
	display.value = calcDisplay.displayValue;
}

//---Execute updateDisplay function
updateDisplay();

//---Check target on button press checks
	// adding if statement checks if user has clicked a button element
	// the 'target' event is whichever button is clicked by the user
  // if button element is clicked, button type and value will be console logged
  // if 'target' matches 'button' is false, return

const buttons = document.querySelector('.calculatorButtons');
buttons.addEventListener('click', (e) => {
  // 'const target = e.target' and 'const {target} = event' both do the same thing
  const target = e.target;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    decimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('allClear')) {
    allClear(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('clear')) {
    clear(target.value);
    updateDisplay();
    return;
  }
  
  inputDigit(target.value);
  updateDisplay();
});


//---Handling Math Operators

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calcDisplay
  // `parseFloat` converts string `displayValue` to a floating-point number
  const inputValue = parseFloat(displayValue);

  // check if `firstOperand` is null and if 'inputValue = NaN' is false
  // if the statement checks pass, then update the firstOperand property
  if (firstOperand === null && !isNaN(inputValue)) {
    calcDisplay.firstOperand = inputValue;

    // if operator property is assigned to an Operator, then solve
      // and change 'result' variable to the calculation's result
  } else if (operator) {
    const result = solve(firstOperand, inputValue, operator);
    calcDisplay.displayValue = String(result);
    calcDisplay.firstOperand = result;
  }
    // If waitForSecondOperand is true, the displayValue is overwritten with selected digit
    calcDisplay.waitForSecondOperand = true;
    calcDisplay.operator = nextOperator;
    console.log(calcDisplay);
};


//---Calculate user input and return the solution
function solve(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }
  return secondOperand;
};

//---Clear All by changing input's inner text to blank and resetting default value to 0
function allClear() {
  calcDisplay.displayValue = '0'
  calcDisplay.firstOperand= null;
  calcDisplay.waitForSecondOperand = false;
  calcDisplay.operator = null;
  console.log(calcDisplay);
  console.log("All Cleared");
}

function clear() {
};