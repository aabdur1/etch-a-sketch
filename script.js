const container = document.querySelector('#container');


for (i = 0; i < 16; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', 'squares');
  container.appendChild(div);
}

const squares = document.querySelectorAll('.squares');
console.log(squares);
squares.forEach(sketch);

function sketch(square) {
  square.addEventListener('mouseover', () => {
    square.setAttribute('class', 'drawing');
  })
}