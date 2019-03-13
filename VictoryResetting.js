function victoryReset()  // Should be called reset lol cause its used to reset all cases ...
{
 machineturn =2 ;
 xoc= [2,2,2,2,2,2,2,2,2];
 primerturno = true;
    stroke(0,0,255);
    fill (0,255,0);
    ellipse(500,550,50,25);
    textSize(8);
    text("Play",500,550);
    print("Reseteado Array y turno a 2.");
}

function playagain()
{
   if(machineturn==2){
       print("En estado de reseteo posible");
   }
    if(machineturn==2)
        {
            
            if (mouseX > 470 && mouseX < 525 && mouseY > 532 && mouseY < 565) {
               crearTablero();
               machineturn=0;
            }
        }
}
