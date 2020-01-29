
function preload(){
  qFont = loadFont('/js/Quicksand-Medium.ttf');
  titleF = loadFont("/js/Quicksand-Bold.ttf");
}

function setup() {
  rectMode(CENTER);
  textAlign(CENTER);
  let cnv = createCanvas(windowWidth, 11000);
  cnv.parent('can');

  nsVid = createVideo(['/js/Ns.mp4'], vidLoad);
  nsVid.size(700,700);
  nsVid.position(200,3200);
}

function vidLoad() {
  nsVid.loop();
  nsVid.volume(0);
}

function windowResized() {

  if(windowWidth >= 1500){
    resizeCanvas(windowWidth, 10000);
  }else{
    resizeCanvas(1500, 10000);
  }

}

function draw() {
  let list = ["Intro to Js", "Algorithms", "Intro to HTML/CSS", "Natural Simulations", "Algorithms", "Coding Challenge", "MicroBit", "Intro to SQL", "Computers", "The Internet"];
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
  textAlign(CORNER);
  for(var i = 0; i<10; i++){

    text(i+1 + ") " + list[i], width-(width-40), 300 + i*1000);

  }

}
