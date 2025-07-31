const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('clear')) {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (button.classList.contains('delete')) {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
      return;
    }

    if (button.classList.contains('equals')) {
      try {
        const evaluated = eval(currentInput);
        display.textContent = evaluated;
        currentInput = evaluated.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = 'Erro';
        currentInput = '';
      }
      return;
    }

    if (resultDisplayed && !isNaN(value)) {
      currentInput = '';
      resultDisplayed = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});