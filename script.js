let display = document.getElementById("expression");

// Select all buttons
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let value = this.innerText;

    // If number or operator
    if (value !== "DEL" && value !== "Reset" && value !== "=") {
      display.value += value;
    }

    // Delete last character
    else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    }

    // Reset all
    else if (value === "Reset") {
      display.value = "";
    }

    // Calculate result
    else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
  });
});
