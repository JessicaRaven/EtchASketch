const canvas = document.querySelector("#Canvas");

//set default parameters
let sideLength=16;
let rows=[];
let boxes=[];
let boxIndex=0;
//reset buttons
const reset= document.querySelector('.reset');
const resolution =document.querySelector('.resolution');

reset.addEventListener("click",eraseCanvas);
resolution.addEventListener("click",changeResolution);

generateCanvas();

function generateCanvas(){
    rows=[];
    boxes=[];
    boxIndex=0;

    for(let i=0;i<=(sideLength-1);i++){
        rows[i]=document.createElement('div');
        canvas.appendChild(rows[i]);
        rows[i].classList.add("row");

        for(let j=0;j<=(sideLength-1);j++){
            boxes[boxIndex]=document.createElement('div');
            rows[i].appendChild(boxes[boxIndex]);
            boxes[boxIndex].classList.add("box");
            boxes[boxIndex].style.backgroundColor="rgba(255,255,255,0.0)";
            boxIndex++;
        }
    }

    for (const box of boxes){
        box.addEventListener("mouseover", draw);
    }
}


function draw(e){
    pixel=e.target;
    let hue=(Math.floor(Math.random()*357))+1;

    //returns alpha value and covert to hsl
    let alpha=pixel.style.backgroundColor.split(",");
    if (alpha.length==4){
    alpha=alpha[3];
    alpha.trim();
    alpha=alpha.slice(0,-1);
    alpha = +alpha;
    alpha*=100;
    alpha+=10;
    }
    else{
        alpha=100;
    }
    
    pixel.style.backgroundColor= `hsla(${hue},100%,50%,${alpha}%)`;
    console.log(pixel.style.backgroundColor);
}

function eraseCanvas(){
    for(const pixel of boxes){
        console.log("test");
        pixel.style.backgroundColor="rgba(255,255,255,0)";
    }
}

function changeResolution(){
    //prompt for size and fit into limits
    sideLengthOld=sideLength;

    sideLength=prompt("side length max 100px",16);
    sideLength= +sideLength;
    if (sideLength>100){
        sideLength=100;
    }
    else if (sideLength<=0){
        sideLength=1;
    }
    console.log(sideLength);

    //erase old grid
    for (const row of rows){
        for (let i=0;i<=(sideLengthOld-1);i++){
            row.removeChild(boxes[0]);
            boxes.shift();
        }
        console.log("row removal iteration");
    }

    for (const row2 of rows){
        canvas.removeChild(row2);
    }
    generateCanvas();
}

