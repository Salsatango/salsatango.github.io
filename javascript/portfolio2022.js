
window.onload = function(){createArticles();numberChildren(); insecureConsoleLogs();populateContent();}
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
			
			allSections[y].appendChild(newDiv2).className = ("title" + (y+1));
			document.querySelector(".title"+ (y+1)).classList.add("title");
			
			allSections[y].appendChild(newDiv3).className = ("description" + (y+1));
			document.querySelector(".description"+ (y+1)).classList.add("description");
			
			y++;
			console.log(y);
}}

function populateContent(){
var allSections = document.querySelectorAll('.entriesSection article');
	
	for (var x = 0; x < allSections.length;){
		console.log(entriesInfo.projects);
		//create an array and put the entries in entriesInfo.projects in it.
			var projectsIndex = [];
				for (var z in entriesInfo.projects) {
				projectsIndex.push(z);}
				console.log(projectsIndex);
		
		//get the index of the current project in that array
			var currentProjectIndex = projectsIndex[x];
			console.log(currentProjectIndex);
		
		//this is the correct div for the date
			var currentProjectDateSection = document.querySelector(".date"+ (x+1));
			console.log(currentProjectDateSection);
		//this is the correct div for the title
			var currentProjectTitleSection = document.querySelector(".title"+ (x+1));
			console.log(currentProjectTitleSection);
		//this is the correct div for the description
			var currentProjectDescriptionSection = document.querySelector(".description"+ (x+1));
			console.log(currentProjectDescriptionSection);
		
		
			var date = 
				(entriesInfo.projects[currentProjectIndex].date);
			console.log(date);
			var title = 
				(entriesInfo.projects[currentProjectIndex].title);
			console.log(title);
			var description = 
				(entriesInfo.projects[currentProjectIndex].description);
			console.log(description);
		
				currentProjectDateSection.innerHTML = date;
				currentProjectTitleSection.innerHTML = title;
				currentProjectDescriptionSection.innerHTML = description;

		
		x++;
		
	
}}











//this function does what its name says it does
function insecureConsoleLogs(){
	console.log(entriesInfo.length);
	console.log(numberOfEntries);
	console.log(entriesInfo.projects.bookshelf.description);

}