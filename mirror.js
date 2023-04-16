window.onload = function() {
	var myIframe = document.getElementById("myIframe");
	myIframe.src = window.location.href;
	
	window.onhashchange = function() {
		myIframe.src = window.location.href;
	};
};
