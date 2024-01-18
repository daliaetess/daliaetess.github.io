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

	//Second Color
	push();
	noFill();
	strokeWeight(100);
	sec = second();
	a = 360/60;
	b = 400/60;
	stroke(0+(a*sec), s, l);
	line(0+(b*sec), 100, 800-(b*sec), 100);
	pop();

	//Minute Color
	push();
	noFill();
	strokeWeight(200);
	min = minute();
	a2 = 360/60;
	b2 = 400/60;
	stroke(0+(a2*min), s, l);
	line(0+(b2*min), 300, 800-(b2*min), 300);
	pop();

	//Hour Color
	push();
	noFill();
	strokeWeight(300);
	hou = hour();
	a3 = 360/24;
	b3 = 400/24;
	stroke(0+(a3*hou), s, l);
	line(0+(b3*hou), 600, 800-(b3*hou), 600);
	pop();

  }
