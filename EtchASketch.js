const canvas = document.querySelector("#Canvas");

//generate canvas 16x16
let row=[];
let box=[];
let sideLength=16;
for(let i=0;i<=(sideLength-1);i++){
    row[i]=document.createElement('div');
    canvas.appendChild(row[i]);
    row[i].classList.add("row");

    for(let j=0;j<=(sideLength-1);j++){
        box[j]=document.createElement('div');
        row[i].appendChild(box[j]);
        box[j].classList.add("box");
    }
}


