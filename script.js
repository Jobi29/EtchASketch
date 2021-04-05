let gridSize = 8;
let size = 480 / gridSize;
let color = "red";
const gridContainer = document.querySelector('#gridContainer');


for(let i=0; i < gridSize * gridSize;i++){
    const div = document.createElement('div');
    div.setAttribute('id', 'child'+i);
    div.setAttribute('class', 'grid');
    div.setAttribute('style', 'height: '+size+'px; width: '+size+'px');    
    div.style.width=size;
    gridContainer.appendChild(div);
}
document.querySelector("#gridContainer").addEventListener("mouseover", function(event){
    console.log(event.target.id);
    let target = getElementById(event.target.id);
    target.setAttribute('style', 'background: red');    
  });