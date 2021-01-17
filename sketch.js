var cat;
var catImg;
var catRunning;
var catEating;
var mouse;
var mouseImg;
var background1;
var backgroundImg;

function preload() {

    catImg = loadImage("images/tomOne.png");
    catRunning = loadAnimation("images/tomTwo.png", "images/tomThree.png");
    catEating = loadAnimation("images/tomFour.png");
    mouseImg = loadAnimation("images/jerryOne.png", "images/jerryTwo.png", "images/jerryThree.png", "images/jerryFour.png");
    backgroundImg = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,1000);

    background1 = createSprite(500,500);
    background1.addImage("running", backgroundImg);

    cat = createSprite(920, 790, 10, 10);
    cat.addImage("running", catImg);
    cat.scale = 0.1;

    mouse = createSprite(50, 790, 10, 10);
    mouse.addAnimation("running", mouseImg);
    mouse.scale = 0.1;

}

function draw() {
    background("black");
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
         cat.velocityX = 0;
         cat.addAnimation("running", catEating )
         cat.changeAnimation("running");

    }
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("running", catRunning);
        cat.changeAnimation("running");
    }
}
