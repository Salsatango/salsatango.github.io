// JavaScript Document

// here is the code for the intro of the website

let intro = document.querySelector(".intro");

window.addEventListener('click', introAnimation);

function introAnimation(){
	collapse(intro);
	flyaway(intro);
}


function collapse(element){
	element.classList.add("collapsed");
}

function flyaway(element){
	element.classList.add("flownAway");
}

//AutoScroll
window.onscroll = function() {scroll()};
window.onscroll = function() {indicateScroll()};

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
	element.scrollLeft = (e*f);

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
	console.log(scrollBar);
	scrollBar.style.height = (scrolled*thousandth) + "px";
}



