var playing = false;
var solfa;
var button, button1, cnv3;
var CC = 261.63;
var DD = 293.66;
var EE = 329.63;
var FF = 349.23;
var GG = 392;
var AA = 440;
var BB = 493.88;
var C2 = 523.25;
var Cs = 277.18;
var Fs = 369.99;
var v1, v2, v3, v4, v5, v6, v7, v8, v9, v10;
var input1, input2, input3, input4, input6, input7, input8, input9, input10;

function preload() {
  example = loadImage('C-MajorScale.png');
}

function setup() {

  cnv3 = createCanvas(1250, 1100);
  background(255);

  v1 = createVector(75, 970);
  v2 = createVector(175, 970);
  v3 = createVector(275, 970);
  v4 = createVector(375, 970);
  v5 = createVector(475, 970);
  v6 = createVector(575, 970);
  v7 = createVector(675, 970);
  v8 = createVector(775, 970);
  v9 = createVector(875, 970);
  v10 = createVector(975, 970);

  input1 = createInput();
  input1.position(850, 480);
  
  input2 = createInput();
  input2.position(850, 520);
  
  input3 = createInput();
  input3.position(850, 560);
  
  input4 = createInput();
  input4.position(850, 600);
  
  input5 = createInput();
  input5.position(850, 640);
  
  input6 = createInput();
  input6.position(850, 680);
  
  input7 = createInput();
  input7.position(850, 720);
  
  input8 = createInput();
  input8.position(850, 760);
  
  input9 = createInput();
  input9.position(850, 800);
  
  input10 = createInput();
  input10.position(850, 840);

  image(example, 40, 220); // C major scale

  solfa = createVideo(['doremi.mov', 'doremi.mp4']); // clip from The Sound of Music
  solfa.size(width / 2, height / 2);
  solfa.position(50, 410);
  button = createButton('Play');
  button.position(665, 461);
  button.mousePressed(playSolfa);

  textSize(40);
  textStyle(BOLD);
  fill(255, 125, 0);
  text("Activity 3: Introduction to Note Names and Solfège", 175, 100);

  textSize(20);
  textStyle(NORMAL);
  fill(0);
  text("Now that we know what scales and chords sound like, we will learn the names of the notes that make them up!", 50, 175);
  text("There are two systems: letter names, and solfège.", 50, 225);
  text("This is the C major scale in letter names and solfège:", 50, 260);
  text("Click on the noteheads to hear the notes!", 700, 270);
  text("Watch this clip from 'The Sound of Music' for a fun way to learn solfa:", 50, 475);
  text("Now try this matching exercise: find out which note each musical ball plays and write its letter name (ALL CAPS)\nin the boxes. Click on the balls to hear the notes, and then use the scale above to compare the sounds.", 50, 890);
  text("Hint: click on the treble clef of the scale to see 2 extra notes you might need!", 50, 1050);
  textSize(10);
  text("click me!", 50, 300);

  env = new p5.Env();
  env.setADSR(0.02, 0.05, 0.5, 0.5);
  env.setRange(1, 0);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(env);
  osc.start();

  // Musical balls
  fill(102, 0, 51);
  ellipse(v1.x, v1.y, 50, 50); // A
  fill(153, 0, 153);
  ellipse(v2.x, v2.y, 50, 50); // D
  fill(102, 0, 204);
  ellipse(v3.x, v3.y, 50, 50); // C#
  fill(51, 51, 255);
  ellipse(v4.x, v4.y, 50, 50); // E
  fill(0, 128, 255);
  ellipse(v5.x, v5.y, 50, 50); // G
  fill(0, 255, 255);
  ellipse(v6.x, v6.y, 50, 50); // F
  fill(0, 255, 0);
  ellipse(v7.x, v7.y, 50, 50); // F#
  fill(255, 255, 0);
  ellipse(v8.x, v8.y, 50, 50); // B
  fill(255, 128, 0);
  ellipse(v9.x, v9.y, 50, 50); // C'
  fill(255, 0, 0);
  ellipse(v10.x, v10.y, 50, 50); // C
  
  // Miniature representations of the above
  fill(102, 0, 51);
  ellipse(815, 488.5, 10, 10); // A
  fill(153, 0, 153);
  ellipse(815, 528.5, 10, 10); // D
  fill(102, 0, 204);
  ellipse(815, 568.5, 10, 10); // C#
  fill(51, 51, 255);
  ellipse(815, 608.5, 10, 10); // E
  fill(0, 128, 255);
  ellipse(815, 648.5, 10, 10); // G
  fill(0, 255, 255);
  ellipse(815, 688.5, 10, 10); // F
  fill(0, 255, 0);
  ellipse(815, 728.5, 10, 10); // F#
  fill(255, 255, 0);
  ellipse(815, 768.5, 10, 10); // B
  fill(255, 128, 0);
  ellipse(815, 808.5, 10, 10); // C'
  fill(255, 0, 0);
  ellipse(815, 848.5, 10, 10); // C
  
  button1 = createButton("Submit");
  button1.position(input10.x + input10.width + 50, input10.y);
  button1.mousePressed(check);
}

