let gridSize = 16;
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
        
        if(event.target.id != "gridContainer"){
            event.target.setAttribute('class', 'gridColor');
            console.log(event.target.id);
        }
       
      
  });