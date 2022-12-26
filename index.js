
//player1
var random1=Math.floor(Math.random() *6) +1; //random no genarator
var randomdiceimage="dice" + random1 + ".png"; //dice1.png - dice6.png
var rabdomimagesource="images/" + randomdiceimage; //image dice1.png - image dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rabdomimagesource);


//player2
var random2=Math.floor(Math.random() *6) +1; //random no genarator
var randomdiceimage="dice" + random2 + ".png"; //dice2.png - dice2.png
var rabdomimagesource="images/" + randomdiceimage; //image dice2.png - image dice2.png
var image2=document.querySelectorAll("img")[1];    //select the img
image2.setAttribute("src",rabdomimagesource);      //change the img

if(random1 > random2)
  document.querySelector("h1").innerHTML="🚩 Play 1 Wins";
 else if(random2 > random1)
  document.querySelector("h1").innerHTML="Play 2 Wins🚩"; 
  else
  document.querySelector("h1").innerHTML="Draw";
