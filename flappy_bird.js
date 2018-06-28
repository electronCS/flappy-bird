var bird;
var pipes;
var score;
var bg;
var gameOver;
var mode;
var paused;
var count;

function setup()
{
    var canvas = createCanvas(400, 600);
    canvas.parent('sketch-holder');


    gameOver = false;
    mode = 0;
    bg = loadImage("background1.png")
    score = 0;
    pipes = [];
    bird = new Bird();
    bird1 = new Bird();
    paused = false;
    count = 0;
    //pipes.push(new Pipe());
}

function draw()
{

    if (gameOver == false && paused == false)
    {
        background(bg);
        bird.show();
        if (mode == 1)
        {
            //bird.x = mouseX;
            bird.y = mouseY;
        }
        else {
            bird.update();
        }
        if (count % 80 == 0)
        {
            pipes.push(new Pipe());
        }
        for (var i = pipes.length - 1; i >=0; i--)
        {
            pipes[i].show();
            pipes[i].update();
            if (pipes[i].passed == 0 && pipes[i].x + pipes[i].w < bird.x)
            {
                pipes[i].passed = 1;
                score++;
            }
            if (pipes[i].hit(bird))
            {
                console.log("HIT");
                // for (var j = pipes.length - 1; j >=0; j--)
                // {
                //     pipes[j].vel = 0;
                // }
                gameOver = true;
                //console.log(i + " pipes:" + pipes[i].x + " bird:" + bird.x);
            }
            if (pipes[i].x < -50)
                pipes.splice(i, 1);
        }
        textSize(32);
        fill(255);
        rect(290, 120, 50, 40);
        fill(0);
        text(score, 300, 150);
        count++;
    }
    else if (gameOver == true)
    {
        textSize(32);
        fill(0);
        text("GAME OVER", 100, 250);
        text("YOUR SCORE: " + score, 75, 300);
        text("Press r to restart ", 75, 350);
    }
    else {
        textSize(32);
        fill(0);
        text("Click to unpause", 100, 250);

    }
}

function mousePressed()
{
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height)
        paused = !paused;
    console.log(3);
}

function keyPressed()
{
    if (key == ' ')
        bird.up();
    else if (key == 'R')
        setup();
    else if (key == 'N')
    {
        mode = (mode + 1) % 2;
        bird.velocity = 0;
    }
}
