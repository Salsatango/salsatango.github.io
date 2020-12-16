

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



let banner1 = document.querySelector(".banner1");
let banner2 = document.querySelector(".banner2");
let banner3 = document.querySelector(".banner3");

let mouseImage = document.querySelector(".followCursor");

banner1.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/Martin-Castro.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(-20vw);";
}
);

banner1.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);

banner1.addEventListener('click', goToDonate);

banner2.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/shutterstockZoneFatal.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(-20vw);";
}
);

banner2.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);

banner2.addEventListener('click', goToAuction);


banner3.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/chelsey-faucher-J2VNJcXqaFM-unsplash.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(-20vw);";
}
);

banner3.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
);
