let area;
let xoc= [2,2,2,2,2,2,2,2,2]; // 1 es cruz 0 es circulo.
let machineturn=0;
//let randompick;
function preload() {
    imgx =  loadImage("images/x.png");
    imgo =  loadImage("images/o.png");
}

function setup() {
  createCanvas(603, 603);
  background(255, 255, 255);
  crearTablero();
}

function draw() {
turnoMaquina();

}

function crearTablero() {
  strokeWeight(10); //hace todas las lineas gordas
  line(0, 201, 603, 201);
  line(0, 402, 603, 402);
  line(201, 0, 201, 603);
  line(402, 0, 402, 603);
}

function mousePressed() {
areaFinder();
ponerPieza()
}