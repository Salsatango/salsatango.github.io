
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
  document.getElementById("followCursor").style.left = (x-150) + "px";
  document.getElementById("followCursor").style.top = y-150 + "px";

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



// fade out a title when mouse is moved over DIV
function fadeOnScroll() {
   document.getElementById("title2").style.opacity = "0";
}

function fadeOnScroll2() {
   document.getElementById("title3").style.opacity = "0";
}

function fadeOnScroll3() {
   document.getElementById("title4").style.opacity = "0";
}

// fade in when mouse is moved over DIV
function fadeInOnScroll() {
   document.getElementById("paragraph2").classList.remove("hide");
	document.getElementById("paragraph3").classList.remove("hide");
}

function fadeInOnScroll2() {
   document.getElementById("paragraph1").classList.remove("hide");

}

function fadeInOnScroll3() {
   document.getElementById("paragraph4").classList.remove("hide");

}

function fadeInOnScroll4() {
   document.getElementById("paragraph5").classList.remove("hide");

}
function fadeInOnScroll5() {
   document.getElementById("paragraph6").classList.remove("hide");

}


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


 
