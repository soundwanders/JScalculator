//calculatorscript.js

//---Create initial calculator display
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

//---Handling Math Operators

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calcDisplay;
  // `parseFloat` converts string `displayValue` to a floating-point number
  const inputValue = parseFloat(displayValue);

  if (operator && calcDisplay.waitForSecondOperand)  {
    calcDisplay.operator = nextOperator;
    console.log(calcDisplay);
    return;
  }

  // check if `firstOperand` is null and if 'inputValue = NaN' is false
  // if the statement checks pass, then update the firstOperand property
  if (firstOperand === null && !isNaN(inputValue)) {
    calcDisplay.firstOperand = inputValue;
    calcDisplay.operator = nextOperator;
    console.log(calcDisplay);
    return;

    // if operator property is assigned to an Operator, then solve
      // and change 'result' variable to the calculation's result
  } else if (operator) {
    const result = solve(firstOperand, inputValue, operator);
    calcDisplay.displayValue = calcDisplay.displayValue = `${parseFloat(result.toFixed(4))}`;
    calcDisplay.firstOperand = result;
  }

    // if waitForSecondOperand is true, displayValue is overwritten with selected digit
    calcDisplay.waitForSecondOperand = true;
    calcDisplay.operator = nextOperator;
    console.log(calcDisplay);
};

//--- Solve Using Math, Return Solution
function solve(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;

  } else if (operator === '*') {
    return firstOperand * secondOperand;

  } else if (operator === '/') {
    return firstOperand / secondOperand;

  } else if (operator === 'sqrt') {
    return Math.sqrt(firstOperand, secondOperand);

  } else if (operator === 'x2') {
      calcDisplay.waitForSecondOperand = false;
      return firstOperand * firstOperand;
    }

  return secondOperand;
};


//---Update calculator screen display with the value of const 'display'
function updateDisplay() {
	const display = document.querySelector('.calculatorDisplay');
	// update value of screen element with content of `displayValue`
	display.value = calcDisplay.displayValue;
}
updateDisplay();

//---Clicking decimal button will input decimal point to display,
  // unless calcDisplay already includes a decimal
function decimal(point) {
  if (calcDisplay.waitForSecondOperand === true) {
  calcDisplay.displayValue = "0."
  calcDisplay.waitForSecondOperand = false;
  return;
}
  if (!calcDisplay.displayValue.includes(point)) {
      calcDisplay.displayValue += point;
    }
};

//---Clear All by changing input's inner text to blank and resetting default value to 0
function allClear() {
  calcDisplay.displayValue = '0'
  calcDisplay.firstOperand= null;
  calcDisplay.waitForSecondOperand = false;
  calcDisplay.operator = null;
  console.log(calcDisplay);
  console.log("All Cleared");
};

//---Check target on button press checks
	// adding if statement..checks if user has clicked a button element
  // if 'target' matches 'button' is false, return
  // ** Event Listener function could also be Refactored to use a Switch statement, benefit being 
    // shorter form and only have to run updateDisplay() once at the end of the Switch function

    const buttons = document.querySelector('.calculatorButtons');
    buttons.addEventListener('click', (event) => {
      // 'const target = e.target' and 'const {target} = event' are the same thing
      const { target } = event;
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
        allClear();
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