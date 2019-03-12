function checkfortie ()
{
    if(xoc.every(pfaltaespacio)){
        print("TIEEEEEEEEE");
        tieText();
        victoryReset();
    }
}

function tieText()
{
      textAlign(CENTER, CENTER);
      fill (random(0,255),random(0,255),random(0,255));
      textSize(64);
      stroke(random(0,255),random(0,255),random(0,255));
      text("Empate!",width/2,height/2);
     // cambiamos de color y tamaño
      textSize(32);
      strokeWeight(2);
      stroke(225);
      fill(0);
      text("Haz click en el circulo para volver a jugar!",width/2,500);
}