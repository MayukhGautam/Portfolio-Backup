
let xPositions = [500];
let yPositions = [655];

mouseClicked = function () {
    if(mouseX >= 197 && mouseX <= 587  && mouseY <= 1050 && mouseY >= 655){
    xPositions.push(mouseX);
    yPositions.push(655);
  }
}

function preload(){
  qFont = loadFont('/js/Quicksand-Medium.ttf');
  titleF = loadFont("/js/Quicksand-Bold.ttf");
}

function setup() {
  let cnv = createCanvas(windowWidth, 11000);
  cnv.parent('can');

  A_Setup(); //A* embedded
  let start_A = createButton('Start / Stop');
  start_A.position(720,5330);
  start_A.mousePressed(flip);

  let start_R = createButton('Click ON/OFF');
  start_R.position(600,650);
  start_R.mousePressed(beg);
}

function windowResized() {

  if(windowWidth >= 1500){
    resizeCanvas(windowWidth, 10000);
  }else{
    resizeCanvas(1500, 10000);
  }

}

function draw() {
  let list = ["Intro to Js", "Games & Visualizations", "Intro to HTML/CSS", "Natural Simulations", "Algorithms", "A* Pathfinder", "MicroBit", "Intro to SQL", "Computers", "The Internet"];
  let bg = color(0,202,202,155);
  background(255);
  textFont(titleF, 35);

  fill(bg);
  noStroke();
  rectMode(CENTER);
  rect(width/2,50,width,100,5);

  fill(255);
  textAlign(CENTER);
  text("Mayukh's Portfolio", width/2, 60);

  //Main rect
  fill(bg);
  rectMode(CORNER);
  rect(0, 200, width, 11000,5);

  fill(255);
  textSize(100);
  textAlign(LEFT);
  for(var i = 0; i<10; i++){

    text(i+1 + ") " + list[i], width-(width-40), 300 + i*1000);

  }

  fill(0);
  rect(140,5320, 570, 570, 5);
  rain(xPositions, yPositions);
  Pathfind(); //a* code



}
