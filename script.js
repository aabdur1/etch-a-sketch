const container = document.querySelector('#container');

const num = document.getElementById('num');
const numBtn = document.getElementById('numBtn');
let a;
const minVal = 10;
const maxVal = 100; 

function total() {
  let userInput = parseInt(num.value);
  userInput = isNaN(userInput) ? minVal : Math.min(maxVal, Math.max(minVal, userInput));

  a = 50 / userInput;
  const x = userInput ** 2;

  container.innerHTML = '';

  for (let i = 0; i < x; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'squares');
    div.style.width = `${a}vw`;
    div.style.height = `${a}vw`;
    container.appendChild(div);
  }
}

numBtn.addEventListener('click', total);

container.addEventListener('mouseover', function(event) {
  const target = event.target;
  
  // Check if the mouseover target is a .squares element
  if (target.classList.contains('squares')) {
    target.setAttribute('class', 'drawing');
    target.style.width = `${a}vw`;
    target.style.height = `${a}vw`;
  }
});