function draw() {
}

//
//
//
//FUNCTIONS
//
//
//

function envAttack() {
  env.triggerAttack();
}

function mouseReleased() {
  env.triggerRelease();
}

function mousePressed() {

  var CC = 261.63;
  var DD = 293.66;
  var EE = 329.63;
  var FF = 349.23;
  var GG = 392;
  var AA = 440;
  var BB = 493.88;
  var C2 = 523.25;
  var Cs = 277.18;
  var Fs = 369.99;

  envAttack();
  
  if (mouseX > 81 && mouseX < 114 && mouseY > 294 && mouseY < 1373) {
  sharps();
  }
  
  // Notes on the pentagram

  if (mouseX > 135 && mouseX < 150 && mouseY > 362 && mouseY < 372) {
    osc.freq(CC);
  } else if (mouseX > 259 && mouseX < 275 && mouseY > 357 && mouseY < 367) {
    osc.freq(DD);
  } else if (mouseX > 383 && mouseX < 400 && mouseY > 352 && mouseY < 362) {
    osc.freq(EE);
  } else if (mouseX > 509 && mouseX < 523 && mouseY > 347 && mouseY < 357) {
    osc.freq(FF);
  } else if (mouseX > 655 && mouseX < 670 && mouseY > 342 && mouseY < 352) {
    osc.freq(GG);
  } else if (mouseX > 780 && mouseX < 795 && mouseY > 336 && mouseY < 346) {
    osc.freq(AA);
  } else if (mouseX > 905 && mouseX < 919 && mouseY > 332 && mouseY < 342) {
    osc.freq(BB);
  } else if (mouseX > 1029 && mouseX < 1043 && mouseY > 326 && mouseY < 336) {
    osc.freq(C2);
  } else {
    osc.freq(0);
  }

  // Notes from the ellipses

  if (mouseX > v1.x - 25 && mouseX < v1.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(AA);
  }
  if (mouseX > v2.x - 25 && mouseX < v2.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(DD);
  }
  if (mouseX > v3.x - 25 && mouseX < v3.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(Cs);
  }
  if (mouseX > v4.x - 25 && mouseX < v4.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(EE);
  }
  if (mouseX > v5.x - 25 && mouseX < v5.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(GG);
  }
  if (mouseX > v6.x - 25 && mouseX < v6.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(FF);
  }
  if (mouseX > v7.x - 25 && mouseX < v7.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(Fs);
  }
  if (mouseX > v8.x - 25 && mouseX < v8.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(BB);
  }
  if (mouseX > v9.x - 25 && mouseX < v9.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(C2);
  }
  if (mouseX > v10.x - 25 && mouseX < v10.x + 25 && mouseY > 945 && mouseY < 995) {
    osc.freq(CC);
  }
}

function playSolfa() {
  if (playing) {
    solfa.pause();
    button.html('Play');
  } else {
    solfa.loop();
    button.html('Pause');
  }
  playing = !playing;
}

function sharps() {

  fill(0);
  // C notehead
  ellipse(204, 366,10, 8);
  // F notehead
  ellipse(589, 350, 10, 8);
  // stroke across the C
  line(194, 366, 214, 366);
  // stem on C
  line(209, 326, 209, 366);
  // stem on F
  line(594, 310, 594, 350);
  // # on the C
  line(184, 350, 184, 382); // vertical
  line(188, 350,188, 382);
  line(180, 374, 192, 351); // slanted
  line(180, 381,192, 358);
  // # on the F
  line(569, 334, 569, 368); // vertical
  line(573, 334, 573, 368);
  line(565, 358,577, 337); // slanted
  line(565,365,577, 344);
  
  textSize(20);
  text("C#", 200, 402);
  text("F#", 585, 399);
}

