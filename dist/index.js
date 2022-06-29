"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const button = document.getElementById('button');
function somar(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(somar(Number(input1.value), Number(input2.value)));
});
