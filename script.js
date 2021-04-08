let color = "black";
let rainbow = false;
const gridContainer = document.querySelector('#gridContainer');
let root = document.documentElement;

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

function createGrid(gridSize) {
    for(let i=0; i < gridSize * gridSize;i++){
        let size = 480 / gridSize;
        const div = document.createElement('div');
        div.setAttribute('id', 'child'+i);
        div.setAttribute('class', 'grid');
        root.style.setProperty('--width', size+'px');
        root.style.setProperty('--height', size+'px');
        div.style.width=size;
        gridContainer.appendChild(div);
    }
}
createGrid(16);

document.querySelector("#gridContainer").addEventListener("mouseover", function(event){
        
        if(event.target.id != "gridContainer"){
            event.target.setAttribute('style', 'background-color: '+color);
            if(rainbow) color=getRandomRgb();
            root.style.setProperty('--color', color);
            console.log(event.target.id);
        }

  });
document.getElementById('eraser').onclick = function() {
    if(color != 'white'){
        color = "white";
    }else{
        color = "black";
    }
}
document.getElementById('gridSize').onclick = function() {
    gridContainer.textContent = '';
    let gridSize = window.prompt('What size should the grid be?', 16);
    createGrid(gridSize);
}
document.getElementById('rainbow').onclick = function() {
    
    if(rainbow == true){
        rainbow = false;
    }else{
        rainbow = true;
    }
}