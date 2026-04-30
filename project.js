// Variables
var lives = 3;
var points = 0;
// Create your sprites here

// Kibble
var kibble = createSprite(200,350);
kibble.setAnimation("cake");
kibble.scale = 0.25;

// Player
var player = createSprite(200,200);
player.setAnimation("dogRight");
player.scale = 0.10;

// Cat1
var cat1 = createSprite();
cat1.setAnimation("cat1");
cat1.x = randomNumber(150,250);
cat1.y = 0;
cat1.scale = 0.25;
cat1.velocityY = 2;

// Cat2
var cat2 = createSprite();
cat2.setAnimation("cat2");
cat2.x = randomNumber(150,250);
cat2.y = 0;
cat2.scale = 0.25;
cat2.velocityY = 2;

// Dog for points
var dog = createSprite(200,200);
dog.setAnimation("dog");
dog.x = randomNumber(150,250);
dog.y = 0;
dog.velocityY = 1.75;
dog.scale = 0.10;

// Draw function
function draw() {
  // draw the background
  gameBackground();
  // update the sprites
  catsTouchesKibble();
  movePlayer();
  displaceEnemies();
  catsTouchWater();
  showText();
  dogReachesKibble();
  dogTouchesPlayer();
  drawSprites();
  isDead();
}

// <---- Functions ---->
function gameBackground() { // Sets the game background for the game
  noStroke();
  if (points > 10) {
  background("pink");
} else {
  background(rgb(0,100,255));
}
  fill(rgb(100,100,100));
  rect(108,0,200,400);
  fill(rgb(80,80,80));
  rect(98,0,10,400);
  rect(300,0,10,400);
}

function catsTouchesKibble(){ // If either cat touches the kibble, it takes away a life and resets them.
  if (cat1.isTouching(kibble)){
    setCat1();
    lives = lives - 1;

  }
  if (cat2.isTouching(kibble)){
    setCat2();
    lives = lives - 1;
  }
}

function movePlayer(){ // Movement for player
  if (keyDown(RIGHT_ARROW)) {
    player.setAnimation("dogRight");
    player.x = player.x + 3;
  }
  if (keyDown(LEFT_ARROW)) {
    player.setAnimation("dogLeft");
    player.x = player.x - 3;
  }
  if (keyDown(UP_ARROW)) {
    player.y = player.y - 3;
  }
  if (keyDown(DOWN_ARROW)) {
    player.y = player.y + 3;
  }
}

function displaceEnemies(){ // Basically lets the plyer displaces the cats
  player.displace(cat1);
  player.displace(cat2);

}

function dogReachesKibble() { // If the dog touches the kibble, it resets the dog's position and adds a point
  if (dog.isTouching(kibble)) {
    setDog();
    points = points + 1;
  }
}

function dogTouchesPlayer() { // If the dog touches the player, then it will reset the dog and take away a life
  if (player.isTouching(dog)) {
    setDog();
    lives = lives - 1;
  }
}

function catsTouchWater(){ // If the cats either touch the water or go off the screen, reset them
  if (cat1.x < 100) {
    setCat1();
  }
  if (cat2.x < 100) {
    setCat2();
  }
  if (cat1.x > 300) {
    setCat1();
  }
  if (cat2.x > 300) {
    setCat2();
  }
  // If cats miss the kibble
  if (cat1.y > 405) {
    setCat1();
  }
  if (cat2.y > 405) {
    setCat2();
  }
}

// Text and variable stuff
function showText() {
  fill("white");
  textSize(20);
  text("Lives :",20,20,200,100);
  text(lives,20,40,200,100);
  text("Points :",20,60,200,100);
  text(points,20,80,200,100);
}

// Reset Functions
function setCat1() {
  cat1.x = randomNumber(150,250);
  cat1.y = 0;
}
function setCat2() {
  cat2.x = randomNumber(150,250);
  cat2.y = 0;
}
function setDog() {
  dog.x = randomNumber(150,250);
  dog.y = 0;
}

function isDead() { // If you have lost, say game over.
  if (lives <= 0) { // Game Over
    background("black");
    fill("blue");
    textSize(30);
    text("Game Over. Try again!" , 50, 200);
  }
  if (points >= 10) { // Finished game
    background("black");
    fill("red");
    textSize(30);
    text("You won!" , 50, 200);
  }
}
