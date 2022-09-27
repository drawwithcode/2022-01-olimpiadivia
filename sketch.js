
//define the color list for the random mode
const colorList =[ 
  '#120c64' ,
  '#a0ac47' ,
  '#a56285',
  '#9d0613',
  '#010101',
   '#FFFFFF' ];
//define a and s for the scale factor
let a = 0.0;
let s = 0.0;


function setup() {
createCanvas(984.5, 1299);
angleMode (DEGREES) //I want to use degrees for the rotation, not radians
frameRate (6)
}

//create background
function draw() {
background (56, 76, 147);
let black = "black"

//create a function for the screen that makes
//an interaction between mouse and drawing
push ()
fill (black)
stroke (0.5)
line (mouseX, mouseY, pmouseX, pmouseY) //mouse positions based
pop()



// create poligon star alike using vertex
push ()
//use random to define the color
let colorHex1 = random(colorList);
fill (color(colorHex1));

beginShape ();
noStroke (); 
vertex (60, 420);
vertex (160, 400);
vertex (200, 350);
vertex (190, 400);
vertex (260, 380);
vertex (220, 410);
vertex (225, 460);
vertex (220, 500);
vertex (200, 480)
vertex (160, 430);
endShape (CLOSE)
pop()

//define black circles 1 and 2 with 'circle'
push ()
noStroke();
fill (black);
//create a scale with loop for each circle using a and s
a = a + 40;
s = 2 + cos(a); 
translate (330, 540);
scale (s);
circle (0, 0, 7);
pop();

push()
noStroke();
fill (black);
//the scale function again
a = a + 40; 
s = 2 + cos (a);
translate (780, 780);
scale (s);
circle (0, 0, 7)
pop()


//create 'black hat' 
push()
strokeWeight (1)
line (500, 640, 640, 600)
pop()

push ()
noFill()
strokeWeight (1)
beginShape()
vertex (550, 625)
vertex (530, 540)
vertex (600, 520)
vertex (600, 610)
endShape()
pop()


// create the line inside the hat 
push ()
noFill()
strokeWeight (10)
strokeCap (ROUND)
strokeJoin (ROUND);
beginShape ()
vertex (550, 545)
vertex (545, 560)
vertex (570, 540)
vertex (560, 570)
vertex (580, 560)
vertex (560, 580)
vertex (580, 570)
vertex (560, 600)
vertex (590, 590)
vertex (570, 610)
endShape ()
pop ()

//create the 'dancer'
push ()
fill(black)
circle (580, 640, 7)
pop()

//pink part
push();
let rosa = color(158, 91, 126);
strokeWeight (3)
stroke (rosa);
noFill ()
beginShape(); //pink curve using curveVertex
curveVertex(480, 730);
curveVertex(490, 730);
curveVertex(540, 700);
curveVertex(560, 670);
endShape()

beginShape () //second pink curve
curveVertex (580, 660)
curveVertex (585, 680)
curveVertex (590, 700)
curveVertex (610, 730)
curveVertex (630, 740)
curveVertex (650, 745)
endShape ()
pop()

//create pink area
push ()
fill (rosa)

noStroke ()
beginShape()
curveVertex (510, 720)
curveVertex (520, 725)
curveVertex (525, 730)
curveVertex (530, 720)
curveVertex (530, 730)
curveVertex (540, 730)
curveVertex (545, 730)
curveVertex (555, 730)
curveVertex (560, 720)
curveVertex (560, 735)
curveVertex (570, 735)
curveVertex (580, 730)
curveVertex (580, 740)
curveVertex (585, 745)
curveVertex (600, 740)
curveVertex (610, 740)
curveVertex (620, 740)
curveVertex (620, 735)
curveVertex (610, 730)
curveVertex (590, 700)
curveVertex (585, 680)
curveVertex (570, 675)
curveVertex (575, 670)
curveVertex (565, 670)
curveVertex (560, 670)
curveVertex (540, 700)
curveVertex (530, 707)
endShape (CLOSE)
pop()


push () //yellow lines
let giallo = color(151, 163, 73);

strokeWeight (1)
stroke (giallo)
line (575, 645, 560, 670)
line (585, 647, 585, 680)
pop()

//yellow area
push ()
fill (giallo)
noStroke ()

beginShape ()
curveVertex (585, 647)
curveVertex (578, 650)
curveVertex (575, 645)
curveVertex (572, 655)
curveVertex (582, 662)
curveVertex (584, 666)
endShape (CLOSE)
pop()

//create curve at the top
push ()
noFill()
strokeWeight (0.5)
beginShape ()
curveVertex (560, 20)
curveVertex (580, 30)
curveVertex (660, 90)
curveVertex (720, 120)
curveVertex (730, 160)
curveVertex (740, 220)
curveVertex (770, 260)
curveVertex (780, 310)
curveVertex (770, 330)
curveVertex (760, 370)
curveVertex (760, 390)
curveVertex (750, 430)
curveVertex (755, 450)
curveVertex (740, 480)
curveVertex (730, 500)
curveVertex (720, 510)
curveVertex (710, 530)
curveVertex (715, 550)
endShape ()
pop()

//create central line divided in two parts
push()
beginShape()
noFill()
strokeWeight (0.5)
curveVertex (600, 140)
curveVertex (480, 170)
curveVertex (460, 180)
curveVertex (450, 190)
curveVertex (410, 200)
curveVertex (340, 220)
curveVertex (320, 230)
curveVertex (323, 236) //angle
//part taht is going down
curveVertex (350, 280)
curveVertex (380, 320)
curveVertex (400, 380)
curveVertex (400, 410)
curveVertex (410, 440)
curveVertex (420, 490)
curveVertex (430, 510)
curveVertex (440, 560)
curveVertex (460, 630)
curveVertex (480, 700)
curveVertex (510, 790)
curveVertex (520, 840)
curveVertex (525, 850)
curveVertex (530, 900)
curveVertex (540, 940)
curveVertex (560, 1000)
curveVertex (600, 1080)
curveVertex (590, 1100)
endShape()
pop()

// create black poligon-triangle 
push ()
let colorHex2 = random(colorList);
fill (color(colorHex2));

beginShape ();
noStroke ()
vertex (360,470);
vertex (400, 450);
vertex (500, 400);
vertex (680, 300);
vertex (700, 400);
vertex (600, 410);
vertex (490, 430);
vertex (410, 460)
endShape(CLOSE);
pop ()

//'smile' curve
push()
beginShape ()
noFill()
curveVertex (400, 660)
curveVertex (440, 710)
curveVertex (490, 730)
curveVertex (510, 740)
curveVertex (540, 750)
curveVertex (600, 750)
curveVertex (650, 740)
curveVertex (690, 710)
curveVertex (700, 700)
curveVertex (710, 690)
curveVertex (720, 680)
endShape()
pop()

//spiral
push ()
strokeWeight (1)
noFill()
beginShape ()
curveVertex (620, 750)
curveVertex (610, 770)
curveVertex (640, 780)
curveVertex (670, 790)
curveVertex (680, 780)
curveVertex (670, 780)
curveVertex (620, 800)
curveVertex (590, 830)
curveVertex (620, 840)
curveVertex (710, 850)
curveVertex (690, 860)
curveVertex (630, 880)
curveVertex (590, 910)
curveVertex (660, 940)
curveVertex (750, 940)
curveVertex (640, 970)
curveVertex (600, 1000)
curveVertex (670, 1040)
curveVertex (720, 1040)
curveVertex (740, 1040)
curveVertex (710, 1080)
curveVertex (740, 1120)
curveVertex (741, 1130)
endShape ();
pop()

//create black hole near the red part
push()
noFill ()
strokeWeight (1.5)
ellipse (510, 1230, 10, 20)
line (510, 1220, 530, 1200)

//create red part at the bottom
push ()
let colorHex3 = random(colorList);
fill (color(colorHex3));

strokeWeight (1)
noStroke ()

beginShape ()
curveVertex (510, 1220)
curveVertex (490, 1200)
curveVertex (470, 1190)
curveVertex (460, 1170)
curveVertex (465, 1160)
curveVertex (480, 1140)
curveVertex (485, 1150)
curveVertex (490, 1140)
curveVertex (500, 1150)
curveVertex (510, 1140)
curveVertex (520, 1150)
curveVertex (530, 1145)
curveVertex (545, 1145)
curveVertex (550, 1140)
curveVertex (570, 1130)
curveVertex (575, 1130)
curveVertex (580, 1110)
curveVertex (590, 1100) 
curveVertex (595, 1100)//highest point
curveVertex (610, 1090)
curveVertex (620, 1085)
curveVertex (635, 1085)
curveVertex (660, 1090)
curveVertex (670, 1110)
curveVertex (655, 1150)
curveVertex (620, 1170)
curveVertex (570, 1180)
curveVertex (530, 1200)
curveVertex (520, 1210)
curveVertex (510, 1210)
endShape (CLOSE)
pop()

//create rotation of the rectangle in the bottom 
push ()
translate (740,1130)
rotate (frameCount * 60)
//create rectangle
noStroke ()
fill (black)
rect (-20, -12, 40, 20, 8, 8, 8, 8)
pop ()

//stop the loop after a certain value of frameCount
//the result changes everytime I load the page
if (frameCount == 120) {noLoop()}
}


