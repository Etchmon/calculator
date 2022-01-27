let displayValue = '';

let number = document.querySelectorAll('button');
console.log(number);

const add = function (a, b) {
    answer = a + b;
    return answer;
};

const subtract = function (a, b) {
    answer = a - b;
    return answer;
};

const sum = function (nums) {
    if (nums.length === 0) {
        return 0;
    } else {
        answer = nums.reduce((a, b) => a + b, 0);
    }
    return answer;
};

const multiply = function (nums) {
    answer = nums.reduce((a, b) => a * b)
    return answer
};

const divide = function (a, b) {
    answer = a / b;
    return answer;
}