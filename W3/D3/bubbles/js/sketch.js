// set up the variable bubbles
let bubbles; 
let spring;

// function setup. Sets up the canvas, bubbles, and for loop to produce multiple bubbles
function setup(){
    // canvas created before everything else. Refreshes FIRST allowing the screen to be cleared every time the screen refreshes
    createCanvas(640, 480);
    bubbles = [];
    // while the counter is below 80, it increments. Every increment the x and y coordinates, diameter, and speed are randomized for each bubble
    for (let i = 0; i < 80; i++){
        let x = random() * width;
        let y = random() * height;
        let diameter = random(50, 130);
        let speed = random(2, 9);
        // pushes the generated values into the array
        bubbles.push(createBubbles(x, y, diameter, speed));
    }
}

// draw function shows the bubbles and background colour on the window
function draw(){
    background('#EFDC05');
    // going through every bubble in the array bubbles and calling on the functions that get them displayed and moving
    for (let bubble of bubbles){
        bubble.draw();      
        bubble.move();
        bubble.collide();
    }
}

// function createBubbles takes in the generated values from the array
function createBubbles(xPos, yPos, diameter, bubblesSpeed){
    return {
        // assigning the passed in values to inFunction variables
        x: xPos,
        // getting the bubble to initialise off canvas
        y: height + yPos,
        diameter: diameter,
        bubblesSpeed: bubblesSpeed,
        // sets the origin point for getting bubbles back down to the bottom of the canvas 
        origin: height + diameter/2,
        // draw key is a function that has all the info on how to draw the bubble on the screen
        draw: function(){
            fill(30, 144, 255, 64);
            stroke(0, 0);
            // this.[axis] tells javascript we are using a value from a key in the same object
            ellipse(this.x, this.y, this.diameter);
            fill(255);
            ellipse(this.x + this.diameter/4, this.y - this.diameter/4, this.diameter/8)
        },
        // move function has the info on how the bubble should move on the screen
        move: function(){
            // gets the bubble moving by detracting the speed from the y coordinate so that every time the screen refreshes, the bubble moves by the bubbleSpeed amount. We use -= instead of += because we want the bubble to move up instead of down
            this.y -= this.bubblesSpeed;
            // if loop to check if the bubble is off of the canvas and has the height reset to the original number
            if (this.y < 0 - diameter/2){
                this.y = this.origin;
            }
        }
    }
}



// function drawBubbles(x, y, diameter){
//     fill(30, 144, 255, 64);
//     stroke(0, 0);
//     ellipse(x, y, diameter);
//     fill(255);
//     ellipse(x + diameter/4, y - diameter/4, diameter/8);
// }

