
let on = false;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
    //se puede poner if (on) xq on es true o false nomas. o if(on==true)
    if(on)
    {
       background(0,255,0);
    } else {
        background(0); 
           }
    stroke(255);
    strokeWeight(4);
    noFill();
    if(mouseX>150 && mouseX<250 && mouseY>150 && mouseY<250){
        fill(250,0,255);
    }
    
    rectMode(CENTER);
    rect(200,200,100,100);
}
function mousePressed(){
    if(mouseX>150 && mouseX<250 && mouseY>150 && mouseY<250){
 on=!on;        
      }
}


  //      fill(255,0,200);
 //   }
//  
  //      if(on){        TODO ESTO ES EL on=!on ... es como poner -variable pero para booleanos el !
 //           on=false;
 //       }else {on=true;}