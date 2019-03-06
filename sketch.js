let bubbles = [];
let maxbubbles = 10;
let bubujaconmouse;

function setup() {
	createCanvas(400, 400);

}

function mousePressed() {
	bubujaconmouse = new Bubble(mouseX, mouseY, random(20, 75));
	//TENGO QUE CREAR UNA VARIABLE para poder usar el push.
	//bubbles[0] = bubujaconmouse;
	bubbles.push(bubujaconmouse);
}

function draw() {
	background(0);
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble { //Cuando creas la clase no se usan los ()
	constructor(tx, ty, tsize) {
		this.x = tx; //Cuando nos referimos a variables dentro de una clase hay que usar siempre "this.vaiable"
		this.y = ty;
		this.s = tsize;
	}
	// Para crear una funcion dentro de la clase no tengo q poner function nombre(), se hace asi:
	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		fill(random(0, 255), 0, random(0, 255));
		ellipse(this.x, this.y, this.s);

	}

}