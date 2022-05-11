
// SELECTORS:
const divContainer = document.querySelector('.container'); // selecting main div container in body:
const divGrid = document.createElement('div'); // create div element.
const classDivGrid = document.querySelectorAll('.div-grid'); // selecting ALL elements with the class name '.div-grid'.
const selectClassCell = document.querySelector('.cell'); // select all div with class '.cell'.





// Create entire grid with input from user:
function createGrid(num) {
    const columns = createDivColumns(num);
    const rows = createDivRows(num);
}
createGrid(16);





// Create Columns:
function createDivColumns(num) {
    for (let i=1; i<=num; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        divContainer.appendChild(div);
    }
}

// Create rows:
function createDivRows(num) {
    const selectAllDivs = document.querySelectorAll('.grid'); // select all divs with the class '.grid'.
    for (let i=0; i<num; i++) {
        for (div of selectAllDivs) {
            const newDiv = document.createElement('div'); // create div element.
            newDiv.classList.add('cell'); // add class name to div element.
            div.appendChild(newDiv);
        }
    }
}



// EVENT LISTENERS:
// Changes background color if mouse hovers over element:
divContainer.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'aquamarine';
})

// Revert to original background color with mouse exit:
divContainer.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'white';
})

