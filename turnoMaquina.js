var randompick;

function turnoMaquina ()
{
    while(machineturn==1 && xoc.every(pfaltaespacio) == false){
    // print("XOC antes de que la maquina elija",xoc); //DEBUGGING.
        
    // pickrandomspot();      // Aca vamos a insertar el codigo nuevo.
       checkforplay();        // Si se rompe remover esto.
        
     if (area==1)   //Area 1
    {
        i=0;
        image(imgo,0,0);  
        xoc[i]=0;
        machineturn=0;
    }
    if (area==2)   //Area 2
    {
        i=1;
        image(imgo,201,0);  
        xoc[i]=0;
        machineturn=0;
    }
    if (area==3)   //Area 3
    {
         i=2;
         image(imgo,402,0); 
         xoc[i]=0;
         machineturn=0;
    }
    if (area==4)   //Area 4
    {
        i=3;
        image(imgo,0,201);  
        xoc[i]=0;
        machineturn=0;
    }
    if (area==5)   //Area 5
    {
        i=4;
        image(imgo,201,201);  
        xoc[i]=0;
        machineturn=0;
    }
    if (area==6)   //Area 6
    {
        i=5;
        image(imgo,402,201);  
        xoc[i]=0;
        machineturn=0;
    }
    if (area==7)   //Area 7
    {
        i=6;
        image(imgo,0,402);  
        xoc[i]=0;
        machineturn=0;
    }
    if (area==8)   //Area 8
    {
        i=7;
        image(imgo,201,402);  
        xoc[i]=0;
        machineturn=0;
    }
    if (area==9)   //Area 9
    {
        i=8;
        image(imgo,402,402);  
        xoc[i]=0;
        machineturn=0;
    }
      //  print(xoc); //DEBUGGING
    }
}

function pickrandomspot(){
    let RAA = [1,2,3,4,5,6,7,8,9];
    
    var randompick = random(RAA);
    while(xoc[randompick-1]!==2 ){
        randompick = random(RAA);
        //print("lo que printea si hay espacio",xoc.every(pfaltaespacio));
    }
    area=randompick;
  //print("Valor de Randompick",randompick); //Debugging
  //print("Nueva area sin usar",area);  //Debugging


}

function pfaltaespacio(currentValue)
{
    return currentValue !== 2;
}
