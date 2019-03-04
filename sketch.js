function setup() {
    createCanvas(400,400);
    background(153, 153, 255);
    }
    var x=0;
    var y=0;
    var z=0;

function draw() {

    noStroke();
    //stroke(255,0,0); //borde
    strokeWeight(3); //grosor
    fill(200, mouseX-x, mouseY+z); //relleno va antes de dibujar
    ellipse(mouseX,mouseY,50,50);
}
function mousePressed(){
    background(153, 153, 255); //Limpia la pantalla
    x=random(0,255);
    y=random(0,255);
    z=random(0,255);
    print("El valor de x es",x,y,z);
}