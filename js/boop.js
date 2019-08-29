// code by Rene https://codepen.io/rm89/
// https://codepen.io/rm89/details/aNOmzQ#forks
var boop = document.querySelector("#boop");
var container = document.querySelector("body");

container.addEventListener("click", function(event) {
	var xPosition = event.clientX - container.getBoundingClientRect().left - (boop.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (boop.clientHeight / 2);
	// in case of a wide border, the boarder-width needs to be considered in the formula above 
	boop.style.left = xPosition + "px";
	boop.style.top = yPosition + "px";

	// https://css-tricks.com/restart-css-animation/#article-header-id-0
	boop.classList.remove("blah");
	void boop.offsetWidth;
	boop.classList.add("blah");
	} 
);