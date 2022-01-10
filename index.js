let sizePref = () => {
  return window.prompt('How many squares wide to you want your square?');
} 
let size = sizePref();

let container = document.querySelector('#container');

let i = 0;
while(i < size * size) {
  let box = document.createElement('div');
  box.classList.add('box');
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // container.style.width = `${size}em`
  box.addEventListener('mouseenter', e => {
    box.classList.add("gray");
  });
  container.appendChild(box);
  i++;
}

let clear = document.querySelector('#clear');

clear.addEventListener('click', e => {
  let box = Array.from(document.querySelectorAll('.gray'));
  box.forEach(e => {
    e.classList.remove('gray');
  })

  size();
})
