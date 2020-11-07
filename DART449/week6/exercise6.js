// JavaScript Document


let picture2 = document.querySelector('.awayTeam');
let picture = document.querySelector('.transporting');
let target = document.querySelector(".trigger");
let observer;

//This thing creates a window listener for when the page loads, and executes the funtion "createObserver"

window.addEventListener('load', createObserver);

//This function is purely to create the observer and its options. 
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };
	//I think you can replace "observer" here with any name. this one executes the function "ayy" when the threshhold specified in options is crossed.
	
  observer = new IntersectionObserver(ayy, options);
  observer.observe(target);
}

function teleporting(){
	picture.classList.toggle("hidden");
}

function teleporting2(){
	picture2.classList.toggle("hidden");
}

function teleportOut(){
	teleporting2();
	setTimeout (teleporting, 1500);

}

function teleportIn(){
	teleporting();
	setTimeout (teleporting2, 1500);
}


function ayy(entries, observer){
	  entries.forEach(entry => {
		  
    if (entry.isIntersecting) {
      teleportOut();}
		  else{teleportIn();}
	})
}