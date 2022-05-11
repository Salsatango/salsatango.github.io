// JavaScript Document

//the elements of the first page appear separately, so I put them in different variables. 
var title = document.querySelector(".hero");
var overlay = document.querySelector(".overlay");
var main = document.querySelector(".mainSection");
var grid = document.querySelector(".firstGrid");
var def1 = document.querySelector(".definition1");
var line1 = document.querySelector(".breakline1");
var def2 = document.querySelector(".definition2");
var qst = document.querySelector(".question");
var btn1 = document.querySelector(".button1");


//this selects all the content of the second "page"
var ist = document.querySelectorAll(".prompt");
//clickable dialogue
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");
var fifth = document.querySelector(".fifth");

var ans1 = document.querySelector(".answer1");
var ans2 = document.querySelector(".answer2");
var ans3 = document.querySelector(".answer3");
var ans4 = document.querySelector(".answer4");
var ans5 = document.querySelector(".answer5");



overlay.addEventListener('click', mainAction);

btn1.addEventListener('click', secondScreen);

first.addEventListener('click', firstCount);
second.addEventListener('click', secondCount);
third.addEventListener('click', thirdCount);
fourth.addEventListener('click', fourthCount);
fifth.addEventListener('click', fifthCount);


//Yes, collapseHero(), enlargeMain(), inflateGrid() and collapseOverlay() could have been one function. 

function showButton1(){
	btn1.classList.remove("hidden");
}

function collapseOverlay (){
	overlay.classList.add("collapsed");
}

function collapseHero (){
	title.classList.add("collapsed");
}

function enlargeMain (){
	main.classList.remove("oneScreen")
}

function inflateGrid (){
	grid.classList.remove("collapsed");
}

function showFirst (){
	def1.classList.remove("hidden");
}

function showLine1 (){
	line1.classList.remove("hidden");
}

function showSecond (){
	def2.classList.remove("hidden");
}

function showQuestion (){
	qst.classList.remove("hidden");
}

function mainAction(){
	
collapseHero();
enlargeMain();
inflateGrid();
collapseOverlay();
setTimeout (showFirst,2000);
setTimeout (showLine1,3000);
setTimeout (showSecond,7000);
setTimeout (showQuestion,19000);
setTimeout (showButton1, 23000);
}

//this is way more compact that the previous one. 
function secondScreen(){
	
	def1.classList.add("hidden");
	line1.classList.add("hidden");
	def2.classList.add("hidden");
	btn1.classList.add("hidden");
	qst.classList.add("hidden");
	for (var x=0 ; x < ist.length; x++){
	ist[x].classList.remove("hidden");
	ist[x].classList.add("clickable");}
	
}


var firstTimer  = document.querySelector(".firstTimer");
var secondTimer  = document.querySelector(".secondTimer");
var thirdTimer  = document.querySelector(".thirdTimer");
var fourthTimer  = document.querySelector(".fourthTimer");
var fifthTimer  = document.querySelector(".fifthTimer");




	
	var seconds = 0;
	var deca= 0;

//I used a different function for each timer. I'm sure there's a more elegant way to do this. 
//Note: clearTimeout() stops setTimeout from happening, but you have to set a variable as setTimeout.

function firstCount(){
	
	firstTimer.textContent = seconds + ":" + "" + deca;
	var x = setTimeout (firstCount, 100);
	var y = setTimeout (count, 100);
	first.removeEventListener('click', firstCount);
	
	if (seconds==4){
		clearTimeout(y);
		clearTimeout(x);
		deca=0;
		seconds=0;
	}
	
	setTimeout (function(){ans1.classList.remove("hidden");}, 4000);
}

function secondCount(){
	
	secondTimer.textContent = seconds + ":" + "" + deca;
	var x = setTimeout (secondCount, 100);
	var y = setTimeout (count, 100);
	second.removeEventListener('click', secondCount);
	
	if (seconds==3){ 
		clearTimeout(y);
		clearTimeout(x);
		deca=0;
		seconds=0;
	}
	
	setTimeout (function(){ans2.classList.remove("hidden");}, 3000);
}

function thirdCount(){
	
	thirdTimer.textContent = seconds + ":" + "" + deca;
	var x = setTimeout (thirdCount, 100);
	var y = setTimeout (count, 100);
	third.removeEventListener('click', thirdCount);
	
	if (seconds==11){
		clearTimeout(y);
		clearTimeout(x);
		deca=0;
		seconds=0;
	}
		setTimeout (function(){ans3.classList.remove("hidden");}, 11000);
}

function fourthCount(){
	
	fourthTimer.textContent = seconds + ":" + "" + deca;
	var x = setTimeout (fourthCount, 100);
	var y = setTimeout (count, 100);
	fourth.removeEventListener('click', fourthCount);
	
	if (seconds==7){ 
		clearTimeout(y);
		clearTimeout(x);
		deca=0;
		seconds=0;
	}
	
			setTimeout (function(){ans4.classList.remove("hidden");}, 7000);
}

function fifthCount(){
	
	fifthTimer.textContent = seconds + ":" + "" + deca;
	var x = setTimeout (fifthCount, 100);
	var y = setTimeout (count, 100);
	fifth.removeEventListener('click', fifthCount);
	
	if (seconds==10){ 
		clearTimeout(y);
		clearTimeout(x);
		deca=0;
		seconds=0;
	}
	
	setTimeout (function(){ans5.classList.remove("hidden");}, 10000);
}


function count(){
		 	
	if (deca == 9)
		{ deca = 0;
		if (seconds <60) {seconds++} 
		}
    	else {deca++;}
}





