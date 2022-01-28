
window.onload = function(){createArticles();numberChildren(); ConsoleLogs();populateContent();scroll();createLinks();hoverImages();}

window.addEventListener('mousemove', registerCoords);
window.addEventListener('mousewheel', registerCoords); 

var numberOfEntries = Object.keys(entriesInfo.projects).length;

var y=0;

//this function creates the same number of articles in the grid section than there are in the JSON file.
function createArticles (){
	for(d=0; d<numberOfEntries; d++){
	var newArticle = document.createElement("article");
	document.querySelector(".entriesSection").appendChild(newArticle);
}
	 return;
}


//This function gives each div a numbered class in order.
function numberChildren(){
//I originally used "async/await" here

var allSections = document.querySelectorAll('.entriesSection article');
//this variable is declared after the divs are created.	
		for (var y = 0; y < allSections.length;){
			allSections[y].classList.add(y+1);

//this part adds another div inside each new numbered div
			var newDiv = document.createElement("div");
			var newDiv2 = document.createElement("div");
			var newDiv3 = document.createElement("div");
//this gives an unique numbered class to the divs created.
			allSections[y].appendChild(newDiv).className = ("date" + (y+1));
			document.querySelector(".date"+ (y+1)).classList.add("date");
			document.querySelector(".date"+ (y+1)).classList.add("font1");
			
			allSections[y].appendChild(newDiv2).className = ("title" + (y+1));
			document.querySelector(".title"+ (y+1)).classList.add("title");
			document.querySelector(".title"+ (y+1)).classList.add("font2");
			
			allSections[y].appendChild(newDiv3).className = ("description" + (y+1));
			document.querySelector(".description"+ (y+1)).classList.add("description");
			document.querySelector(".description"+ (y+1)).classList.add("font1");
			
			y++;
			//console.log(y);
}}




//This function fills the divs with content from the JSON.
function populateContent(){
var allSections = document.querySelectorAll('.entriesSection article');
	
	for (var x = 0; x < allSections.length;){
		//console.log(entriesInfo.projects);
	//create an array and put the entries in entriesInfo.projects in it.
			var projectsIndex = [];
				for (var z in entriesInfo.projects) {
				projectsIndex.push(z);}
				//console.log(projectsIndex);
		
	//get the index of the current project in that array
			var currentProjectIndex = projectsIndex[x];
			//console.log(currentProjectIndex);
		
	//this is the correct div for the date
			var currentProjectDateSection = document.querySelector(".date"+ (x+1));
			//console.log(currentProjectDateSection);
	//this is the correct div for the title
			var currentProjectTitleSection = document.querySelector(".title"+ (x+1));
			//console.log(currentProjectTitleSection);
	//this is the correct div for the description
			var currentProjectDescriptionSection = document.querySelector(".description"+ (x+1));
			//console.log(currentProjectDescriptionSection);
		
		
			var date = 
				(entriesInfo.projects[currentProjectIndex].date);
			//console.log(date);
			var title = 
				(entriesInfo.projects[currentProjectIndex].title);
			//console.log(title);
			var description = 
				(entriesInfo.projects[currentProjectIndex].shortDescription);
			//console.log(description);
		
				currentProjectDateSection.innerHTML = date;
				currentProjectTitleSection.innerHTML = title;
				currentProjectDescriptionSection.innerHTML = description;

		
		x++;
		
	
}}


//this function does what its name says it does
function ConsoleLogs(){

	console.log("there are" + " " + numberOfEntries + " "+ "entries");

}



//make the articles clickable. They go to the right pages when clicked
function createLinks (){
	var allSections = document.querySelectorAll('.entriesSection article');
	//console.log(allSections);
	var projectsIndex = [];
				
	
	for (var z in entriesInfo.projects) {
				projectsIndex.push(z);
				//console.log(projectsIndex);
				};


	for (let w = 0; w < allSections.length; w++){

		let currentProjectName = projectsIndex[w];
		let currentArticle = document.getElementsByClassName((w + 1));
//getElementsByClassName returns html collection, so if you need to add event Listener to an element, you will need to do something like following: currentArticle[0].addEventListener('click', ConsoleLogs);
		
		//console.log(currentArticle[0]);
		//console.log(projectsIndex[w]);
		//console.log(currentProjectName);
		
			
		
		currentArticle[0].addEventListener('click', function navigateTo(){
			window.location.href = currentProjectName + ".html";});

		}
		}



		
