//calculatorscript.js
// Create calculator display 
const calcDisplay = {
	displayValue: '0',
	firstOperand: null,
	waitingForSecondOperand: 'false',
	operator: null,
}

// pressing number buttons will input them to calculator display
function inputDigit(digit) {
	const { displayValue } = calcDisplay;
	// Overwrite `displayValue` if the current value is '0' otherwise append
	calcDisplay.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

//update calculator screen display
function updateDisplay() {
	const display = document.querySelector('.calculatorDisplay');
	// update value of screen element with content of `displayValue`
	display.value = calcDisplay.displayValue;
}

//execute updateDisplay function
updateDisplay();


// BUTTON CHECKS
	// adding if statement checks if user has clicked a button element
	// the 'target' event is whichever button is clicked by the user
	// if button element is clicked, button type and value will be console logged

const buttons = document.querySelector('.calculatorButtons');
buttons.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('allClear')) {
    allClear(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('clear')) {
    console.log('clear', target.value);
    return;
  }
  
  inputDigit(target.value);
  updateDisplay();
  
});


// MATH FUNCTIONS
function add() {
	
}

function subtract() {
	
}

function sum() {
	
}

function multiply() {
	
}

//pressing decimal button will add decimal point to display, unless one is already there
function inputDecimal(point) {
  if (!calcDisplay.displayValue.includes(point)) {
      calcDisplay.displayValue += point;
    }
};

function squared() {
	
}

function squareRoot() {

}

function equals() {
	
}

function allClear() {
  calcDisplay.innerText != "";
  calcDisplay.displayValue = '0'
  console.log("All Cleared");
}

function clear() {
	
};


//MODULE EXPORTS
/*
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
*/