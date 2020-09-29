
//Function that takes the cursor position (event) I used this to make the blue circle follow the cursor.
window.scrollTo(0,0);

function registerCoords(event) {
  	var x = event.pageX;
  	var y = event.pageY;

  document.getElementById("followCursor").style.left = (x-45) + "px";
  document.getElementById("followCursor").style.top = y-45 + "px";
}

function stopFollowingCursor() {
  document.getElementById("followCursor").style.opacity = "0" ;
}

function startFollowingCursor() {
  document.getElementById("followCursor").style.opacity = "70";
}



/*This is a function to animate text, taken from https://tobiasahlin.com 
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



var reference = document.getElementById("reference");
var scrolled = document.scrollTop;
if (scrolled >= 100) {
    reference.className = "🙈"}



// fade out a title when mouse is moved over DIV
function fadeOnScroll() {
   document.getElementById("🖋️🖋️").style.opacity = "0";
}

function fadeOnScroll2() {
   document.getElementById("🖋️🖋️🖋️").style.opacity = "0";
}

function fadeOnScroll3() {
   document.getElementById("🖋️🖋️🖋️🖋️").style.opacity = "0";
}

// fade in when mouse is moved over DIV. These could really have been made better, I think.

function fadeInOnScroll() {
   document.getElementById("📖📖").classList.remove("🙈");
	document.getElementById("📖📖📖").classList.remove("🙈");
}

function fadeInOnScroll2() {
   document.getElementById("📖").classList.remove("🙈");

}

function fadeInOnScroll3() {
   document.getElementById("📖📖📖📖").classList.remove("🙈");

}

function fadeInOnScroll4() {
   document.getElementById("📖📖📖📖📖📖").classList.remove("🙈");

}
function fadeInOnScroll5() {
   document.getElementById("📖📖📖📖📖📖📖").classList.remove("🙈");

}



var reference = document.getElementById("reference");
var scrolled = document.scrollTop;
if (scrolled >= 100) {
    reference.className = "🙈"}

// scroll an entire page everytime you scroll.


var page = new FullPage("#fullScrollContainer"); {
    animationDuration: 2000;
	touch: true;
}




 
