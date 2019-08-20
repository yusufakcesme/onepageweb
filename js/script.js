
document.getElementById("scroll-nav").style.display = "none";
window.onscroll = function() {
	scrollNavfunction()
}
function scrollNavfunction() {

	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

		document.getElementById("scroll-nav").style.display = "block";
		document.getElementById("main-nav").style.display = "none";
	} else {
		document.getElementById("scroll-nav").style.display = "none";
		document.getElementById("main-nav").style.display = "block";
	}


}




