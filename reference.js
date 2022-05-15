/**
 * This file contains a bunch of references for JavaScript.
 */








// **************************************** EVENT LISTENERS:

//const btn = document.querySelector('#btn');

// alert when button gets clicked with "Hello World":
// btn.addEventListener('click', () => {
//     alert("Hello World");
// });


// A call back function that change the background color of the button once clicked:
// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
// });


// Iterates through the button element and alerts you with unique message for each button w/ double click:
// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.addEventListener('dblclick', () => {
//         alert(button.id);
//     });
// });


// detect the type of mouse click using the string "mousedown":
// let button = document.querySelector("button");
// button.addEventListener("mousedown", event => {
//     if (event.button === 0) {
//         console.log("Left click");
//     } else if (event.button === 1) {
//         console.log("middle click");
//     } else if (event.button === 2) {
//         console.log("right click")
//     }
// })                                                               

// Using the HTML inline JS to run code:
// const changeText = () => {
//     const p = document.querySelector('p');
//     p.textContent = "I changed b/c of an inline event handler.";
//     p.textContent = "I changed again b/c."
// }


// Using Event Handlers (not running code within HTML, but a seperate JS file - better option):
// const changeText = () => {
//     const p = document.querySelector('p');
//     p.textContent = "The text has been changed after the button click.";
// }

// const button = document.querySelector('button');
// button.onclick = changeText;

// Using an Event Listener (which is the preferred way of doing things) :
// const changeText = () => {
//     const p = document.querySelector('p');
//     const quote = document.querySelector('quote');
//     const ul = document.querySelector('ul li');

//     p.textContent = "I changed b/c of an event listener.";
//     quote.style.backgroundColor = 'magenta';
//     ul.textContent = "I am grateful!";
// }

// const alertText = () => {
//     alert("Here is an alert!@");
// }

// const button = document.querySelector('button');
// button.addEventListener('keypress', changeText);
// button.addEventListener('mouseleave', alertText);

// document.addEventListener('keydown', event => {
//     console.log('key: ' + event.key);
//     console.log('code: ' + event.key);
// })


// Displays on the <p> element on page and changes text depending on key that was press:
// document.addEventListener('keydown', event => {
//     const element = document.querySelector('button');
//     const add = 'KeyA';
//     const s = 'KeyS';
//     const d = 'KeyD';
//     const w = 'KeyW';

//     switch (event.code) {
//         case add:
//             element.textContent = 'Left';
//             break;
//         case s:
//             element.textContent = 'Down';
//             break;
//         case d:
//             element.textContent = 'Right';
//             break;
//         case w:
//             element.textContent = 'Up';
//             break;    
//     }
// })

// const section = document.querySelector('section');
// const div = document.querySelector('div');
// section.addEventListener('click', event => {
//     console.log(event.target);
// })
// div.addEventListener('mouseover', event => {
//     if (event.div) {
//         console.log('true');
//     }
// })

// const ul = document.querySelector('ul');

// for (let element of ul.children) {
//     element.style.color = 'blue';
// }

// const p = document.querySelector('.div');

// for (let element of p.childNodes) {
//     console.log(element);
// }





































