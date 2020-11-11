// JavaScript Document

const menuTrigger = document.querySelector('#trigger');
let navigationBar = document.querySelector('.nav');
let body=document.querySelector(".mainBody");

menuTrigger.addEventListener('click', openNav);
document.addEventListener('click', consoleMessage);
body.addEventListener('click', hideNav);

function openNav(){
	navigationBar.classList.remove("hidden");
	navigationBar.classList.remove("collapsed");
}

function hideNav(){
	navigationBar.classList.add("hidden");
	navigationBar.classList.add("collapsed");
}

function consoleMessage(){
	console.log(navigationBar);
	console.log(menuTrigger);
}



window.addEventListener('load', createObserver);


function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };
	
		
  observer = new IntersectionObserver(ayy, options);
  observer.observe(target);
}
