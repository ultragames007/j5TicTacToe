function areaFinder()
{
    
    if (mouseX > 0 && mouseX < 201 && mouseY > 0 && mouseY < 201) { //AREA 1
      area = 1;
     // print("Area", area);
    }
    if (mouseX > 201 && mouseX < 402 && mouseY > 0 && mouseY < 201) { //AREA 2
      area = 2;
   //   print("Area", area);
    }
    if (mouseX > 402 && mouseX < 603 && mouseY > 0 && mouseY < 201) { //AREA 3
      area = 3;
    //  print("Area", area);
    }
    if (mouseX > 0 && mouseX < 201 && mouseY > 201 && mouseY < 402) { //AREA 4
      area = 4;
    //  print("Area", area);
    }
    if (mouseX > 201 && mouseX < 402 && mouseY > 201 && mouseY < 402) { //AREA 5
      area = 5;
   //   print("Area", area);
    }
    if (mouseX > 402 && mouseX < 603 && mouseY > 201 && mouseY < 402) { //AREA 6
      area = 6;
    //  print("Area", area);
    }
    if (mouseX > 0 && mouseX < 201 && mouseY > 402 && mouseY < 603) { //AREA 7
      area = 7;
    //  print("Area", area);
    }
    if (mouseX > 201 && mouseX < 402 && mouseY > 402 && mouseY < 603) { //AREA 8
      area = 8;
    //  print("Area", area);
    }
    if (mouseX > 402 && mouseX < 603 && mouseY > 402 && mouseY < 603) { //AREA 9
      area = 9;
     // print("Area", area);
    }

}