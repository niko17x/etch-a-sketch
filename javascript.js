
// SELECTORS:
const body = document.querySelector('body');
const divContainer = document.querySelector('.container'); // selecting main div container in body:

let userInput; // variable to store user input for dynamic grid sizing.


function main(getUserInput=16) { // default 16x16 grid size.
    createDivColumns(getUserInput); //get input from user for grid size.
    createDivRows(getUserInput);
}
main();




// Get user input for number of grids:
function userInputGrid() {
    do {
        userInput = Number(prompt("Choose a number 100 or less to create the grid: "))
    } while (Number.isInteger(userInput) === false || userInput > 100);
    return (userInput);
}




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
    const selectAllDivs = document.querySelectorAll('.grid');
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

