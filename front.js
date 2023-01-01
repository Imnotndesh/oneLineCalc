const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    display.value += e.target.value;
  });
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", e => {

  display.value = eval(display.value);
});