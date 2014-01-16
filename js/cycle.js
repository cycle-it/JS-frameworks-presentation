
document.addEventListener("keydown", function ( event ) {
	if ( event.keyCode === 9 || ( event.keyCode >= 32 && event.keyCode <= 34 ) || (event.keyCode >= 37 && event.keyCode <= 40) ) {
		event.preventDefault();
		var element = document.querySelector('div#bug > img')
		element.style.webkitTransform = 'rotateY(180deg)'
		element.style.webkitFilter = '/* blur(4px) */ brightness(1.5)'
		window.setTimeout(function (event) {
			var element = document.querySelector('div#bug > img')
			element.style.webkitTransform = 'rotateY(0deg)'
			element.style.webkitFilter = ''
		}, 500)
	}
}, false);

