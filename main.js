 // 1. Grab the input value
// captures the value of the search field when button is clicked
document.querySelector(".js-go").addEventListener('click', function() {
	var input = document.querySelector("input").value;
	urlSearch(input);
});

// caputures the value of the search field with the enter key is pressed
document.querySelector(".js-userinput").addEventListener('keyup', function(e) {
	var input = document.querySelector("input").value;

	// if the key enter is pressed then execute
	if (e.which === 13) {	
		urlSearch(input);
	};
});


// 2. Interact with API */
// value is concatinated into the url and then request is made
function urlSearch(input) {
	var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open('GET', url);
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function(e) {
		var data = e.target.response;
		pushToDom(data);
	});
};

// 3. Show me the GIFs 

function pushToDom(input) {
	var response = JSON.parse(input);
	var imageURL = response.data;
	var container = document.querySelector(".js-container");
	container.innerHTML = ""; // clear the dom for each new search

	imageURL.forEach(function (image) {
		console.log(image);
		var src = image.images.fixed_height.url;
		container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
	});
};












