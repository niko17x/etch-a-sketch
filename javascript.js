
// SELECTORS:
const body = document.querySelector('body');
const newGrid = document.querySelector('.new-grid');
const divContainer = document.querySelector('.container');
const resetGrid = document.querySelector('.reset-grid');


// default grid (16x16):
function defaultGrid(grid=16) {
    createDivColumns(grid);
    createDivRows(grid);
}

// clear grid then create a new grid:
function createGrid() {
    divContainer.innerHTML = '';
    let getGridSize = gridSize();
    createDivColumns(getGridSize);
    createDivRows(getGridSize);
}

// Create Columns:
function createDivColumns(num) {
    for (let i=1; i<num; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        divContainer.appendChild(newDiv);
    }
}

// ask player for grid size:
function gridSize() {
    let getGridSize = Number(prompt("Choose a grid size between 2 and 100: "));
    while (getGridSize<2 || getGridSize>100) {
        getGridSize = prompt("Invalid choice. Only from 2 to 100.");
    }
    console.log(getGridSize);
    return getGridSize;
}

// Create rows:
function createDivRows(num) {
    const selectAllDiv = document.querySelectorAll('.grid');
    for (let i=0; i<num; i++) {
        for (div of selectAllDiv) {
            const newDiv = document.createElement('div'); // create div element.
            newDiv.classList.add('cell'); // add class name to div element.
            div.appendChild(newDiv);
        }
    }
}

// reset the grid by removing the 'style' attribute:
function clearGrid() {
    const cell = document.querySelectorAll('.cell');
    for (c of cell) {
        c.removeAttribute('style');
    }
}

// Changes background color if mouse hovers over element:
divContainer.addEventListener('mouseover', (event) => {
    // window.location.reload();
    const getRandColor = genRandomColor();
    if (event.target.matches('.cell')) {
        event.target.style.backgroundColor = getRandColor;
    }
})

// generate a random color:
function genRandomColor() {
    let maxVal = 0xFFFFFF; // '0x' required in JS for HEX value.
    let randomNumber = Math.random() * maxVal; // get random number.
    randomNumber = Math.floor(randomNumber); // convert to whole numbers only.
    randomNumber = randomNumber.toString(16); // convert integer to string.
    let randColor = randomNumber.padStart(6, 0); // fills in potential 'empty spots' with 0's since 6 digit number is required.
    return `#${randColor.toUpperCase()}` // '#' indicates HEX value.
}    

// main function:
function main() {
    defaultGrid();
    newGrid.addEventListener('click', createGrid);
    // event listener when user clicks, reset the grid:
    resetGrid.addEventListener('click', clearGrid);
    // reloadGrid();
}
main();






