// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.getElementsByClassName("btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = ""; // Stores the current input
let operator = null; // Stores the selected operator
let previousInput = ""; // Stores the previous input

// Add event listeners to all buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const value = this.getAttribute("data-value");

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      // Handle operator buttons
      if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = value;
        // Update the display to show the operator
        display.textContent = `${previousInput} ${operator}`;
      }
    } else if (value === ".") {
      // Handle decimal point
      if (!currentInput.includes(".")) {
        currentInput += value;
        display.textContent = currentInput;
      }
    } else if (value === "=") {
      // Handle equals button (do nothing here, handled separately)
    } else {
      // Handle number buttons
      currentInput += value;
      // Update the display to show the current input
      if (operator) {
        display.textContent = `${previousInput} ${operator} ${currentInput}`;
      } else {
        display.textContent = currentInput;
      }
    }
  });
}

// Clear button
clearButton.addEventListener("click", function () {
  currentInput = "";
  previousInput = "";
  operator = null;
  display.textContent = "0";
});

// Equals button
equalsButton.addEventListener("click", function () {
  if (currentInput !== "" && previousInput !== "" && operator) {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      result = "Error";
    }

    // Display the result
    display.textContent = result;
    currentInput = result.toString();
    previousInput = "";
    operator = null;
  }
});