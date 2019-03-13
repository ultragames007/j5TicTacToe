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
  crearTablero();
}

function draw() {
    turnoMaquina();
    checkfordefeat();  // Check for defeat lo corro aca xq sino al hacer click, primero pone la pieza luego evalua.
    checkfortie();
}

function crearTablero() {
  background(255, 255, 255);
  strokeWeight(10); //hace todas las lineas gordas
  stroke(0);
  line(0, 201, 603, 201);
  line(0, 402, 603, 402);
  line(201, 0, 201, 603);
  line(402, 0, 402, 603);
}

function mousePressed() {
    areaFinder();
    ponerPieza();
    checkforvictory();
//    checkfordefeat();
    playagain();
    fill(255,0,250);
   // print(mouseX,mouseY); // For debbugging.
}

// EN Smart Cookie Logic las lineas 27,28 se pueden activar/desactivar para hacerlo inteligente 100% de los casos o no
// El porcentage de error se ajusta en la linea 124.