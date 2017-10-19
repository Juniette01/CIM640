var posX = 0;
var posY = 0;

var bgColor;

var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;

var hitZoneX = 100;
var hitZoneY = 100;

var bats
var ghost
var candy


function preload(){
    bgImage = loadImage("assets/backgroundblue.jpg");
    bgImage2 = loadImage("assets/backgroundpurple.jpg");
    bats = loadImage("assets/bats.png");
    ghost = loadImage("assets/ghost2.png");
    candy = loadImage("assets/candy.png");
    
}

function setup() {
  createCanvas(700, 438);
  posX = width / 2;
  posY = height / 2;
    
  bgColor = color("black");
    
    bgChange = createButton("purple");
    bgChange.position(100,500);
    bgChange.mousePressed(changeBgFunction);
     
    bgChange2 = createButton("Blue");
    bgChange2.position(0,500);
    bgChange2.mousePressed(changeBgFunction2);
    
    currentBgImage = bgImage;
   
}

function draw() {
  background(bgColor);
    
    image(currentBgImage, 0,0, 700,438);
    
  console.log("mouseX: " + mouseX + "mouseY: " + mouseY);
  posX = mouseX;
  posY = mouseY;
    
    //HOMEWORK
    
    stroke("orange");
    strokeWeight(1);
    fill("orange");
    ellipse(posX, posY,200,200);
    var wiggleX = map(mouseX, 0, width, -10, 10);
    
    fill("black");
    rect(posX -50,posY +20,100,30);
    fill("orange")
    triangle(posX +50, posY +20, posX +35, posY +40, posX +20, posY +20);
    triangle(posX -50, posY +20, posX -35, posY +40, posX -20, posY +20);
    
    stroke("brown");
    strokeWeight(1);
    fill("brown")
    ellipse(posX +0,posY -100,10,40);
    
//    stroke("orange");
//    strokeWeight(1);
//    fill("white")
//    ellipse(56, 46, 55, 55);
//    ellipse(120, 146, 55, 55);
//    ellipse(posX -120, posY -180, 25, 25);
//    
//    ellipse(posX +156, posY -46, 55, 55);
//    ellipse(posX +120, posY -146, 55, 55);
//    ellipse(posX +120, posY -180, 25, 25);
//    ellipse(posX -20, posY -200, 55, 55);
//    ellipse(posX -50, posY -200, 20, 20);
    
    stroke("black");
    strokeWeight(1);
    fill("black")
    triangle(posX -50, posY -20, posX -35, posY -40, posX -20, posY -20);
    triangle(posX +50, posY -20, posX +35, posY -40, posX +20, posY -20);

    
    
    var hitZoneDist = dist(hitZoneX,hitZoneY,mouseX,mouseY);
    console.log("hitZoneDist " + hitZoneDist);
    
    if(hitZoneDist <= 5){
        console.log("totally in the zone");
        image(bats,0,0);
        
        
    
       }
    
    var hitZoneDist = dist(hitZoneX +200, hitZoneY -20, mouseX, mouseY);
    console.log("hitZoneDist " + hitZoneDist);
    
    if(hitZoneDist <= 5){
        console.log("totally in the zone 2");
        image(ghost,0,0);
    }
    
    var hitZoneDist = dist(hitZoneX +400, hitZoneY +40, mouseX, mouseY);
    console.log("hitZoneDist " + hitZoneDist);
    
    if(hitZoneDist <= 5){
        console.log("totally in the zone 3");
        image(candy,0,0);
    }
    
    //------------
    
    //bats
    stroke("white")
    strokeWeight(1);
    ellipse(hitZoneX, hitZoneY, 10, 10);
    
    //ghost
    strokeWeight(1);
    ellipse(hitZoneX +200, hitZoneY -20, 10, 10);
    
        //candy
    strokeWeight(1);
    ellipse(hitZoneX +400, hitZoneY +40, 10, 10);

}

function mousePressed(){
    bgColor = color(0,255,0);
}

function changeBgFunction(){
    currentBgImage = bgImage2;
    //console.log("loading bgImage2");
    
}

function changeBgFunction2(){
    currentBgImage = bgImage;
}







