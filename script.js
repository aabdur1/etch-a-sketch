const container = document.querySelector('.container');


for (i = 0; i < 16; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', 'squares');
  container.appendChild(div);
}

const square = document.querySelector('.squares');
square.addEventListener('mouseover', draw);

function draw() {
  square.setAttribute('class', 'drawing');
}