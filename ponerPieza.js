let i=0;
function ponerPieza()
{
    machineturn=0;
    while(machineturn==0 && xoc.every(pfaltaespacio)== false){
    if (area==1)   //Area 1
    {
        i=0;
        image(imgx,0,0);  
        xoc[i]=1;
        machineturn=1;
    }
    if (area==2)   //Area 2
    {
        i=1;
        image(imgx,201,0);  
        xoc[i]=1;
        machineturn=1;
    }
    if (area==3)   //Area 3
    {
         i=2;
         image(imgx,402,0); 
         xoc[i]=1;
         machineturn=1;
    }
    if (area==4)   //Area 4
    {
        i=3;
        image(imgx,0,201);  
        xoc[i]=1;
        machineturn=1;
    }
    if (area==5)   //Area 5
    {
        i=4;
        image(imgx,201,201);  
        xoc[i]=1;
        machineturn=1;
    }
    if (area==6)   //Area 6
    {
        i=5;
        image(imgx,402,201);  
        xoc[i]=1;
        machineturn=1;
    }
    if (area==7)   //Area 7
    {
        i=6;
        image(imgx,0,402);  
        xoc[i]=1;
        machineturn=1;
    }
    if (area==8)   //Area 8
    {
        i=7;
        image(imgx,201,402);  
        xoc[i]=1;
        machineturn=1;
    }
    if (area==9)   //Area 9
    {
        i=8;
        image(imgx,402,402);  
        xoc[i]=1;
        machineturn=1;
    }
}
}