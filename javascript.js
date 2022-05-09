// selecting main div container in body:
const divContainer = document.querySelector('.container');
const divGrid = document.createElement('div'); // create div element.
const addDivGridClass = divGrid.classList.add('div-grid'); // adding new class 'div-grid' to the newly created 'div' element in divGrid variable.
const appendDivGrid = divContainer.appendChild(divGrid); // append the div element to parent node.
const classDivGrid = document.querySelectorAll('.div-grid'); // selecting ALL elements with the class name 'div-grid'.


/// function that takes number parameter and displays div grids on web page:
function createDivGrid() {
    for (let i=1; i<=16; i++) {
        const divGrid = document.createElement('div'); // create div element.
        divGrid.classList.add('div-grid'); // add class name to div element.
        divContainer.appendChild(divGrid); // append the div element to parent node.
    }
}
createDivGrid();


// Changes background color if mouse hovers over element:
divContainer.addEventListener('mouseover', (event) => {
    // button.classList.add('hover-effect');
    event.target.style.backgroundColor = 'purple';
})

// Changes background color if mouse exits the element:
divContainer.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'white';
})







// // function - event listener that creates mouse hovering effect that changes background color by adding a class that connects to the CSS rule 'hover-effect':
// hoverEffect.addEventListener('mouseover', (event) => {
//     // add the #hover-effect as a new class to the div grids:
//     // document.querySelector('.div-grid').classList.add('hover-effect');
//     hoverEffect.classList.add('hover-effect');

//     event.target.style.backgroundColor = 'purple';
// })


