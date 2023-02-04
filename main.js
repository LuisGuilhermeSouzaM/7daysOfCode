const buttons = document.querySelectorAll('button');
const display = document.querySelector('input#display');

let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.textContent;

    if (!isNaN(value) || value === '.') {
      if (operator) {
        secondValue += value;
        display.value = secondValue;
      } else {
        firstValue += value;
        display.value = firstValue;
      }
    } else if (value === 'C') {
      handleClear();
    } else if (value === 'CE') {
      handleClearEntry();
    } else if (value === '⌫') {
      handleBackspace();
    } else if (value === '+') {
      operator = '+';
    } else if (value === '-') {
      operator = '-';
    } else if (value === '÷') {
      operator = '/';
    } else if (value === '×') {
      operator = '*';
    } else if (value === '=') {
      handleEquals();
    }
  });
});

function handleClear() {
  firstValue = '';
  secondValue = '';
  operator = '';
  display.value = '';
}

function handleClearEntry() {
  if (secondValue) {
    secondValue = '';
    display.value = firstValue;
  } else if (operator) {
    operator = '';
    display.value = firstValue;
  } else {
    firstValue = '';
    display.value = '';
  }
}

function handleBackspace() {
  if (secondValue) {
    secondValue = secondValue.slice(0, -1);
    display.value = secondValue;
  } else if (operator) {
    operator = '';
    display.value = firstValue;
  } else {
    firstValue = firstValue.slice(0, -1);
    display.value = firstValue;
  }
}

function handleAddition() {
  firstValue = eval(`${firstValue} + ${secondValue}`);
  display.value = firstValue;

  secondValue = '';
  operator = '';
}

function handleSubtraction() {
  firstValue = eval(`${firstValue} - ${secondValue}`);
  display.value = firstValue;

  secondValue = '';
  operator = '';
}

function handleMultiplication() {
  firstValue = eval(`${firstValue} * ${secondValue}`);
  display.value = firstValue;

  secondValue = '';
  operator = '';
}

function handleDivision() {
  firstValue = eval(`${firstValue} / ${secondValue}`);
  display.value = firstValue;

  secondValue = '';
  operator = '';
}

function handleEquals() {
    switch (operator) {
        case '+':
          handleAddition();
          break;
        case '-':
          handleSubtraction();
          break;
        case '*':
          handleMultiplication();
          break;
        case '/':
          handleDivision();
          break;
      }
    }