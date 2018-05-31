//global variables
const container = document.getElementById("grid_wrapper");
const resetBtn= document.getElementById("reset_btn");
const gridInput = document.getElementById("grid_input");
const changeGrid = document.getElementById("grid_btn");
const randomColor = document.getElementById("random_color");

//createinitial grid 
const createInitialGrid = (size)=>{
    let i = 0;
    while ( i < size){
        let gridRow = document.createElement('div');
        gridRow.className = 'grid-row'; 
        container.appendChild(gridRow);
        for (let index = 0; index < size; index++) {
            let grid = document.createElement('div');
            grid.className = 'grid';
            grid.style.width = (800 / (size - 1)) + 'px';
            grid.style.height = (800 / (size - 1)) + 'px';
            grid.addEventListener('mouseover', blackBg);
             gridRow.appendChild(grid);
        }
        i++;   
    }
}

window.addEventListener("load", (createInitialGrid(12)) );

//black hover
function blackBg  () {
    //console.log(this)
    this.style.background = "#000";
    this.style.borderColor = "#fff";
    this.style.borderWidth = "thin";
}//adds black background 

// changes gridsize to size of users choice
function resetGrid (){    
    gridInput.addEventListener('blur', (e)=>{
        //console.log(e);
        changeGrid.addEventListener('click', (event)=>{
            console.log(e.target.value);
            let sizeVal = e.target.value;
            //size = sizeVal;
            container.innerHTML = "";
            createInitialGrid(sizeVal);
        })
    })
}
resetGrid();

// randomcolor hover
function getrandomColor (){
    const letters= '0123456789ABCDEF';
    let color = "#";
    var newGrid = document.getElementsByClassName('grid');
    for( let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    //console.log(color)
    
    return color;
    
    for(let i =0; i < newGrid.length; i++){
        newGrid[i].addEventListener('mouseover', ()=>{
            this.style.background = color;
        })
    }

}
//getrandomColor();
function setRandomColorBg() {
    //var newGrid = document.getElementsByClassName('grid');
    randomColor.addEventListener('click', ()=>{
        console.log('you click')
        getrandomColor();
        /* for(let i =0; i < newGrid.length; i++){
            newGrid[i].addEventListener('mouseover', ()=>{
               console.log( getrandomColor());
               this.style.background = getrandomColor();
            })
        } */
    })
};
setRandomColorBg();

//reset 
const reset =()=>{
    resetBtn.addEventListener('click', ()=>{
        const reload = document.location.href="";
    })
}
reset();