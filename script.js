//define the parent container 
const container = document.querySelector('#container');
createGrid()

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
    }
}}
