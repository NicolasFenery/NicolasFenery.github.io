/*
setTimeout(function()
{ 
	if (confirm("Rencontre les tchoins de ta région. Viens voir le site xxxvidsxxx.")) 
	{
		window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	}

	}, 10000); */


var button = document.querySelector("button");
var isColored = false;

button.addEventListener("click", function(){

if(isColored) 
{
	document.body.style.background = "white";
	isColored = false;
} 

else{
	document.body.style.background = "magenta";
	isColored = true;
}

}); 