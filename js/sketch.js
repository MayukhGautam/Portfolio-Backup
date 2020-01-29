
function preload(){
  titleF = loadFont("/js/Quicksand-Bold.ttf");
}

function setup() {
  rectMode(CENTER);
  textAlign(CENTER);
  let cnv = createCanvas(windowWidth, 10000);
  cnv.parent('can');
}

function windowResized() {
  resizeCanvas(windowWidth, 10000);
}

function draw() {
  let list = ["Intro to Js", "Intro to Js", "Intro to HTML/CSS", "Advanced JS:Natural Simulations", "Algorithms", "Coding Challenge", "MicroBit", "Intro to SQL", "Computers", "The Internet"];
  let bg = color(0,202,202,155);
  background(255);
  textFont(titleF, 35);

  fill(bg);
  noStroke();
  rect(windowWidth/2,50,windowWidth,100,5);

  fill(255);
  text("Mayukh's Portfolio", windowWidth/2, 60);

  //Main rect
  fill(bg);
  rect(windowWidth/2, 5200, windowWidth, 10000,5);

  fill(255);
  textSize(100);
  for(var i = 0; i<10; i++){

    text(i+1 + ")", windowWidth-(windowWidth-70), 300 + i*1000);

  }

}
