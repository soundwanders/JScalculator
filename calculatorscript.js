//calculatorscript.js

// set calculator screen display
const calcDisplay = {
	displayValue: '0',
	firstOperand: null,
	waitingForSecondOperand: 'false',
	operator: null,
}

//update calculator screen display
function updateDisplay() {
	const display = document.querySelector('.calculatorDisplay');
	// update value of screen element with content of `displayValue`
	display.value = calcDisplay.displayValue;
}
//execute the updateDisplay function
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
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('allClear')) {
    console.log('clearAll', target.value);
    return;
  }

  if (target.classList.contains('clear')) {
    console.log('clear', target.value);
    return;
  }
  
  	input(target.value);
	updateDisplay();
});


function input(digit) {
	const { displayValue } = calculator;
	// Overwrite `displayValue` if the current value is '0' otherwise append to it
	calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
  

// MATH FUNCTIONS
function add () {
	
}

function subtract () {
	
}

function sum () {
	
}

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

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