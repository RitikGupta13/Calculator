let expression = "";

function getOperation(button) {
  const op = button.getAttribute("data-op");
  expression += `${op}`;
  document.getElementById("input1").value = expression;
}
function getNumber(button) {
  const number = button.innerText;
  expression += number;
  document.getElementById("input1").value = expression;
}
function clearDisplay() {
  expression = "";
  document.getElementById("input1").value = "";
}
function runCalculator() {
  try {
    const result = eval(expression);
    document.getElementById("input1").value = result;
    expression = result.toString();
  } catch {
    document.getElementById("input1").value = "Error";
    expression = "";
  }
}
