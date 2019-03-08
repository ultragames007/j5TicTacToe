var condicion1= {
 x:0,
 y:3,
 z:6
}
var condicion2= {
 x:0,
 y:1,
 z:2
}
var condicion3= {
 x:0,
 y:4,
 z:8
}
var condicion4= {
 x:2,
 y:4,
 z:6
}
let b = 1; // El valor de las cruces.

function checkforvictory(){   // El array empieza en 0 , asi q le tengo q restar 1 a todas las condiciones...
    for(i=0;i<3;i++)
        {
        if (xoc[condicion1.x+i] ==b && xoc[condicion1.y+i] ==b && xoc[condicion1.z+i] == b )
            {
                print("Ganaste Arriba a Abajo",xoc[condicion1.x+i],xoc[condicion1.y+i],xoc[condicion1.z+i]);
                print(xoc);
                victoryText();
                victoryReset();
            }
        } //Condicion 1

        for(i=0;i<10;i+=3)
        {
        if (xoc[condicion2.x+i] ==b && xoc[condicion2.y+i] ==b && xoc[condicion2.z+i] == b)
            {
                print("Ganaste Izquierda a Derecha",xoc[condicion2.x+i],xoc[condicion2.y+i],xoc[condicion2.z+i]);
                print(xoc);
                victoryText();
                victoryReset();
            }
        } //Condicion 2
    
        if (xoc[condicion3.x] == b &&xoc[condicion3.y] ==b && xoc[condicion3.z] == b)
            {
                print("Ganaste cruzado  \ ",xoc[condicion3.x],xoc[condicion3.y],xoc[condicion3.z]);
                victoryText();
                victoryReset();
            }
         // Condicion 3

        if (xoc[condicion4.x] ==b && xoc[condicion4.y] ==b && xoc[condicion4.z] == b )
            {
                print("Ganaste cruzado /",xoc[condicion4.x],xoc[condicion4.y],xoc[condicion4.z]);
                victoryText();
                victoryReset();
                
            }    // Condicion 4
    

}

function victoryText()
{
      textAlign(CENTER, CENTER);
      fill (random(0,255),random(0,255),random(0,255));
      textSize(64);
      stroke(random(0,255),random(0,255),random(0,255));
      text("Ganaste!",width/2,height/2);
     // cambiamos de color y tamaño
      textSize(32);
      strokeWeight(2);
      stroke(225);
      fill(0);
      text("Haz click en el circulo para volver a jugar!",width/2,500);
}