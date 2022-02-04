window.onload = function(){getTitle(); createPictureDivs();numberChildren() ;populateImages();focusOnImage();unfocusOnImage();createObserver();
						  
						  
						  createMenuArticles ();numberMenuChildren();populatemenuContent();menu();createMenuLinks (); linkIcon();}



var numberOfEntries = Object.keys(entriesInfo.projects).length;
var path = window.location.pathname;
var page = path.split("/").pop();
var pageFile = page.replace(".html", "");

function getTitle(){
console.log( page );
console.log( pageFile );
}

var numberOfPictures= Object.keys(entriesInfo.projects[pageFile].pictures).length;

function createPictureDivs(){
	//console.log( numberOfPictures );
	
	for(d=0; d<numberOfPictures; d++){
	var newDiv = document.createElement("div");
	document.querySelector(".picturesSection").appendChild(newDiv);
}
	 return;
}

function numberChildren(){
	var allSections = document.querySelectorAll('.picturesSection div');
//this variable is declared after the divs are created.	
		for (var y = 0; y < allSections.length;){
			allSections[y].classList.add("image"+(y));
			y++;
}}

function populateImages(){
	var allSections = document.querySelectorAll('.picturesSection div');
	
	for (var x = 0; x < allSections.length;){
		
//create an array and put the entries in entriesInfo.projects in it.
//I'm using the filename of the page as the JSON key
			let imagesIndex = [];
				for (var z in entriesInfo.projects[pageFile].pictures) {
				imagesIndex.push(z);}
				console.log(imagesIndex);
		
		
		let currentImageIndex = imagesIndex[x];
		console.log(currentImageIndex);
		
		var currentTitleSection =document.querySelector(".titleSection");
		var currentDateSection =document.querySelector(".dateSection");
		var currentDescriptionSection =document.querySelector(".descriptionSection");
		var currentImageSection = document.querySelector(".image"+(x));
		//console.log(currentImageSection);
		
		
//Getting the content from the JSON
		var title = 
		(entriesInfo.projects[pageFile].title);
		//console.log(title);
		
			var date= 
		(entriesInfo.projects[pageFile].date);
		//console.log(date);
		
		let description = 
		(entriesInfo.projects[pageFile].longDescription);
		//console.log(description);
		
		
		//You can also use the URL from the JSON file
let imageURL= 
		(entriesInfo.projects[pageFile].pictures[currentImageIndex]);
		console.log(imageURL);
		
		//let imageURL= "./Media/" + pageFile + "/" + pageFile + (x+1) +".jpg";
		//console.log(imageURL);
		
//populate content
		currentTitleSection.innerHTML = title;
		currentDateSection.innerHTML = date;
		currentDescriptionSection.innerHTML = description;
		currentImageSection.innerHTML = "<img>";
		var currentImage = currentImageSection.firstChild;
		//console.log(currentImage);
		
		currentImage.src=imageURL;
		



		x++;
	}

}


//for auto-scrolling

let scrollSection = document.querySelectorAll(".fullHeightScrollingTextContainer");
//you have to initialize a variable before using it.

window.onscroll = function(){scroll();}


function scroll(){
	//console.log(scrollSection);

scrollSection.forEach
	(function scroll1(element) {
		let x = element.scrollWidth;
		//console.log("x" + " " + x);
//The Element.scrollWidth read-only property is a measurement of the width of an element's content, including content not visible on the screen due to overflow.
		let y = document.documentElement.clientHeight;
		//console.log("clientHeight" + " " + y);
//Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).

		let a = window.pageYOffset || document.documentElement.scrollTop  || document.documentElement.scrollTop;
		//console.log("scrollTop" + " "+ a);
//The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
		let b = element.offsetTop;
		//console.log("offsetTop" + " " + b);
	
		let g = document.documentElement.scrollHeight;
		//console.log("scrollheight" + " " + g);
	
		let d = (a/y);
		//console.log("d" + " " + d);
// d is a function of c and y 
		element.scrollLeft = (d*x);

})}

function focusOnImage(){
let images = document.querySelectorAll(".picturesSection div");
let background = document.querySelector(".background");
let borderTop = document.querySelector(".topBar");
let borderBottom = document.querySelector(".bottomBar");
	
	images.forEach((element) => { 
			element.addEventListener('click',
				function zoom(){
				var clickedImage = element;

				
				
				console.log(clickedImage);
				clickedImage.classList.add("focused");
				background.classList.add("opaque");
				borderTop.classList.add("transparent");
				borderBottom.classList.add("transparent");
				
//how to insert a rule directly in the stylesheet.
		//		console.log(document.styleSheets);
				// var styleSheet = document.styleSheets[0];
    			//styleSheet.insertRule('::-webkit-scrollbar {width:0px;}', 0);
				
			});
	
	} )
}

//close image when you click on background
function unfocusOnImage(){
	let background = document.querySelector(".background");
	let clickedImage = document.querySelector(".focused");
	let borderTop = document.querySelector(".topBar");
	let borderBottom = document.querySelector(".bottomBar");
	
		background.addEventListener('click',
		function unZoom(){
		
		background.classList.remove("opaque");
		console.log(background);

		document.querySelector(".focused").classList.remove("focused");
		borderTop.classList.remove("transparent");
		borderBottom.classList.remove("transparent");
		

	}						   
							   )
}

let thingThatScrolls = document.querySelector(".fullHeightScrollingTextContainer");
let target = document.querySelector(".trigger");
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };
	//I think you can replace "observer" here with any name. this one executes the function "ayy" when the threshhold specified in options is crossed.
	
  observer = new IntersectionObserver(textAppear, options);
  observer.observe(target);

}

