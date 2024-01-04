const title = document.querySelector('.title');
const container = document.querySelector('#container');
const num = document.getElementById('num');
const numBtn = document.getElementById('numBtn');
const minVal = 10;
const maxVal = 100; 
let a;
let isDrawing = false;

function total() {
  let userInput = parseInt(num.value);
  userInput = isNaN(userInput) ? minVal : Math.min(maxVal, Math.max(minVal, userInput));

  // Container width divided by input # for square dimensions
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

function getRandomColor() {
  // Generate random color values for red, green, and blue
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  // Construct the RGB color string
  const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

  return randomColor;
}

// Apply random background colors to the title, body, and container
function applyRandomColors() {
  document.body.style.backgroundColor = getRandomColor();
  container.style.backgroundColor = getRandomColor();
  title.style.backgroundColor = getRandomColor();
  title.style.color = getRandomColor();
}

// Create sketch area and randomize BG colors
numBtn.addEventListener('click', total);
numBtn.addEventListener('click', applyRandomColors);


container.addEventListener('click', startDrawing)

const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', reset)

function reset() {
  container.innerHTML = '';
  container.removeEventListener('mouseover', drawingHandler);
  isDrawing = false;
  applyRandomColors();
};