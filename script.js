const container = document.querySelector('#container');

const num = document.getElementById('num');
const numBtn = document.getElementById('numBtn');
let a;
const minVal = 10;
const maxVal = 100; 
let isDrawing = false;

function total() {
  let userInput = parseInt(num.value);
  userInput = isNaN(userInput) ? minVal : Math.min(maxVal, Math.max(minVal, userInput));

  a = 40 / userInput;
  const x = userInput ** 2;

  container.innerHTML = '';
  
  container.removeEventListener('mouseover', drawingHandler);
  isDrawing = false;


  for (let i = 0; i < x; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'squares');
    div.style.width = `${a}vw`;
    div.style.height = `${a}vw`;
    container.appendChild(div);
  }
}


function startDrawing() {
  isDrawing = !isDrawing;

  if (isDrawing) {
    container.addEventListener('mouseover', drawingHandler);
  } else {
    container.removeEventListener('mouseover', drawingHandler);
  }
};

function drawingHandler(event) {
  const target = event.target;
  
  // Check if the mouseover target is a .squares element
  if (target.classList.contains('squares')) {
    target.setAttribute('class', 'drawing');
    target.style.width = `${a}vw`;
    target.style.height = `${a}vw`;
  }
};

numBtn.addEventListener('click', total);
container.addEventListener('click', startDrawing)

const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', reset)

function reset() {
  container.innerHTML = '';
  container.removeEventListener('mouseover', drawingHandler);
  isDrawing = false;
};