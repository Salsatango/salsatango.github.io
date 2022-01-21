
window.onload = function(){numberChildren(); insecureConsoleLogs();}

var allSections = document.querySelectorAll('.entriesSection div');
var numberOfEntries = Object.keys(entriesInfo).length;

//This function gives each div a numbered class in order.
function numberChildren(){
for (var y = 0; y < allSections.length;){
	allSections[y].classList.add(y+1);
	y++;
}}
//this function does what its name says it does
function insecureConsoleLogs(){
	console.log(numberOfEntries);
}