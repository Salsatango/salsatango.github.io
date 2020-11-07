// JavaScript Document


let picture2 = document.querySelector('.awayTeam');
let picture = document.querySelector('.transporting');
let target = document.querySelector(".trigger");
let observer;
window.addEventListener('load', createObserver);


/*Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other:*/

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