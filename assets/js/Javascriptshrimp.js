// JavaScript Document

function registerCoords(event) {
  	var x = event.pageX;
  	var y = event.pageY;
	/*
	how to get the vertical scroll pixels of an element
	var scrolled = document.getElementById("page");
	var z = scrolled.scrollTop;
	*/
  document.getElementById("followCursor🦐").style.left = (x-200) + "px";
  document.getElementById("followCursor🦐").style.top = y-200 + "px";

}

function stopFollowingCursor() {
  document.getElementById("followCursor🦐").style.opacity = "0" ;
}

function startFollowingCursor() {
  document.getElementById("followCursor🦐").style.opacity = "70";
}