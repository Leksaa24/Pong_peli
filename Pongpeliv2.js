let koko=15;
let korkeus=60;
let leveys=10;
let x=20;
let y=200-korkeus/2;
let n=0;
let n2=0;

let x2=490;
let y2=200-korkeus/2;
let koko2=15;
let korkeus2=60;
let leveys2 =10;

let palloy =0;
let pallox =0;
let pallokoko = 20;
let nopeusx = 4;
let nopeusy = 0.5;
let timer = 0;
let timer1 =0;
function setup() {
  createCanvas(600, 400);
palloy = height/2;
pallox = width/2;

}

function draw() {
  background(220);
  rect(x, y, leveys, korkeus);
  rect(x2, y2, leveys2, korkeus2);
  circle(pallox, palloy, pallokoko);
  fill('blue');
  liikutus();
  palloliike();
  collisionx();
  collisiony();
  collisionx2();
  collisionangle();
  pisteet();
  pistelasku();
  reset();
  if (timer >0) timer -=1;
  if (timer1 >0) timer1 -=1;

}

 function palloliike(){
   pallox+=nopeusx;
   palloy+=nopeusy;

 }



 function collisionx (){
 if (pallox>x2-pallokoko/2&&pallox<x2&&palloy<(y2+korkeus2+pallokoko/2)&&palloy>(y2-pallokoko/2)&&(timer <= 0)){
  nopeusx *=-1;
  timer = 20;
  
 }
 
 }
 

 function collisionx2(){
 if (pallox<x+pallokoko/2+leveys&&pallox>x+pallokoko/2&&palloy<(y+korkeus+pallokoko/2)&&palloy>(y-pallokoko/2)&&(timer1<=0)){
  nopeusx *=-1;
  timer1 = 20;
  }
  
  }

  function pistelasku(){
   if (pallox>600){
   n=n+1;

   }
   if (pallox<0)
   n2=n2+1;

  }

  function pisteet(){
  if (n>1||n<1){
  text(n+' pistettä', 10, 30);
  }
  else{
    text(n+' piste', 10, 30);
  }
  if (n2>1||n2<1){
  text(n2+' pistettä', 545, 30);
  }
  else{ 
  text(n2+' piste', 550, 30);
  }
  }
   
  function reset(){
   if (pallox<0||pallox>600){
   palloy=height/2;
   pallox=width/2;

   }


  }

  function collisionangle(){
    // palloosuu = pallo koskee mailaan, mailan eri osat, mihin kohtaan osuu
  let palloosuu = pallox<leveys+x+pallokoko/2;
  let mailanylaosa = palloy<(y+korkeus)&&palloy>y+korkeus/2;
  let mailanalaosa = palloy>y&&palloy<y+korkeus/2;

  let palloosuu2 = pallox>x2-pallokoko/2&&pallox<x2&&palloy<(y2+korkeus2+pallokoko/2);
  let mailanylaosa2 = palloy<(y2+korkeus2)&&palloy>y2+korkeus2/2;
  let mailanalaosa2 = palloy>y2&&palloy<y2+korkeus2/2;



// vasen maila
  if(palloosuu&&mailanylaosa&&nopeusy>0){
    nopeusy=nopeusy+0.6;
  }

  if(palloosuu&&mailanalaosa&&nopeusy>0){
    nopeusy=nopeusy-0.6;
  }

  if(palloosuu&&mailanylaosa&&nopeusy<0){
    nopeusy=nopeusy+0.6;
  }

  if(palloosuu&&mailanalaosa&&nopeusy<0){
    nopeusy=nopeusy-0.6;
  }


// oikea maila
  if(palloosuu2&&mailanylaosa2&&nopeusy>0){
    nopeusy=nopeusy+0.6;
  }

  if(palloosuu2&&mailanalaosa2&&nopeusy>0){
    nopeusy=nopeusy-0.6;
  }

  if(palloosuu2&&mailanylaosa2&&nopeusy<0){
    nopeusy=nopeusy+0.6;
  }

  if(palloosuu2&&mailanalaosa2&&nopeusy<0){
    nopeusy=nopeusy-0.6;
  }


  }


  function collisiony(){
 if (palloy>400){
 nopeusy*=-1;
}
 if (palloy<0){
 nopeusy*=-1;

 }
}
 function liikutus(){

   if (keyIsDown(UP_ARROW)&&y2>5){
    y2-=10;
   }
   if (keyIsDown(DOWN_ARROW)&&y2<height-korkeus2-5){
    y2+=10;
   }
   if (keyIsDown(87)&&y>5){
    y-=5;
   }
   if (keyIsDown(83)&&y<height-korkeus-5){
    y+=5;
   }
    



  
}

