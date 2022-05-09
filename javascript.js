

const divContainer = document.querySelector('.container'); // selecting main div container in body:
const divGrid = document.createElement('div'); // create div element.
const addDivGridClass = divGrid.classList.add('div-grid'); // adding new class 'div-grid' to the newly created 'div' element in divGrid variable.
const appendDivGrid = divContainer.appendChild(divGrid); // append the div element to parent node.
const classDivGrid = document.querySelectorAll('.div-grid'); // selecting ALL elements with the class name 'div-grid'.




// function - creates rows of divs:
function createDivRows() {
    for (let i=1; i<=16; i++) {
        const divGrid = document.createElement('div'); // create div element.
        divGrid.classList.add('div-grid'); // add class name to div element.
        divContainer.appendChild(divGrid); // append the div element to parent node.
    }
}
createDivRows();

// Function - creates columns of divs:
// 'num' parameter iterate the columns from 1 - 16 columns.
function createDivColumns() {
    for (let i=1; i<=16; i++) {
        const body = document.querySelector('body');
        const newDivs = document.createElement('div');
        body.appendChild(newDivs).classList.add('container');
    }
}
createDivColumns();


// Changes background color if mouse hovers over element:
divContainer.addEventListener('mouseover', (event) => {
    // button.classList.add('hover-effect');
    event.target.style.backgroundColor = 'purple';
})

// Changes background color if mouse exits the element:
divContainer.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'white';
})


