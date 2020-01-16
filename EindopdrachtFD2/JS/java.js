/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars:
true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
/* exported myFunction */

/*CODE voor hamburger menu van Carlijn Bruin*/
/*
var zoekbutton = document.querySelector(".burger");
var zoekveld = document.querySelector(".linkjes");

function show() {
	zoekveld.classList.toggle("show-search");
}

zoekbutton.addEventListener("click", show);
*/

var button = document.querySelector(".klik");
var layout = document.querySelector("body");

function show() {
	layout.classList.toggle("bright");
}

button.addEventListener("click", show);