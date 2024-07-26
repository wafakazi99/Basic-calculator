const calculatorInput = document.querySelector('input');
const buttons = document.querySelectorAll('.buttons');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      try {
        const result = evaluateExpression(calculatorInput.value);
        calculatorInput.value = result;
      } catch (error) {
        calculatorInput.value = 'Error';
      }
    } else if (buttonValue === 'C') {
      calculatorInput.value = '';
    } else {
      calculatorInput.value += buttonValue;
    }
  });
});

function evaluateExpression(expression) {
 
  return eval(expression);
}