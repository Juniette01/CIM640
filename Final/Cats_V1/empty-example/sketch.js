var bgImg;

var box;
var womanwalk;
var womanwalk2;
var cat;

var womanWalkX = 200;
var womanWalkY = 510;
var flipWoman = false;

var gravity = 0.2;

//
var score = 0;


function preload(){
    bgImg = loadImage("assets/BackgroundCity-1-800x800.png");
    
    womanwalk = loadAnimation("assets/w-walk-1.png", "assets/w-walk-2.png", "assets/w-walk-3.png","assets/w-walk-4.png","assets/w-walk-5.png","assets/w-walk-6.png");
    womanwalk2 = loadAnimation("assets/w2-walk-1.png", "assets/w2-walk-2.png", "assets/w2-walk-3.png","assets/w2-walk-4.png","assets/w2-walk-5.png","assets/w2-walk-6.png");
    box = loadImage("assets/box.png");
    cat = loadImage("assets/cat.png");
    
    

}

function setup() {
  createCanvas(700,700);
    
  
   
}

function draw() {
    background(bgImg);
    
      
    
    if(womanWalkX > width){
        flipWoman = true;
    }
    
    if(womanWalkX < 0){
        flipWoman = false;
    }
    
    
    if(flipWoman == true){
            animation(womanwalk2, womanWalkX, womanWalkY );

           womanWalkX = womanWalkX -2;
       }else{
               animation(womanwalk, womanWalkX, womanWalkY);

            womanWalkX  = womanWalkX +2;

       }
    //console.log(womanWalkX);
  
    image(cat,300,105);
    image(box,280,155);


        
    for(var i=0; i<allSprites.length; i++){
    var mySprite = allSprites[i];
    
    
   mySprite.addSpeed(gravity, 90);
 
        
        
        
    if(mySprite.position.y > height + 100){
            mySprite.remove();
        
  
    }
        var changeY = abs(mySprite.position.y - womanWalkY);
        if(changeY < 20 && womanWalkX > 200 & womanWalkX < 400){
           console.log("hit");
            mySprite.remove();
           
          
            
           }
        
        

    
    }
    
   // rect(260,510,100,100);
  
  //if(frameCount%10 == 0)
   // print("Sprite in the scene: " +allSprites.length);
  
    
        drawSprites();
    

    
  }
  
    
   
 
function mousePressed() {

    print("Sprite in the scene: " +allSprites.length);
//create sprite at this position
    
    if(allSprites.length == 0){
        var newSprite = createSprite(300, 155);

newSprite.addAnimation("normal", "assets/office1.png", "assets/office2.png", "assets/office3.png", "assets/office4.png", "assets/office5.png");

//set it to a random frame
newSprite.animation.stop();
var f = round(random(0, newSprite.animation.getLastFrame()));
newSprite.animation.changeFrame(f);
    
    }

    

}

  



    



    