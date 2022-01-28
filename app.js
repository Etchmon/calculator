let displayValue = '0';
let num1 = '';
let num2 = '';
let operatorValue = '';

let button = document.querySelectorAll("[number]");
let operator = document.querySelectorAll("[operator");
let equals = document.getElementById('equals');
let decimal = document.getElementById('decimal');
let clearBtn = document.getElementById('clear-btn');
let deleteBtn = document.getElementById('delete-btn');

button.forEach((button) => {
    button.addEventListener('click', () => updateDisplay(button.innerHTML));
    button.addEventListener('click', () => setNum(button.innerHTML));
})

operator.forEach((operator) => {
    operator.addEventListener('click', () => updateDisplay(operator.innerHTML));
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
    } else {
        num1 += data;
        console.log(num1);
    }
}

const setDecimal = function (data) {
    if (operatorValue === '') {
        if (num1.includes('.')) {
            return
        } else {
            displayValue += data;
            num1 += data;
        }

    } else {
        if (num2.includes('.')) {
            return
        } else {
            displayValue += data;
            num2 += data;
        }
    }
}

const setOper = function (data) {

    if (operatorValue != '') {
        equal();
        num1 = document.getElementById('screen').innerHTML;
        num2 = '0';
        console.log(num2);
        operatorValue = data;
        displayValue = '0';
    } else if (operatorValue === '') {
        operatorValue = data;
        num2 = '0';
        console.log(operatorValue)
    }
}

const equal = function (data) {
    document.getElementById('screen').innerHTML = operate(operatorValue, num1, num2).toFixed(2);
    displayValue = document.getElementById('screen').innerHTML;
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
        document.getElementById('screen').innerHTML = displayValue;
    } else {
        displayValue += data;
        document.getElementById('screen').innerHTML = displayValue;
    }

}

const deleteNum = function () {
    if (operatorValue === '') {
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.slice(0, -1);
        displayValue = document.getElementById('screen').innerHTML;
        num1 = displayValue;
        console.log(num1);

    } else {
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.slice(0, -1);
        displayValue = num2.toString().slice(0, -1);
        num2 = displayValue;
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