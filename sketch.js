function setup() {
	createCanvas(800, 800);
  }
  
let min = 0;
let ys = 0;
let ym = 0;
let yh = 0;

function draw() {
	

	if(min < minute()){
		min = minute();
		console.log(min);
	}

	colorMode(HSL, 360, 100, 100, 100);
	s = 100;
	l = 50;


	push();
	noFill();
	strokeWeight(42);
	sec = second();
	a = 360/60;
	b = 100/60;
	stroke(360, 0, 100, 50);
	line(0, ys, 800, ys);
	strokeWeight(40);
	ys = b*sec
	stroke(0+(a*sec), s, l);
	line(0, ys, 800, ys);
	pop();
	
	push();
	noFill();
	strokeWeight(82);
	min = minute();
	a2 = 360/60;
	b2 = 199/60;
	stroke(360, 0, 100, 50);
	line(0, 101 + ym, 800, 101 + ym);
	strokeWeight(80);
	ym = b2*min;
	stroke(0+(a2*min), s, l);
	line(0, 101 + ym, 800, 101 + ym);
	pop();

	push();
	noFill();
	strokeWeight(102);
	hou = hour();
	a3 = 360/24;
	b3 = 499/24;
	stroke(360, 0, 100, 50);
	line(0, 301 + yh, 800, 301 + yh);
	strokeWeight(100);
	yh = b3*hou;
	stroke(0+(a3*hou), s, l);
	line(0, 301 + yh, 800, 301 + yh);
	pop();


	
	/*
	push();
	noFill();
	strokeWeight(10);
	stroke(255, 102, 0);
	stroke(0, 0, 0);
	sec = second();
	a = 800/60;
	a2 = 400/60
	x1y2 = 800 - (a*sec);
	y1x2 = 0 + (a*sec);
	bezier(x1y2, y1x2, 0, 0, 800, 800, y1x2, x1y2);
	pop();

	push();
	noFill();
	strokeWeight(30);

	stroke(0, 0, 0);
	min = minute();
	b = 600/60;
	bezier(600, 0, 300-(b*min), 300-(b*min), 300+(b*min), 300+(b*min), 0, 600);
	pop();
	*/ 

	/*
	push();
	fill(230, 24, 170, 100);
	translate(400, 400);
	rotate(radians(frameCount / -50));
	for (var r1 = 0; r1 < hour(); r1++) {
	  ellipse(10, 260, 85, 200);
	  let d = hour()/2
	  rotate(PI / d);
	}
	pop();

	push();
	fill(245, 180, 25, 125);
	translate(400, 400);
	rotate(radians(frameCount / 50));
	for (var r1 = 0; r1 < minute(); r1++) {
	  ellipse(-10, 145, 24, 100);
	  let c = minute()/2
	  rotate(PI / c);
	}
	pop();

	push();
	fill(75, 50, 45, 150);
	translate(400, 400);
	rotate(radians(frameCount / -75));
	for (var r1 = 0; r1 < second(); r1++) {
	  ellipse(-5, 70, 10, 20);
	  let a = second()/2
	  rotate(PI / a);
	}
	pop()*/

  }
