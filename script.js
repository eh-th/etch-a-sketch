//define the parent container 
const container = document.querySelector('#grid');
const button1 = document.querySelector('#button1');
let buttonPrompt = 16
createGrid(buttonPrompt)

function createGrid(gridSize = 16) {
//create 16 flex containers in order to create 16 lines
    for (i=0; i< gridSize; i++) {
        const flexContainer = document.createElement('flexContainer')
        container.appendChild(flexContainer)
        flexContainer.classList.add('flexcontainer');                                      
        //then a new loop creates 16 flexbox-items in a single line
        for (j=0; j< gridSize; j++) {
            const flexDiv = document.createElement('flexDiv')
            flexContainer.appendChild(flexDiv)
            flexDiv.classList.add('flexdiv');  
            flexDiv.setAttribute('id','flexitem')
            //change background color of a square on hover
            flexDiv.addEventListener('mouseover', e=>{
            //set the RGB values with a random function and apply it to the flexDiv to have a random color each time
            let red = randomColor();
            let green = randomColor();
            let blue = randomColor();
            flexDiv.style.backgroundColor = `rgb(${red},${green},${blue})`;
        })
    }
}}

//create a click function that prompts the user for a grid size
function click() {
    //clean the page of the previous grid
    for (i = buttonPrompt; i > 0; i--) {
        const flexContainer = document.querySelector('flexContainer')
        container.removeChild(flexContainer)
    }
    buttonPrompt = prompt("Please enter the desired grid size:",'')
    //check if the provided number is under 100
    while (buttonPrompt > 100) {
        buttonPrompt = prompt("Please provide a number < 100",'')
    }
    createGrid(buttonPrompt)
}

//Create a function that returns a random value between 0 and 255 for the rgb color
function randomColor() {
    let ranColor = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    return ranColor
}

button1.onclick = () => click()

