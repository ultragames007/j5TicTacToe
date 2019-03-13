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
let l = 2; // El valor que me invente para checkeos. (l de libre x eso revisa q sea 2).
let randomfirstplay = [1,3,7,9] ;
let primerturno = true;
//var smart=0;  // SI activas esta linea , entra en modo inteligente y empata casi siempre.

function checkforplay(){    // Ejecuta smart or no (25% chance de q sea tonta), si sale true ejecuta el codigo, sino elije uno al azar.
   // smartornot(); // Ejecuta cada turno para ver si es inteligente.  // Activar esto para hacerlo dumb
    smart=1; //Comentar linea para desactivar modo inteligente.
    print(xoc);
 ////////////////////////////////////////////////////// DETECCION INTELIGENTE////////////////////////////////////////////////    
     if(smart!==4 && primerturno==false){
      //   print("Entro codigo area 4");
         //SMART DETECTION CODE
    for(i=0;i<3;i++)      //Seguramente voy a tener q poner +1 a todos las definiciones de area aca.
        {
        if ((xoc[condicion1.x+i] == xoc[condicion1.y+i] && xoc[condicion1.y+i] !== 2 && xoc[condicion1.z+i] == l) || (xoc[condicion1.y+i] == xoc[condicion1.z+i] && xoc[condicion1.z+i]!== 2 && xoc[condicion1.x+i] == l) || (xoc[condicion1.z+i] == xoc[condicion1.x+i] && xoc[condicion1.x+i]!==2 && xoc[condicion1.y+i] == l) )
            {    // Codigo para identificar cual de las 3 areas fue...
                if(xoc[condicion1.x+i]==l){
                    area=condicion1.x+i+1;
                   // print("Entro codigo area 4 caso 1.1",condicion1.x+i);
                } 
                if(xoc[condicion1.y+i]==l){
                    area=condicion1.y+i+1;
                   // print("Entro codigo area 4 caso 1.2",condicion1.y+i);
                }
                if(xoc[condicion1.z+i]==l){
                    area=condicion1.z+i+1
                   // print("Entro codigo area 4 caso 1.3",condicion1.z+i);
                }
                
                //print("Entro codigo area 4 caso 1");
            }
        } //Condicion 1

        for(i=0;i<10;i+=3)
        {
        if ((xoc[condicion2.x+i] == xoc[condicion2.y+i] && xoc[condicion2.y+i]!==2 && xoc[condicion2.z+i] == l) || (xoc[condicion2.y+i] == xoc[condicion2.z+i] && xoc[condicion2.z+i]!==2 && xoc[condicion2.x+i] == l) || (xoc[condicion2.z+i] == xoc[condicion2.x+i] && xoc[condicion2.x+i]!==2 && xoc[condicion2.y+i] == l) )
            {
                if(xoc[condicion2.x+i]==l){area=condicion2.x+i+1}
                if(xoc[condicion2.y+i]==l){area=condicion2.y+i+1}
                if(xoc[condicion2.z+i]==l){area=condicion2.z+i+1}
               // print("Entro codigo area 4 caso 2");
                
            }
        } //Condicion 2
    
        if ((xoc[condicion3.x] == xoc[condicion3.y] && xoc[condicion3.y]!== 2 && xoc[condicion3.z] == l) || (xoc[condicion3.y] == xoc[condicion3.z] && xoc[condicion3.z]!==2 && xoc[condicion3.x] == l) || (xoc[condicion3.z] == xoc[condicion3.x] && xoc[condicion3.x]!==2 && xoc[condicion3.y] == l) )
            {
                if(xoc[condicion3.x]==l){area=condicion3.x+1}
                if(xoc[condicion3.y]==l){area=condicion3.y+1}
                if(xoc[condicion3.z]==l){area=condicion3.z+1}
               // print("Entro codigo area 4 caso 3");
                
            }
         // Condicion 3

        if ((xoc[condicion4.x] == xoc[condicion4.y] && xoc[condicion4.y]!==2 && xoc[condicion4.z] == l) || (xoc[condicion4.y] == xoc[condicion4.z] && xoc[condicion4.z]!==2 && xoc[condicion4.x] == l) || (xoc[condicion4.z] == xoc[condicion4.x] && xoc[condicion4.x]!==2 && xoc[condicion4.y] == l) )
            {
                if(xoc[condicion4.x]==l){area=condicion4.x+1}
                if(xoc[condicion4.y]==l){area=condicion4.y+1}
                if(xoc[condicion4.z]==l){area=condicion4.z+1}
               // print("Entro codigo area 4 caso 4");
                
            }    // Condicion 4
    

     } 
        if(smart==4 && primerturno==false){                           // CODIGO Q SE ACTIVA CUANDO ES DUMB.
        // print("Entro codigo area 5");
         pickrandomspot();
        }
     /////////////////////////////////////////////PRIMER TURNO///////////////////////////////////////////////////// 
    while(smart!==4 && primerturno==true)         // Si es el primer turno y es inteligente.
        {  
          //  print("Entro codigo area 1");
            if(xoc[4]==2){ // Esto quiere decir, si el centro del tablero esta libre.
            area=5;    
            primerturno= false;
            } else{
          //      print("Entro codigo area 2");
                area = random(randomfirstplay);
                primerturno= false;  
            }
        }
    if(primerturno==true)  // Si es el primer turno pero es tonta..
        //Este codigo se ejecuta solo si el de arriba no se ejecuta xq el de arriba cmabia primerturno :).
        {
        //    print("Entro codigo area 3");
            pickrandomspot(); // Le asigna al final de la funcion un valor al area.
            primerturno= false;
        }
      ///////////////////////////////////////////////////// OVERSLAP PROETECTION //////////////////
        while(xoc[area-1]!==2 ){
            area = floor(random(1,10));
      //      print("Stuck");
        //    print("area",xoc[area-1]);
        }
    
   //print("EL AREA ACTUAL ELEGIDA DE LA MAQUINA ES",area);
}

function smartornot(){

    smart = floor(random(1,7));
    print("Valor de smart",smart);
    if(smart==4){
        print("Iniciando jugada boba");
    }
 // 4 ES CUANDO ES DUMB.
}