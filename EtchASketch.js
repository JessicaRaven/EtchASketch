const canvas = document.querySelector("#Canvas");

//generate canvas 16x16 or custom side length later
let row=[];
let boxes=[];
let sideLength=16;
let boxIndex=0;
//reset buttons
const reset= document.querySelector('.reset');
const resolution =document.querySelector('.resolution');

reset.addEventListener("click",eraseCanvas);

function generateCanvas(){
    for(let i=0;i<=(sideLength-1);i++){
        row[i]=document.createElement('div');
        canvas.appendChild(row[i]);
        row[i].classList.add("row");

        for(let j=0;j<=(sideLength-1);j++){
            boxes[boxIndex]=document.createElement('div');
            row[i].appendChild(boxes[boxIndex]);
            boxes[boxIndex].classList.add("box");
            boxIndex++;
        }
    }
}
generateCanvas();

for (const box of boxes){
    box.addEventListener("mouseover", draw);
}

function draw(e){
    pixel=e.target;
    pixel.classList.add("boxHover");


}

function eraseCanvas(){
    for(const pixel of boxes){
        console.log("test");
        pixel.classList.remove("boxHover");
    }
}