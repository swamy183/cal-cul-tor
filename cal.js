let currentInput = "";
let operator = "";
let previousInput = "";
let isResultDisplayed = false;

const display = document.getElementById("display");

function appendNumber(number) {
  // If the result was displayed, clear the input to start a new expression
  if (isResultDisplayed) {
    currentInput = number.toString();
    isResultDisplayed = false;
  } else {
    currentInput += number;
  }
  display.value = previousInput + " " + operator + " " + currentInput; // Display the current equation
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  isResultDisplayed = false;
  display.value = "";
}

function chooseOperator(op) {
  if (currentInput === "") return; // Prevent choosing an operator without a number
  if (previousInput !== "") {
    calculateResult(); // Calculate previous expression before adding a new operator
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  display.value = previousInput + " " + operator; // Show current equation with operator
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  if (isNaN(prev) || isNaN(current)) return; // If either of the inputs are not numbers, return
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero!");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  isResultDisplayed = true;
  display.value = previousInput + " " + operator + " " + currentInput + ""; // Show result
}
