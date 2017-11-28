var interfaceItems = [];

var brushSize = 10;

var paintColor = "orange";



function setup() {
    createCanvas(400, 400);

    interfaceItems.push(new interface(50, 100, 50, 
    color(255, 0, 0)));
    
    interfaceItems.push(new interface(125, 100, 50, 
    color(0, 255, 0)));
    
    interfaceItems.push(new interface(200, 100, 50, 
    color(0, 0, 255)));
    
    interfaceItems.push(new interface(275, 100, 50, 
    color(100, 0, 0)));

}

function draw() {
    //fill(0);
    ellipse(mouseX,mouseY, brushSize,brushSize, fill(paintColor), stroke(paintColor));
    


    interfaceItems[0].check();
    interfaceItems[0].display();
    interfaceItems[1].check();
    interfaceItems[1].display();
    interfaceItems[2].check();
    interfaceItems[2].display();
    interfaceItems[3].check();
    interfaceItems[3].display();

}

function mousePressed() {
    if(interfaceItems[0].check() == true){
        console.log("pressed red button");
        brushSize++;
        paintColor=color(255, 0, 0);
}
    if(interfaceItems[1].check() == true){
        brushSize --;
        paintColor=color(0, 255, 0);
    }
    
    if(interfaceItems[2].check() == true){
        brushSize++;
        paintColor=color(0, 0, 255);
    }
    
     if(interfaceItems[3].check() == true){
        brushSize--;
        paintColor=color(100, 0, 0);
    }
    

    
   
    
}


function interface(tempX,tempY,tempBoxSize,tempColor){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.setFill = tempColor;
    
    this.overlay = false;

    this.display = function () {
        fill(this.setFill);
        rect(this.x, this.y, this.boxSize, this.boxSize);
        
        if(this.overlay == true){
        fill(127,200);
        rect(this.x, this.y, this.boxSize, this.boxSize);
        }
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
            this.overlay = true;
            return true;
        } else {
            this.overlay = false;
            return false;
        }
    }
}








