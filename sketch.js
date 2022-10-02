//query selectors
const container = document.querySelector('#container');


//Function that creates GRID
function makeGrid (rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let box = document.createElement("div");
    box.classList.add('grid-item')
    container.appendChild(box);
  };
}

//grid creationg
makeGrid(16, 16);







