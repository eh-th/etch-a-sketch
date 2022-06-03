//define the parent container 
const container = document.querySelector('#container');
const button1 = document.querySelector('#button1');
let buttonPrompt
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
            flexDiv.style.backgroundColor = "blue";
        })
    }
}}

//create a click function that prompts the user for a grid size
function click() {
    buttonPrompt = prompt("Please enter the desired grid size:",'')
    //check if the provided number is under 100
    while (buttonPrompt > 100) {
        buttonPrompt = prompt("Please provide a number < 100",'')
    }
    createGrid(buttonPrompt)
}

button1.onclick = () => click()
