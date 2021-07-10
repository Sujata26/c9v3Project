var btn_red;
var btn_green;

var r = 100;
var g = 120;
var b = 110;

function setup() {
  createCanvas(400, 400);  

  btn_red= createButton("Red");
  btn_red.position(80,50);
  btn_red.mousePressed(red_bg);

  btn_green= createButton("Green");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
}

function draw() {
  background(r,g,b);
}

function red_bg(){
  
 r = 255;
 g = 0;
 b = 0;
}

function green_bg(){
  
  r = 0;
  g = 255;
  b = 0;
 }
