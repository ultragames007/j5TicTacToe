function setup() {
    createCanvas(603,603);
}

function draw() {
    background(255,0,255);
    strokeWeight(10); //hace todas las lineas gordas
    line(0,201,603,201);
    line(0,401,603,401);
    line(201,0,201,603);
    line(401,0,401,603);
}