const container = document.querySelector('.container');


for (i = 0; i < 16; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', 'squares');
  container.appendChild(div);
}