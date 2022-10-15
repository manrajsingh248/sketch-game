/* Declaring and assigning 2 variables to select the element 
 that matches it's specific CSS selector */
const container = document.querySelector('#container');
const errorText = document.querySelector("#errorText");

let color = "black";
let click = true;

//allows user to make a grid to whatever size they want
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
  if(input >=2 && input <=200) {
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

/* colorBox(), changeColor() functions allow each box in grid to have color 
when mouse is over it and change color based on whichever button user clicks */
function colorBox() {
  if (click) {
    if(color == "random") {
      this.style.backgroundColor = randomColor();
    }
    else {
    this.style.backgroundColor = color;
    }
  }
}

function changeColor (choice) {
  color = choice;
}


function resetGrid() {
  let grid = document.querySelector(".grid");
  let boxes = grid.querySelectorAll("div");
  boxes.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector('body').addEventListener('click', () => {
  click = !click;
});





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

