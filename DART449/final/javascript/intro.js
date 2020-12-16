

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
}// JavaScript Document