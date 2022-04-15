//Site Variables
var title = document.getElementById("title");
//Function Variables

//Eventlisteners
title.addEventListener("click", titleChange);

function titleChange(){
	if(title.style.color = "blue") {
		title.style.color = "red";	
	} else {
		title.style.color = "blue";
	};
};
