// JavaScript Document

//element that follows cursor
window.addEventListener('mousemove', registerCoords);
window.addEventListener('load', createObserver1);



function registerCoords(event) {
  	var x = event.pageX;
  	var y = event.pageY;

	
let cursorFollower = document.querySelector(".followCursor");
  cursorFollower.style.left = (x+2) + "px";
  cursorFollower.style.top = (y+2) + "px";
}


// here is the code for the intro of the website

let intro = document.querySelector(".intro");
let intro2= document.querySelector(".intro2");
let ui =document.querySelectorAll(".ui");
window.addEventListener('click', introAnimation);
intro2.addEventListener('click', introAnimation2);

function introAnimation(){
	collapse(intro);
	flyaway(intro);

}

function introAnimation2(){
	collapse(intro2);
	flyaway(intro2);
	setTimeout (uiAppear,1500);
}

function uiAppear(){
	ui.forEach (function appearance(element){
	appear(element);
	})
}

function appear(element){
	element.classList.remove("hidden");
}

function collapse(element){
	element.classList.add("collapsed");
}

function flyaway(element){
	element.classList.add("flownAway");
}


//Observer1 is for detecting when a div appears on screen, for opacity transitions
let observer;

let appearOnScroll = document.querySelectorAll(".appearOnScroll");
let autoScroll = document.querySelectorAll(".autoScroll");





function createObserver1() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

appearObserver = new IntersectionObserver(appearTrigger, options);

	appearOnScroll.forEach(entry => {
 appearObserver.observe(entry);	
})
}


//AutoScroll
window.onscroll = function() {scroll();indicateScroll(); }

let scrollSection = document.querySelectorAll(".scrollable");
//I want to preface this by saying I've not done any math in a long time, and this could probably have been done in an easier way.
//I laid out the variables like this so it was clearer for myself.

function scroll(){
scrollSection.forEach(function scroll1(element) {
	let x = element.scrollWidth;
	console.log("x" + " " + x);
	let y = document.documentElement.clientHeight;
	console.log("y" + " " + y);
	let z = (y * x);
	console.log("z" + " " + z);

	let a = document.documentElement.scrollTop  || document.documentElement.scrollTop;
	console.log("a" + " "+ a);
	let b = element.offsetTop;
	console.log("b" + " " + b);
	let c = (a-b+y);
	console.log("c" + " " + c);
	//c is how many pixels the element has scrolled down.
	let d = (c/y);
	console.log("d" + " " + d);
	// d is a function of c and y 
	let e = d*1000;
	console.log("e" + " " + e);
	//e is how many thousandths of clientheight we've scrolled vertically.
	let f = (x/1000);
	console.log("f" + " " + f);
	//f is one thousandth of the scrolable Width
	console.log( " " );
	element.scrollLeft = (e*f)/1.8 -600;

})}

//scrollIndicator

function indicateScroll(){
	let scrollIndicator = document.querySelector(".scrollIndicator");
	let scrollBar = document.querySelector(".progressBar");
	let scrollBarHeight = scrollIndicator.offsetHeight;
	let a = document.documentElement.scrollTop  || document.documentElement.scrollTop;
	let b = document.documentElement.scrollHeight;
	let c = document.documentElement.clientHeight;
	let scrolled = (a/(b-c)*1000);
	let thousandth = scrollBarHeight/1000;
	scrollBar.style.height = (scrolled*thousandth) + "px";
}



				   
function appearTrigger(entries, appearObserver){
	entries.forEach(entry => {
    if (entry.isIntersecting) {
     entry.target.classList.remove("hidden");}
		  else{entry.target.classList.add("hidden");}
	})
}