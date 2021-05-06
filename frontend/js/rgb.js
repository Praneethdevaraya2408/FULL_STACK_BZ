function myColour() {
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;
	var colour = 'rgb(' + red + ',' + green + ',' + blue + ')';
	box.style.background= 'rgb(' + red + ',' + green + ',' + blue + ')';
	document.getElementById('box').value = colour;
	document.getElementById('display').colour=colour;

}

document.getElementById('red')
	.addEventListener('input', myColour);
document.getElementById('green')
	.addEventListener('input', myColour);
document.getElementById('blue')
	.addEventListener('input', myColour);
