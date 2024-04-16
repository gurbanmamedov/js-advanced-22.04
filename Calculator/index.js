const display = document.querySelector("#display");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn0 = document.querySelector(".btn0");
const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
const btnMultiply = document.querySelector(".btnMultiply");
const btnDivide = document.querySelector(".btnDivide");
const btnClear = document.querySelector(".btnClear");
const btnEqual = document.querySelector(".btnEqual");
const btnDot = document.querySelector(".btnDot");

btn7.addEventListener("click", () => showNumber(7));
btn8.addEventListener("click", () => showNumber(8));
btn9.addEventListener("click", () => showNumber(9));
btn4.addEventListener("click", () => showNumber(4));
btn5.addEventListener("click", () => showNumber(5));
btn6.addEventListener("click", () => showNumber(6));
btn1.addEventListener("click", () => showNumber(1));
btn2.addEventListener("click", () => showNumber(2));
btn3.addEventListener("click", () => showNumber(3));
btn0.addEventListener("click", () => showNumber(0));
btnPlus.addEventListener("click", () => showOperator("+"));
btnMinus.addEventListener("click", () => showOperator("-"));
btnMultiply.addEventListener("click", () => showOperator("*"));
btnDivide.addEventListener("click", () => showOperator("/"));
btnDot.addEventListener("click", () => showOperator("."));
btnClear.addEventListener("click", clearDisplay);
btnEqual.addEventListener("click", calculate);

function showNumber(number) {
  display.value += number;
}

function showOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const expression = display.value;
  const result = eval(expression);
  display.value = result;
}
