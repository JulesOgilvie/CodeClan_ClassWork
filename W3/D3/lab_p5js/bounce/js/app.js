let img;

function preload(){
    img = loadImage("assets/yapper.png");
}

function setup(){
    // createCanvas(displayWidth, displayHeight);
    loadImage('assets/laDefense.jpg', img => {
        image(img, 0, 0);
    });
}