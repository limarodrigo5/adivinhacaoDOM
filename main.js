const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 0;

//eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

//funções
function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value == "") {
    xAttempts = xAttempts;
  } else {
    xAttempts++;
  }

  if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
    alert("Digite um número entre 0 e 10");
    inputNumber.value = "";
    return;
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector("h2").innerText = `você acertou em ${xAttempts} tentativas`;
  }

  if (Number(inputNumber.value) == randomNumber && xAttempts == 1) {
    screen2.querySelector("h2").innerText = `você acertou em ${xAttempts} tentativa`;
  }

  inputNumber.value = "";
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 0;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

