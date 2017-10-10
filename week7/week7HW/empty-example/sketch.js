var posX = 0;
var posY = 0;

function setup(){
   createCanvas(500,500);
    background("#f9f9f9");
    

    posX = 250;
    posY = 250;
    
    
}

function draw(){

    
    stroke("orange");
    strokeWeight(1);
    fill("orange");
    ellipse(posX, posY,200,200);
    
    fill("black");
    rect(posX -50,posY +20,100,30);
    fill("orange")
    triangle(posX +50, posY +20, posX +35, posY +40, posX +20, posY +20);
    triangle(posX -50, posY +20, posX -35, posY +40, posX -20, posY +20);
    
    stroke("brown");
    strokeWeight(1);
    fill("brown")
    ellipse(posX +0,posY -100,10,40);
    
    stroke("orange");
    strokeWeight(1);
    fill("white")
    ellipse(56, 46, 55, 55);
    ellipse(120, 146, 55, 55);
    ellipse(posX -120, posY -180, 25, 25);
    
    ellipse(posX +156, posY -46, 55, 55);
    ellipse(posX +120, posY -146, 55, 55);
    ellipse(posX +120, posY -180, 25, 25);
    ellipse(posX -20, posY -200, 55, 55);
    ellipse(posX -50, posY -200, 20, 20);
    
    stroke("black");
    strokeWeight(1);
    fill("black")
    triangle(posX -50, posY -20, posX -35, posY -40, posX -20, posY -20);
    triangle(posX +50, posY -20, posX +35, posY -40, posX +20, posY -20);

    
}