/*
var butt = document.querySelector(".testButton");
butt.addEventListener('click', testLoad);

function testLoad() {
	window.location.href = "pageTemplate.html";
}


*/







//for auto-scrolling

let scrollSection = document.querySelectorAll(".scrollingTextContainer");
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
		//console.log("clientHeight y" + " " + y);
//Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).

		let a = document.documentElement.scrollTop  || document.documentElement.scrollTop;
		//console.log("scrollTop a" + " "+ a);
//The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
		let b = element.offsetTop;
		//console.log("offsetTop b" + " " + b);
	
		let g = document.documentElement.scrollHeight;
		//console.log("scrollheight g" + " " + g);

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
		//console.log(element.scrollLeft);
		}
		else{
			element.scrollLeft = (a/(b)*x);
		}


})}







// Register cursor coordinates

function registerCoords(event) {
  	let x = event.pageX;
  	let y = event.pageY;

let freeSpaceRight = document.documentElement.clientWidth - x;
let freeSpaceBottom = document.documentElement.clientHeight + document.documentElement.scrollTop - y;
	
	console.log("free space to the right:"+freeSpaceRight);
	console.log("free space to the bottom:"+freeSpaceBottom);
let cursorFollower = document.querySelector(".followCursor");
	
	if (freeSpaceRight > 800 && freeSpaceBottom > 500) {
		cursorFollower.style.left = (x) + "px";
		cursorFollower.style.top = (y) + "px";
	}
		else if( freeSpaceRight < 800 &&  freeSpaceBottom > 500){
		cursorFollower.style.left = x-(800-freeSpaceRight) + "px";
		cursorFollower.style.top = (y) + "px";
		}
		else if( freeSpaceRight > 800 &&  freeSpaceBottom < 500){
		cursorFollower.style.left = (x) + "px";
		cursorFollower.style.top = y-(500-freeSpaceBottom) + "px";	
		}
		else {
			cursorFollower.style.left = x-(800-freeSpaceRight) + "px";
			cursorFollower.style.top = y-(500-freeSpaceBottom) + "px";
		}

	
let coordinateX = document.querySelector(".coordinateX");
let coordinateY = document.querySelector(".coordinateY");
	
	coordinateX.innerHTML  = x;
	coordinateY.innerHTML  = y;
	

} 






//display image when you hover over articles
function hoverImages(){
	var allSections = document.querySelectorAll('.entriesSection article');
	var allSectionsBlock = document.querySelector('.entriesSection');
	//console.log(allSections);
	var projectsIndex = [];
	let cursorFollower = document.querySelector(".followCursor");
	//console.log(cursorFollower);
	
	for (var z in entriesInfo.projects) {
				projectsIndex.push(z);
				//console.log(projectsIndex);
				};
	
		for (let w = 0; w < allSections.length; w++){

		let currentProjectName = projectsIndex[w];
			console.log(currentProjectName);
		let currentArticle = document.getElementsByClassName((w + 1));
			console.log(currentArticle[0]);
		let imageURL = (entriesInfo.projects[currentProjectName].pictures.picture1);
			console.log(imageURL);
		
			
			
		currentArticle[0].addEventListener('mouseover', function showImage()
			{
			cursorFollower.style.backgroundImage = "url("+imageURL+")";
			cursorFollower.style.opacity = "100";
			}
										  );
			
			allSectionsBlock.addEventListener('mouseleave', function hideImage()
			{
			cursorFollower.style.opacity = "0";
			}
										  );
}
}

/*
//element that follows cursor
window.addEventListener('mousemove', registerCoords);

function registerCoords(event) {
  	var x = event.pageX;
  	var y = event.pageY;

let cursorFollower = document.querySelector(".followCursor");
  cursorFollower.style.left = (x) + "px";
  cursorFollower.style.top = (y) + "px";
}


element.addEventListener('mouseover',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/chelsey-faucher-J2VNJcXqaFM-unsplash.jpg); width:50vw; height:75vh; transform:translateY(-20vh) translateX(-20vw);";
}
);

element.addEventListener('mouseleave',function() {
	console.log(mouseImage);
	mouseImage.style.cssText = "background-image: url(images/net.svg); width:30vw; height:50vh; transform:translateY(0vh)  translateX(0px);";
}
*/
