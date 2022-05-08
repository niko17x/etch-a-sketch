// selecting main div container in body:
const divContainer = document.querySelector('div');
const divGrid = document.createElement('div'); // create div element.
const AddDivGridClass = divGrid.classList.add('div-grid'); // add class name to div element.
const appendDivGrid = divContainer.appendChild(divGrid); // append the div element to parent node.

/// function that takes number parameter and displays div grids on web page:
function createDivGrid(num) {
    for (let i=1; i<=num; i++) {
        const divGrid = document.createElement('div'); // create div element.
        divGrid.classList.add('div-grid'); // add class name to div element.
        divContainer.appendChild(divGrid); // append the div element to parent node.
    }
}
createDivGrid(16);

