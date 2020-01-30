
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
  start_A.position(790,5330);
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
  let bg = color(0,178,178,135);
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
  rect(140,5320, 640, 640, 5);
  rain(xPositions, yPositions);
  Pathfind(); //a* code

  textSize(20);
  fill(255);
  text("Intro to Javascript taught me the basic of well Javascript.\nNo doubt a language as popular as js will help me learn\nalot more and easier because of just how easy it is to\nvisualize code in this language. Javascript being a visual\nlanguage made the most impact on me since this aspect\naided in my learning the most.", 720, 430);
  text("The Games and Visualization module was full of concepts\nmade visual and also the basics of game design which in\ntheory could be usefull if I desire to pursue video game design\nas a career. It could also use useful if I were in need to make\na simulation of sorts although NS would be more useful in\nthat regard. The most impacting aspect of this module has\nto be the module's ability to push creativity.", 720, 1430);
  text("Intro to HTML/CSS was a module all about the very basic\nof web design. Learning these two programing languages\nwill one, help in the obvious, which is making webpages in\norder to display information and two, learning them will\nalso help in my ability to discect other wepsites. The most\nimpacting ascpect of this course was learing how easy it is\nto make a website. ", 720, 2430);
  text("Natural Siulations, where to begin? This module has helped\nme understand alot of physics and how they can be applied\non computer science. This module was by far the longest\nand in my opinion the most interesting as I thought simulating\nphysics would be much more diffucult than it was. The ascpect\nthat left the biggest impact on me was for sure simulating\ngravity as I learned gravity can be used in many different ways\nnot just as gravity. For example if you reverse gravity you can\ncreate a sort of repulstion field. ", 720, 3430);
  text("The Algorithms module was very interesting. One main thing\nthat I took away, besides how to appy algorithms, is that\nalgorithms can be applied in almost anything not only in\ncoding. I am not going to claim I fully understand algorithms\nbut I do understand them better than before I started this\ncourse, and this knowlledge will be benifical in my higher\neducation. The most impactful part of this course was the\nsheer dept to it. I had no idea they could be as complex and\nhave that many layers.", 720, 4430);
  text("A* Pathfinder wasn't a module in it of itself, instead it was\npart of a coding challenge. During the making of A* I\nlearnt alot: Computer science wise, I learnt about object and\nmanipulating them and the complexites related to their\nmanipulation on top of heuristics and their application. Team\ncoding wise, I learn how frustrating but also benifitial\nmultiple people working on the same project could be. The most\nimpacting ascpet of this module was seeing your creation become\nsomething really cool as well sharing your knowlledge with other\npeople.", 790, 5430);
  text("The MicroBit module was a unique one because it was the\nonly module where we worked with hardware, unless you\nconsider rubik's cubes as hardware. This module taught\nme how hardware and software go together. I can see this\nbeing a very useful base into further education in the hardware\nfield. Since a lot was premade we never had to really experience\nthe difficulties with hardware programming but nevertheless\nthe module was educational. The most impacting aspect of this\nmodule was seeing just how easy it has become to utilize\nhardware.", 800, 6430);
  text("Intro to SQL teaches basic creation of SQL tables\nand how to querry said tables. Learning the SQL\nlanguage will aid me with webdesign and website\ncreation no doubt as an easy way to store and\nreterive information is invaluable, I understand this\neven more so after completing this modual. The\nmost impactful aspect of this course was learning\nhow easy it is to organize information with SQL\nand how easily it can be searched for and reteived.\nI could see it being almost a nessecity.", 720, 7430);
  text("The Computers module was a big help. Not\nonly did it help me understand how computer\nfunction at the core it also got me interested\nenough to do my own reaserch and I have\ngotten into computer building. Using information\non file extention helped and will continue to help\nwhen it comes to manipulating computers and\ntheir OSs using their built in consoles. The most\nimpactful aspect of this module has to be learning\nbinairy and hexadecimal, it is almost like learning a\nnew language I would not say they are the most\nuseful things in the world but they have their purpose.", 800, 8430);
  text("The Internet is a big subject and I don't think one module is\nenough to cover it however, I did learn a lot. IP adresses, DNS,\nand TSL just to name a few. On top of that you learn about\nmalware and cyber attacks and how to defend agaisnt them.\nIn all honesty malware and cyber attacks interest me greatly\nand this course spurred me to do my own reaserch and with this\nnew information I was able to host a simulated attack on myself\n(for investigation only). The most impactful aspect of this module\nwas learning JUST how connect the internet is every aspect is linked\nto another aspect facilitating communication as well as data theft.", 800, 9430);


}
