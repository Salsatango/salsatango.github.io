
window.onload = function(){numberChildren(); insecureConsoleLogs();}

var allSections = document.querySelectorAll('.entriesSection div');
var numberOfEntries = Object.keys(entriesInfo).length;

//This function gives each div a numbered class in order.
function numberChildren(){
for (var y = 0; y < allSections.length;){
	allSections[y].classList.add(y+1);
	y++;
}}

// This is to load the JSON file

async function getJSON() {
    let url = 'https://jsonware.com/json/abfe005c41c8214e22e487b8d6eff417.json'
    let obj = await (await fetch(url)).json();
    
    //console.log(obj);
    return obj;
}
var tags;
(async () => {
  tags = await get()
  //console.log(tags)
  document.getElementById("tags").innerHTML = JSON.stringify(tags);
})()


//this function does what its name says it does
function insecureConsoleLogs(){
	console.log(numberOfEntries);
}