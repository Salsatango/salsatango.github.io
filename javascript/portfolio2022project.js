window.onload = function(){getTitle(); createPictureDivs();numberChildren() ;populateImages();focusOnImage();unfocusOnImage();consoleLogs();triggerOnScroll();}




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

function triggerOnScroll(){

	document.addEventListener('scroll', appear(thingThatScrolls));
}

function appear(element){
	element.classList.remove("hidden");
}

function fadeOut(element){
	element.classList.add("hidden");
}

/*
function focusOnImage(){
	let images = document.querySelectorAll(".picturesSection div");
	let background = document.querySelector(".background");
	
	images.forEach(

		function(element){
			element.addEventListener('click', 		
									 function zoom(element){
			element.classList.add("opaque");
		});
			console.log(element);
		}

	
	)
}*/

function consoleLogs(){

}

