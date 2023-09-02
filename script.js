const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");

let currentInput = "";
let currentOperator = "";
let firstOperand = null;

// Update the display with the current input
function updateDisplay() {
  display.textContent = currentInput;
}

// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.value;
    updateDisplay();
  });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (firstOperand === null) {
      firstOperand = parseFloat(currentInput);
      currentInput = "";
      currentOperator = button.value;
    }
  });
});

// Add event listener to equal button
equalButton.addEventListener("click", () => {
  if (currentInput !== "") {
    const secondOperand = parseFloat(currentInput);
    let result;
    switch (currentOperator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      // Handle other operators here
    }
    currentInput = result.toString();
    firstOperand = null;
    currentOperator = "";
    updateDisplay();
  }
});
