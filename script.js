
var main = document.querySelector("#main"); //Sellect the paper

//Slider 
let slider = document.querySelector("#myRange");
let output = document.querySelector("#value");
let grid = document.querySelector(".grid");

slider.oninput = (()=>{
    let value = slider.value;
    output.textContent = value;
    
});


//Paper
function createGrid (size){                                         //Create the grid.
    for(let i = 0; i < (size * size) ; i++) {                       // While the count is < (col * rows) :
        const divbox = document.createElement("div");               //Create a div
        divbox.style.border = "1px rgba(0, 0, 0, 0.041) solid" ;    //Set the border style to this div
        main.style.gridTemplateColumns = `repeat(${size},1fr)`;     //Set the paper with grid columns
        main.style.gridTemplateRows = `repeat(${size},1fr)`;        //Set the paper with grid rows
        main.appendChild(divbox).classList.add("box");              //Put this created div inside the "main" OK
    }
}

createGrid(16);



//Click button events

const boxes = document.querySelectorAll(".box");    //select all divs with class="box"

let blackBtn = document.querySelector("#btnBlack");
blackBtn.addEventListener("click", black);          //Add a function when the button is clicked
function black(){                                   // This function executes the command below:
    boxes.forEach((div) => {                        //For each div, add the event of "mouseover"
    div.addEventListener("mouseover", ()=>{         //This event add a background to this div    
        div.style.background="black";
    })
});
}


let eraseBtn = document.querySelector("#btnErase");  
eraseBtn.addEventListener("click", white);
function white(){
    boxes.forEach((div) => {
        div.addEventListener("mouseover", ()=>{
            div.style.background="white";
        })
    })
}