function check() { // green ticks for correct answers; red crosses for wrong answers. Only checks when all answers are submitted, but marks individually.
  var A = "A";
  var D = "D";
  var Csharp = "C#";
  var E = "E";
  var G = "G";
  var F = "F";
  var Fsharp = "F#";
  var B = "B";
  var C = "C";
  
  fill(255);
  noStroke();
  rect(input1.x + input1.width + 5, input1.y - 6, 28, 400);
  
  if (input1.value() == "A") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input1.x + input1.width + 10, input1.y + 5, input1.x + input1.width + 15, input1.y + 10);
    line(input1.x + input1.width + 15, input1.y + 10, input1.x + input1.width + 30, input1.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input1.x + input1.width + 10, input1.y + 5, input1.x + input1.width + 15, input1.y + 10);
    line(input1.x + input1.width + 10, input1.y + 10, input1.x + input1.width + 15, input1.y + 5);
  }
  if (input2.value() == "D") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input2.x + input1.width + 10, input2.y + 5, input2.x + input2.width + 15, input2.y + 10);
    line(input2.x + input1.width + 15, input2.y + 10, input2.x + input2.width + 30, input2.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input2.x + input2.width + 10, input2.y + 5, input2.x + input2.width + 15, input2.y + 10);
    line(input2.x + input2.width + 10, input2.y + 10, input2.x + input2.width + 15, input2.y + 5);
  }
  if (input3.value() == "C#") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input3.x + input3.width + 10, input3.y + 5, input3.x + input3.width + 15, input3.y + 10);
    line(input3.x + input3.width + 15, input3.y + 10, input3.x + input3.width + 30, input3.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input3.x + input3.width + 10, input3.y + 5, input3.x + input3.width + 15, input3.y + 10);
    line(input3.x + input3.width + 10, input3.y + 10, input3.x + input3.width + 15, input3.y + 5);
  }
  if (input4.value() == "E") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input4.x + input4.width + 10, input4.y + 5, input4.x + input4.width + 15, input4.y + 10);
    line(input4.x + input4.width + 15, input4.y + 10, input4.x + input4.width + 30, input4.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input4.x + input4.width + 10, input4.y + 5, input4.x + input4.width + 15, input4.y + 10);
    line(input4.x + input4.width + 10, input4.y + 10, input4.x + input4.width + 15, input4.y + 5);
  }
  if (input5.value() == "G") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input5.x + input5.width + 10, input5.y + 5, input5.x + input5.width + 15, input5.y + 10);
    line(input5.x + input5.width + 15, input5.y + 10, input5.x + input5.width + 30, input5.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input5.x + input5.width + 10, input5.y + 5, input5.x + input5.width + 15, input5.y + 10);
    line(input5.x + input5.width + 10, input5.y + 10, input5.x + input5.width + 15, input5.y + 5);
  }
  if (input6.value() == "F") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input6.x + input6.width + 10, input6.y + 5, input6.x + input6.width + 15, input6.y + 10);
    line(input6.x + input6.width + 15, input6.y + 10, input6.x + input6.width + 30, input6.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input4.x + input6.width + 10, input6.y + 5, input6.x + input6.width + 15, input6.y + 10);
    line(input4.x + input6.width + 10, input6.y + 10, input6.x + input6.width + 15, input6.y + 5);
  }
  if (input7.value() == "F#") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input7.x + input7.width + 10, input7.y + 5, input7.x + input7.width + 15, input7.y + 10);
    line(input7.x + input7.width + 15, input7.y + 10, input7.x + input7.width + 30, input7.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input7.x + input7.width + 10, input7.y + 5, input7.x + input7.width + 15, input7.y + 10);
    line(input7.x + input7.width + 10, input7.y + 10, input7.x + input7.width + 15, input7.y + 5);
  }
  if (input8.value() == "B") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input8.x + input8.width + 10, input8.y + 5, input8.x + input8.width + 15, input8.y + 10);
    line(input8.x + input8.width + 15, input8.y + 10, input8.x + input8.width + 30, input8.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input8.x + input8.width + 10, input8.y + 5, input8.x + input8.width + 15, input8.y + 10);
    line(input8.x + input8.width + 10, input8.y + 10, input8.x + input8.width + 15, input8.y + 5);
  }
  if (input9.value() == "C") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input9.x + input9.width + 10, input9.y + 5, input9.x + input9.width + 15, input9.y + 10);
    line(input9.x + input9.width + 15, input9.y + 10, input9.x + input9.width + 30, input9.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input9.x + input9.width + 10, input9.y + 5, input9.x + input9.width + 15, input9.y + 10);
    line(input9.x + input9.width + 10, input9.y + 10, input9.x + input9.width + 15, input9.y + 5);
  }
  if (input10.value() == "C") {
    stroke(100, 200, 100);
    strokeWeight(4);
    // tick
    line(input10.x + input10.width + 10, input10.y + 5, input10.x + input10.width + 15, input10.y + 10);
    line(input10.x + input10.width + 15, input10.y + 10, input10.x + input10.width + 30, input10.y - 5);
  } else {
    // cross
    stroke(240, 50, 50);
    strokeWeight(4);
    line(input10.x + input10.width + 10, input10.y + 5, input10.x + input10.width + 15, input10.y + 10);
    line(input10.x + input10.width + 10, input10.y + 10, input10.x + input10.width + 15, input10.y + 5);
  }
}