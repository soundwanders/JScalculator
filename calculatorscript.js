//calculatorscript.js

// calculator screen
const calcScreen = {
	displayValue: '0',
	firstOperand: null,
	waitingForSecondOperand: 'false',
	operator: null,
}

function updateScreen() {
// select the element with class of `calcDisplay`
const screen = document.querySelector('.calcDisplay');
// update value of screen element with the contents of `displayValue`
screen.value = calcScreen.displayValue;
}

updateScreen();

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