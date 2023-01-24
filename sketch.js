function setup() {
	createCanvas(800, 800);
  }
  
let min = 0;

function draw() {
	

	if(min < minute()){
		min = minute();
		console.log(min);
	}

	background(247, 250, 245);

	push();
	fill(230, 24, 170, 100);
	translate(400, 400);
	noStroke();
	rotate(radians(frameCount / -50));
	for (var r1 = 0; r1 < hour(); r1++) {
	  ellipse(10, 260, 85, 150);
	  let d = hour()/2
	  rotate(PI / d);
	}
	pop();

	push();
	fill(245, 180, 25, 125);
	translate(400, 400);
	noStroke();
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
	noStroke();
	rotate(radians(frameCount / -75));
	for (var r1 = 0; r1 < second(); r1++) {
	  ellipse(-5, 70, 10, 20);
	  let a = second()/2
	  rotate(PI / a);
	}
	pop();

  }
