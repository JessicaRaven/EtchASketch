const canvas = document.querySelector("#Canvas");

//generate canvas 16x16 or custom side length later
let row=[];
let boxes=[];
let sideLength=16;
let boxIndex=0;
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

for (const box of boxes){
    box.addEventListener("mouseover", draw);
    console.log("box");
}

function draw(e){
    console.log("test");
    pixel=e.target;
    pixel.classList.add("boxHover");
    console.log(pixel);


}


