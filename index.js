//step 3
function play(){
var randomNumber1=Math.floor((Math.random()*6+1));
//Step 4
var randomDiceImage="dice"+ randomNumber1 + ".png";  // String from dice 1 -dice 6
var randomImageSource="images/"+randomDiceImage;  // Step 5:change attr value to image  //images/dice1.png to images/dice6.png
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImageSource); ////step 6 change the source attribute of image element


var randomNumber2=Math.floor((Math.random()*6+1));
var randomDiceImage2="dice"+ randomNumber2 + ".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// var para1=document.querySelector("p");
// var para2=document.querySelector("p");


 if(randomNumber1>randomNumber2){

 	document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
 	// para1.innerHTML="👑Player 1";
 	// para2.innerHTML="Player 2"

 }else if(randomNumber2>randomNumber1)
 {
 	document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
 	// para1.innerHTML="Player 1";
 	// para2.innerHTML="👑Player 2";
 }
 else{
 	document.querySelector("h1").innerHTML="Draw😇"
 }};


 function playSound() {
  var audio = new Audio("sound/DICE.wav");
  audio.play();

};

 document.querySelector("button.playButton").onclick = function () {
  playSound();
  play();
};

