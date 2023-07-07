// const and let initialisation

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let isTimer = null;

start.addEventListener('click', changeColor);

function changeColor() {
  if (start.disabled) {
    return;
  } else {
    start.disabled = true;
    isTimer = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
}

stop.addEventListener('click', stopChangeColor);

function stopChangeColor() {
  clearInterval(isTimer);
  start.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