function textAppear(entries, observer){
	  entries.forEach(entry => {
		  
    if (entry.isIntersecting) {
      appear(thingThatScrolls);}
		  else{fadeOut(thingThatScrolls);}
	})
}









function collapse(element){
	element.classList.add("collapsed");
}

function uncollapse(element){
	element.classList.remove("collapsed");
}


function appear(element){
	element.classList.remove("hidden");
}

function fadeOut(element){
	element.classList.add("hidden");
}

function highlight(element){
	element.classList.add("highlighted");
}

function unhighlight(element){
	element.classList.remove("highlighted");
}







//for the nav

function createMenuArticles (){
	for(d=0; d<numberOfEntries; d++){
	var newMenuArticle = document.createElement("article");
	document.querySelector(".navMenu").appendChild(newMenuArticle);
		
}
	 return;
}

function numberMenuChildren(){
//I originally used "async/await" here

var allMenuSections = document.querySelectorAll('.navMenu article');
//this variable is declared after the divs are created.	
		for (var y = 0; y < allMenuSections.length;){
			allMenuSections[y].classList.add("menu" + (y+1));

//this part adds another div inside each new numbered div
			var newDiv = document.createElement("div");
//this gives an unique numbered class to the divs created.
			
			allMenuSections[y].appendChild(newDiv).className = ("menuTitle" + (y+1));
			let currentMenuSection = document.querySelector(".menuTitle" + CSS.escape(y+1));
			currentMenuSection.classList.add("navMenuDiv");
			
			y++;
			//console.log(y);
}}



function populatemenuContent(){
let allMenuSections = document.querySelectorAll('.navMenu article');
	
	for (var x = 0; x < allMenuSections.length;){
		//console.log(entriesInfo.projects);
	//create an array and put the entries in entriesInfo.projects in it.
			var projectsIndex = [];
				for (var z in entriesInfo.projects) {
				projectsIndex.push(z);}
				//console.log(projectsIndex);
		
	//get the index of the current project in that array
			var currentProjectIndex = projectsIndex[x];
			//console.log(currentProjectIndex);
		
			var currentProjectTitleSection = document.querySelector(".menuTitle"+ (x+1));

			var title = 
				(entriesInfo.projects[currentProjectIndex].title);
			console.log(title);

				currentProjectTitleSection.innerHTML = title;


		
		x++;
		
	
		
}
}




//make the articles clickable. They go to the right pages when clicked
function createMenuLinks (){
	var allSections = document.querySelectorAll('.navMenu article');
	//console.log(allSections);
	var projectsIndex = [];
				
	
	for (var z in entriesInfo.projects) {
				projectsIndex.push(z);
				//console.log(projectsIndex);
				};


	for (let w = 0; w < allSections.length; w++){

		let currentProjectName = projectsIndex[w];
		let currentArticle = document.getElementsByClassName("menu"+(w + 1));

		
//getElementsByClassName returns html collection, so if you need to add event Listener to an element, you will need to do something like following: currentArticle[0].addEventListener('click', ConsoleLogs);
		
		//console.log(currentArticle[0]);
		//console.log(projectsIndex[w]);
		//console.log(currentProjectName);
		
			
		
		currentArticle[0].addEventListener('click', function navigateTo(){
			window.location.href = currentProjectName + ".html";});

		}
		}















	function menu(){
let navMenu = document.querySelector(".nav");
	console.log(navMenu);
let openMenu = document.querySelector(".menuIcon");
let closeMenu = document.querySelector(".navClose");
let menuBackground = document.querySelector(".menuBackground");
 
openMenu.addEventListener('click', function uncollapseMenu(){
uncollapse(navMenu);
uncollapse(closeMenu);
toFront(menuBackground);

														}
						)
closeMenu.addEventListener('click', function collapseMenu(){
collapse(navMenu);
collapse(closeMenu);
toBack( menuBackground);
}
						)
		
		
 menuBackground.addEventListener("click", function collapseMenu(){
collapse(navMenu);
collapse(closeMenu);
toBack(menuBackground);
})
}



function linkIcon() {
	let websiteIcon = document.querySelector(".websiteIcon");
	websiteIcon.addEventListener("click", function navigateTo(){
			window.location.href = "index.html";});
}







function toFront(element){
	element.classList.add("toFront");
}

function toBack(element){
	element.classList.remove("toFront");
}







/*
document.querySelector(".nav").onscroll = function(){menuScroll();}


function menuScroll(){
	let menuScrollSections = document.querySelectorAll(".navMenu article");
//you have to initialize a variable before using it.
	console.log(menuScrollSections);

	
menuScrollSections.forEach
	(function scroll2(element) {
		let x = element.scrollWidth;
		console.log("x" + " " + x);
//The Element.scrollWidth read-only property is a measurement of the width of an element's content, including content not visible on the screen due to overflow.
		let y = document.documentElement.clientHeight;
		console.log("clientHeight y" + " " + y);
//Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
		let h = document.querySelector(".nav");
		
		let a = h.scrollTop;
		console.log("scrollTop a" + " "+ a);
//The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
		let b = element.offsetTop;
		console.log("offsetTop b" + " " + b);
	
		let g = h.scrollHeight;
		console.log("scrollheight g" + " " + g);

		let d=0;
		if (((a+y)>b) && (a>0)) {
			
		d = (a+y-b-200);
		
		}
		else{
		d = 0;}

		//console.log("d" + " " + d);
// d is what fraction of the clientheight has been scrolled
		if(b>y){
			element.scrollLeft = (d/(y)*x);
		console.log(element.scrollLeft);
		}
		else{
			element.scrollLeft = (a/(b)*x);
			console.log(element.scrollLeft);
			
		}


})}
*/


