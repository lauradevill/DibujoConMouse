let canva = document.getElementById("myCanvas");//Get Canvas
let dArea = canva.getContext("2d");//Get Context of canvas
let button = document.getElementById("eraseButton");//Get erase button
button.addEventListener("click", eraseDraw);

//Erase the draw
function eraseDraw(){
    window.location.reload();
}


//Paint a line in canvas
function drawLine(color, xInitial, yInitial, xFinal, yFinal, drawingArea){
    drawingArea.beginPath();
    drawingArea.strokeStyle = color;
    drawingArea.lineWidth = 3
    drawingArea.moveTo(xInitial, yInitial);
    drawingArea.lineTo(xFinal, yFinal);
    drawingArea.stroke();
    drawingArea.closePath();
}


window.addEventListener("mousedown", drawWithMouse);
let xI = window.layerX; //initial point in x given by the user click
let yI = window.layerY; //initial point in y given by the user click

//let xI = canva.width / 2; //initial point in x (canvas center in x)
//let yI = canva.height / 2; //initial point in y (canvas center in y)

//Paint using the mouse
function drawWithMouse(event){
    let xF = event.layerX;
    let yF = event.layerY; 

    console.log(event);

    drawLine("#fff952", xI, yI, xF, yF, dArea);
    xI = xF;
    yI = yF;
}

