
// SELECTORS:
const body = document.querySelector('body');
const button = document.querySelector('button');
const divContainer = document.querySelector('.container');
const resetGrid = document.querySelector('.reset-grid');


// default grid (16x16):
function defaultGrid() {
    createDivColumns(16);
    createDivRows(16);
}

// create grid:
function createGrid() {
    let inputGrid = prompt("Choose a grid size: ");
    createDivColumns(inputGrid);
    createDivRows(inputGrid);
}

// Create Columns:
function createDivColumns(num) {
    for (let i=1; i<num; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        divContainer.appendChild(newDiv);
    }
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

// grid is reset to default grid (16x16) when user clicks on 'Reset Grid' button:
function reloadGrid() {
    clearGrid();
    defaultGrid();
}


// function that resets the grid:
function clearGrid() {
    divContainer.innerHTML = '';
}


// Changes background color if mouse hovers over element:
divContainer.addEventListener('mouseover', (event) => {
    // window.location.reload();
    if (event.target.matches('.cell')) {
        event.target.style.backgroundColor = 'aquamarine';
    }
})



// main function:
function main() {
    button.addEventListener('click', createGrid);
    // event listener when user clicks, reset the grid:
    resetGrid.addEventListener('click', reloadGrid);
    // reloadGrid();
}
main();