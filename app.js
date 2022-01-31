let displayValue = '0';
let num1 = '';
let num2 = '';
let operatorValue = '';

let screen = document.getElementById('screen');
let button = document.querySelectorAll("[number]");
let operator = document.querySelectorAll("[operator");
let equals = document.getElementById('equals');
let decimal = document.getElementById('decimal');
let clearBtn = document.getElementById('clear-btn');
let deleteBtn = document.getElementById('delete-btn');

button.forEach((button) => {
    button.addEventListener('click', () => setNum(button.innerHTML));
})

operator.forEach((operator) => {
    operator.addEventListener('click', () => setOper(operator.innerHTML));
})

equals.addEventListener('click', () => equal());
decimal.addEventListener('click', () => setDecimal(decimal.innerHTML));
clearBtn.addEventListener('click', () => clear());
deleteBtn.addEventListener('click', () => deleteNum());

const setNum = function (data) {
    if (operatorValue !== '') {
        num2 += data;
        console.log(num2);
        updateDisplay(data);
    } else {
        num1 += data;
        console.log(num1);
        updateDisplay(data);
    }
}

const setDecimal = function (data) {
    if (operatorValue === '') {
        if (num1.includes('.')) {
            return
        } else {
            updateDisplay(data);
            num1 += data;
        }
    } else {
        if (num2.includes('.')) {
            return
        } else {
            if (num2 === '') num1 += '0';
            updateDisplay(data);
            num2 += data;
        }
    }
}

const roundResult = function (number) {
    return Math.round(number * 100) / 100;
}

const setOper = function (data) {

    if (operatorValue != '') {
        if (num2 == '') return;
        equal();
        num1 = screen;
        num2 = '';
        console.log(num2);
        operatorValue = data;
        updateDisplay(data);
    } else if (operatorValue === '') {
        operatorValue = data;
        num2 = '';
        updateDisplay(data);
        console.log(operatorValue)
    }
}

const equal = function (data) {
    screen.innerHTML = roundResult(operate(operatorValue, num1, num2));
    displayValue = screen.innerHTML;
    num1 = displayValue;
    operatorValue = '';
}

const operate = function (operatorValue, num1, num2) {

    a = parseFloat(num1);
    b = parseFloat(num2);

    switch (operatorValue) {
        case '+':
            console.log(a, b)
            return add(a, b);
        case '-':
            console.log(a, b)
            return subtract(a, b);
        case 'x':
            console.log(a, b)
            return multiply(a, b);
        case '/':
            console.log(a, b)
            return divide(a, b);
    }
}

const updateDisplay = function (data) {
    if (displayValue === '0') {
        displayValue = data;
        screen.innerHTML = displayValue;
    } else {
        displayValue += data;
        screen.innerHTML = displayValue;
    }

}

const deleteNum = function () {
    if (operatorValue === '') {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        displayValue = screen.innerHTML;
        num1 = displayValue;
        console.log(num1);

    } else {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        displayValue = num2.toString().slice(0, -1);
        num2 = displayValue;
        operatorValue = operatorValue;
        console.log(num2);
    }
}

const clear = function () {
    displayValue = '0';
    num1 = '';
    num2 = '';
    operatorValue = '';
    updateDisplay(displayValue);
}

const add = function (a, b) {
    answer = a + b;
    return answer;
};

const subtract = function (a, b) {
    answer = a - b;
    return answer;
};

const multiply = function (a, b) {
    answer = a * b;
    console.log(answer);
    return answer
};

const divide = function (a, b) {
    answer = a / b;
    return answer;
}