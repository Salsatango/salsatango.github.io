// JavaScript Document

//rellax parallax scrolling
var rellax = new Rellax('.rellax');

//icon

let icon=document.querySelector(".logo");
icon.addEventListener('click',goToMain);





//element that follows cursor
window.addEventListener('mousemove', registerCoords);
window.addEventListener('load', loadfunctions);


function loadfunctions(){
	createObserver1();
	fishText();
}



function registerCoords(event) {
  	var x = event.pageX;
  	var y = event.pageY;



let cursorFollower = document.querySelector(".followCursor");
  cursorFollower.style.left = (x+15) + "px";
  cursorFollower.style.top = (y+15) + "px";
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
})}












//AutoScroll
window.onscroll = function() {scroll();
							  indicateScroll(); }

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
	element.scrollLeft = (e*f)/1.8 -700;

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
     entry.target.classList.remove("hidden");
	entry.target.classList.remove("unzoomed");}
		  else{entry.target.classList.add("hidden");
			  entry.target.classList.add("unzoomed");}
	})
}














//checkboxes.

let frequencies = document.querySelectorAll(".frequency");

frequencies.forEach(item => {
	item.addEventListener('click', function(){
	frequencies.forEach(item=> {
		item.classList.remove("checked");
	})
	item.classList.add("checked");
});
})

let amounts = document.querySelectorAll(".amount");

amounts.forEach(item => {
	item.addEventListener('click', function(){
	amounts.forEach(item=> {
		item.classList.remove("checked");
	})
	item.classList.add("checked");
});
})





// code for images that appear on hover
//













//thank you page.

let button = document.querySelector(".button");
let thanks= document.querySelector(".thankYou");
button.addEventListener('click', thankYouAnimation);


function thankYouAnimation(){
	console.log(button);
	appear(thanks);
	reveal(thanks);

	setTimeout (goToAbout,4000);
}















//navigation functions

function reveal(element){
	element.classList.remove("collapsed");
}

function collapse(element){
	element.classList.add("collapsed");
}

function appear(element){
	element.classList.remove("hidden");
}

function fadeOut(element){
	element.classList.add("hidden");
}

function goToAbout(element) {
	window.location.href = "About.html";
}

function goToAuction(element) {
	window.location.href = "Auction.html";
}

function goToDonate(element) {
	window.location.href = "Donate.html";
}

function goToMain(element) {
	window.location.href = "Dart449_Final_Website_No_Intro.html";
}



















































