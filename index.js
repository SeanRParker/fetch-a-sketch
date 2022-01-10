// let sizePref = () => {
//   let size = document.getElementById("boxSlider").value;
//     return size;
// } 

let slider = document.getElementById("boxSlider");
let sliderValue = document.getElementById("slideValue");
sliderValue.innerHTML = slider.value; // Display the default slider value

let container = document.querySelector('#container');

let renderGrid = (size) => {
  let i = 0;
  while(size * size > i) {
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
}

renderGrid(slider.value);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  sliderValue.innerHTML = this.value;
  renderGrid(slider.value);
}



let clear = document.querySelector('#clear');

clear.addEventListener('click', e => {
  let box = Array.from(document.querySelectorAll('.gray'));
  box.forEach(e => {
    e.classList.remove('gray');
  })
  
  renderGrid(slider.value);
})
