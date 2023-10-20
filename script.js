function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operator = prompt("Enter the operator (+, -, *, /):");
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid input. Please enter valid numbers.");
    } else if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
      alert("Invalid operator. Please enter a valid operator (+, -, *, /).");
    } else {
      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            alert("Division by zero is not allowed.");
          } else {
            result = num1 / num2;
          }
          break;
        default:
          alert("Invalid operator.");
      }
      if (result !== undefined) {
        alert("Result: " + result);
      }
    }
  }
  
  calculator();
  