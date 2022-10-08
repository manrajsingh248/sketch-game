const container = document.querySelector('#container');
const errorText = document.querySelector("#errorText");

let color = "black";

function makeGrid(size){
  let grid = document.querySelector('.grid');

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  let total = size * size;
  for( let i = 0; i < total; i++) {
    let box = document.createElement('div');
    box.addEventListener("mouseover", colorBox);
    
    box.style.backgroundColor = 'white';

    grid.appendChild(box);
  }
}

makeGrid(16);
function changeSize(input) {
  if(input >=2 && input <=100) {
    makeGrid(input);
  } 
  else {
    errorText.textContent = "Error. Please try a different size";
  }
}

function randomColor() {
  let letters = '0123456789ABCDEF';
  let color2 = '#';
  for (let i = 0; i < 6; i++) {
    color2 += letters[Math.floor(Math.random() * 16)];
  }
  return color2;
}

function colorBox() {
  if(color == "random") {
    this.style.backgroundColor = randomColor();
  }
  else {
   this.style.backgroundColor = color;
  }
}










// function makeGrid (rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (i = 0; i < (rows * cols); i++) {
//     let box = document.createElement("div");
//     box.classList.add('grid-item')
//     container.appendChild(box);
//   };
//   hoverColor();
// }

