// JavaScript Document

var btn = document.querySelector('.btn');
var textInput = document.querySelector(".input").value;
var displaymsg = document.querySelector(".messageArea");
var imageSource = document.querySelector(".captcha");

btn.addEventListener('click', verify);

function hide(x){
	x.classList.add("hidden");}


function unhide(x){
	x.classList.remove("hidden");}

function changeSource(){
	imageSource.src = "success.jpg";
}

function changeSourceBack(){
	imageSource.src = "captcha-01.jpg";
}
function openWebsite(){
	window.open("https://www.google.com/recaptcha/about/");
}
function verify() {
	
	var textInput = document.querySelector(".input").value;
	console.log(textInput);
	
	if (textInput == "“I will tell you why. So shall my anticipation prevent your discovery, and your secrecy to the king and queen moult no feather. I have of late—but wherefore I know not—lost all my mirth, forgone all custom of exercises, and indeed it goes so heavily with my disposition that this goodly frame, the earth, seems to me a sterile promontory; this most excellent canopy, the air—look you, this brave o'erhanging firmament, this majestical roof fretted with golden fire—why, it appears no other thing to me than a foul and pestilent congregation of vapors. What a piece of work is a man! How noble in reason, how infinite in faculty! In form and moving how express and admirable! In action how like an angel, in apprehension how like a god! The beauty of the world. The paragon of animals. And yet, to me, what is this quintessence of dust? Man delights not me. No, nor woman neither, though by your smiling you seem to say so.”") {
		
	setTimeout (unhide.bind(null,displaymsg), 1600);
	setTimeout (changeSource, 200);
	setTimeout (function(){ displaymsg.textContent = "Verification Success";}, 1600);
	setTimeout (openWebsite, 2000);
		
	
}
	else{ 
		changeSourceBack();
		unhide(displaymsg);
		displaymsg.textContent = "Try again."; 
		setTimeout (hide.bind(null,displaymsg), 1500);
		//apparently to pass a parameter to setTimeout, you need to add .bind to the function. Pretty cool.
		}

}
