//define the parent container 
const container = document.querySelector('#container');
//create a child div with flexbox and add it to container



// //use a loop to create 16 flexbox-items in a single line
for (let item = 1; item < 17; item++) {
    const flex`${item}` = document.createElement("flex"`${item}`);
    container.appendChild(flex`${item}`)
}

//use a loop to multiply the above result 16 times