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

updateDisplay();

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

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}