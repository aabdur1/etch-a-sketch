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
  a = 38 / userInput;
  const x = userInput ** 2;

  container.innerHTML = '';

  container.removeEventListener('mousemove', drawingHandler);


  for (let i = 0; i < x; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'squares');
    div.style.width = `${a}vw`;
    div.style.height = `${a}vw`;
    container.appendChild(div);
  }
}


function startDrawing() {
  isDrawing = true;
  container.addEventListener('mousemove', drawingHandler);
}

function stopDrawing() {
  isDrawing = false;
  container.removeEventListener('mousemove', drawingHandler);
}

function drawingHandler(event) {
  if (isDrawing) {
    const target = event.target;

    // Check if the mouseover target is a .squares element
    if (target.classList.contains('squares')) {
      target.setAttribute('class', 'drawing');
      target.style.width = `${a}vw`;
      target.style.height = `${a}vw`;
    }
  }
}

function getRandomColor() {
  // Generate random RGB color values
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  // Construct the RGB color string
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

// Apply random BG colors to the title, body, and container
function applyRandomColors() {
  document.body.style.backgroundColor = getRandomColor();
  container.style.backgroundColor = getRandomColor();

  // Generate a new background color and a random text color
  const newBackgroundColor = getRandomColor();
  const newTextColor = getRandomColor();

  // Apply the new background color and text color
  title.style.backgroundColor = newBackgroundColor;
  title.style.color = newTextColor;

  // Calculate and apply the outline color
  const outlineColor = calculateOutlineColor(newBackgroundColor, newTextColor);
  title.style.textShadow = `0 0 5px ${outlineColor}`;
}

function calculateOutlineColor(bgColor, textColor) {
  // Calculate the contrast ratio between background and text colors
  const contrastRatio = getContrastRatio(bgColor, textColor);

  // Use a light or dark outline based on the contrast ratio
  const outlineColor = contrastRatio >= 4.5 ? '#000000' : '#ffffff';

  return outlineColor;
}

// Function to calculate contrast ratio between two colors
function getContrastRatio(color1, color2) {
  const luminance1 = calculateRelativeLuminance(color1);
  const luminance2 = calculateRelativeLuminance(color2);

  const brighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);

  return (brighter + 0.05) / (darker + 0.05);
}

// Function to calculate relative luminance for a color
function calculateRelativeLuminance(color) {
  const rgbValues = color.match(/\d+/g).map(Number);

  const srgb = rgbValues.map(value => {
    value /= 255;
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
  });

  const luminance = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  return luminance;
}


// Create sketch area and randomize BG colors
numBtn.addEventListener('click', total);
// numBtn.addEventListener('click', applyRandomColors);


container.addEventListener('mousedown', startDrawing);
container.addEventListener('mouseup', stopDrawing);

const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', reset)

function reset() {
  total();
};

const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', applyRandomColors);