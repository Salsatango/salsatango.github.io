// JavaScript Document

function registerCoords(event) {
  	var x = event.pageX;
  	var y = event.pageY;
	/*
	how to get the vertical scroll pixels of an element
	var scrolled = document.getElementById("page");
	var z = scrolled.scrollTop;
	*/
  document.getElementById("followCursorShrimp").style.left = (x-200) + "px";
  document.getElementById("followCursorShrimp").style.top = y-200 + "px";

}

function stopFollowingCursor() {
  document.getElementById("followCursorShrimp").style.opacity = "0" ;
}

function startFollowingCursor() {
  document.getElementById("followCursorShrimp").style.opacity = "70";
}