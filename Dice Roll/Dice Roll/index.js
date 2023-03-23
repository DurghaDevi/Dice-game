var randomNumber1=Math.floor(Math.random()*6+1);
var image=document.getElementsByTagName("img")[0];
var dice="images/dice"+randomNumber1+".png";
image.setAttribute("src",dice);

var randomNumber2=Math.floor(Math.random()*6+1);
var image=document.getElementsByTagName("img")[1];
var dice="images/dice"+randomNumber2+".png";
image.setAttribute("src",dice);


if(randomNumber1>randomNumber2)
{
   document.querySelector("h1").innerHTML="🚩player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player 2 wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML="🚩 Draw... 🚩";
}