let begin = false;

function beg(){
  if(begin === false){begin = true}
  else{ begin = false}
}

function rain(x,y){

  fill(204, 247, 255);
  rect(192,650,400,400);

  if(begin === true){
      for (var i = 0; i < x.length; i++) {
          noStroke();
          fill(0, x[i]-200, y[i]-500);
          ellipse(x[i], y[i], 10, 10);
          y[i] += i*1.5+1;
          if (y[i] > 1050) {
              y[i] = 655;
          }
      }
  }

}
