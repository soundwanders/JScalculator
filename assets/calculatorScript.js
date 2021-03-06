// calculatorscript.js

// Create initial calculator display
const calcDisplay = {
  displayValue: '0',
  firstOperand: null,
  waitForSecondOperand: 'false',
  operator: null
};

// Pressing number buttons will input them to calculator display
function inputDigit (digit) {
  const { displayValue, waitForSecondOperand } = calcDisplay;

  // Overwrite `displayValue` if the current value is '0' otherwise append
  if (waitForSecondOperand === true) {
    calcDisplay.displayValue = digit;
    calcDisplay.waitForSecondOperand = false;
  } else {
	  calcDisplay.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
  console.log(calcDisplay);
};

// Handling Math Operators

function handleOperator (nextOperator) {
  const { firstOperand, displayValue, operator } = calcDisplay;
  // parseFloat converts string displayValue to a floating-point number
  const inputValue = parseFloat(displayValue);

  if (operator && calcDisplay.waitForSecondOperand) {
    calcDisplay.operator = nextOperator;
    console.log(calcDisplay);
    return;
  }

  // check if `firstOperand` is null and if 'inputValue = NaN' is false
  // if the statement checks pass, then update the firstOperand property
  if (firstOperand == null && !isNaN(inputValue)) {
    calcDisplay.firstOperand = inputValue;

    // if operator property is assigned to an Operator, then solve and show 'result'
  } else if (operator) {
    const result = solve(firstOperand, inputValue, operator);
    // set calculator display to show up to 5 decimal places on solve
    calcDisplay.displayValue = calcDisplay.displayValue = `${parseFloat(result.toFixed(5))}`;
    calcDisplay.firstOperand = result;
  }

  // if waitForSecondOperand is true, displayValue is overwritten with selected digit
  calcDisplay.waitForSecondOperand = true;
  calcDisplay.operator = nextOperator;
};

// give calculator the ability to solve using built in object 'Math'
function solve (firstOperand, secondOperand, operator) {
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
  } else if (operator === 'xy') {
    return Math.pow(firstOperand, secondOperand);
  }

  return secondOperand;
};

// Clicking decimal button will input decimal point to display,
// if the calculator display already includes a decimal, then exit function
function decimal (point) {
  if (calcDisplay.waitForSecondOperand === true) {
    calcDisplay.displayValue = '0.';
    calcDisplay.waitForSecondOperand = false;
    return;
  }
  if (!calcDisplay.displayValue.includes(point)) {
    calcDisplay.displayValue += point;
  }
};

// Clear All by changing input's inner text to blank and resetting default value to 0
function allClear () {
  calcDisplay.displayValue = '0';
  calcDisplay.firstOperand = null;
  calcDisplay.waitForSecondOperand = false;
  calcDisplay.operator = null;
  console.log('All Cleared');
};

// Update calculator screen display with the value of const 'display'
function updateDisplay () {
  const display = document.querySelector('.calculatorDisplay');
  // update value of screen element with content of `displayValue`
  display.value = calcDisplay.displayValue;
};

updateDisplay();

// ---ADD EVENT LISTENER TO BUTTONS

const buttons = document.querySelector('.calculatorButtons');
buttons.addEventListener('click', (event) => {
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

  inputDigit(target.value);
  updateDisplay();
});
