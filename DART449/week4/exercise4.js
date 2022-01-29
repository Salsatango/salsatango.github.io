// JavaScript Document

/*

*/

var text = document.querySelector('.dynamicText');
var colorChoices = ["white","tan","sunlight","sky","sky2","sky3","white2","sky4","sky5","sky6","sand","sky7","sky8","ocean"];
//I put a liot of hues of #2bc7ff, so the picture would mostly be #2bc7ff. 
var x = 0;
var z = 0;
var allDivs = document.querySelectorAll('.Canvas div');
var divSelect = document.querySelectorAll('.'+ CSS.escape( x ));

/*The CSS.escape() static method returns a CSSOMString containing the escaped string passed as parameter, mostly for use as part of a CSS selector. You need this because you can't use numbers to select a class that's only numbers directly.*/

window.onload = numberChildren;
document.addEventListener('click',colorChange);
document.addEventListener('keypress', nextDiv);
document.addEventListener('keypress', removeText);


//this function removes the instructions when a key is pressed.
	function removeText(){
	text.textContent ='';
}


//when you press a key, the color of the square is confirmed, and you go to the next one.
//I used a lot of console.logs to figure out why this function wasn't updating. It turns out that you need to empty and array and repopulate it each time. 
function nextDiv(){
x++;
console.log(x); 
divSelect=[] ; //resets the array
console.log(divSelect);
divSelect = document.querySelectorAll('.'+ CSS.escape( x ));
console.log(divSelect);
}


//This function cycles through the colors each time there is a click event. I used a "for" loop because I used querySelectorAll, in case I wanted to select multiple divs. 
function colorChange(){
for(var i = 0; i < divSelect.length; i++){
	console.log(i);
	divSelect[i].classList.remove(colorChoices[z-1]);
  	divSelect[i].classList.add(colorChoices[z]);
	console.log(divSelect);
	if (z<=13){
	z++;
	}
	else{
	z=0;
	}
	
//NOTE: variables inside a function reset after the function is done, declare them globally if you want to increment them, like var x and z.
}}


//This function gives each div a numbered class in order.
function numberChildren(){
for (var y = 0; y < allDivs.length;){
	allDivs[y].classList.add(y+1);
	y++;
}}