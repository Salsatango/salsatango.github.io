
//Function that takes the cursor position (event)
window.scrollTo(0,0);

function registerCoords(event) {
  	var x = event.pageX;
  	var y = event.pageY;
	/*
	how to get the vertical scroll pixels of an element
	var scrolled = document.getElementById("page");
	var z = scrolled.scrollTop;
	*/
  document.getElementById("followCursor").style.left = (x-45) + "px";
  document.getElementById("followCursor").style.top = y-45 + "px";

}

function stopFollowingCursor() {
  document.getElementById("followCursor").style.opacity = "0" ;
}

function startFollowingCursor() {
  document.getElementById("followCursor").style.opacity = "70";
}






/*Function to animate text, taken from https://tobiasahlin.com 
It uses anime.js */

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: (el, i) => 50 * (i+1)
  })
// JavaScript Document

var reference = document.getElementById("reference");
var scrolled = document.scrollTop;
if (scrolled >= 100) {
    reference.className = "hide"}


// another one
var textWrapper = document.querySelector('.ml4');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml4 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 100,
    delay: (el, i) => 50 * (i+40)
  })



// fade out a title after a few seconds



// JavaScript Document

var reference = document.getElementById("reference");
var scrolled = document.scrollTop;
if (scrolled >= 100) {
    reference.className = "hide"}

// scroll Fullpage


var page = new FullPage("#fullScrollContainer"); {
    animationDuration: 2000;
	touch: true;
}


 
