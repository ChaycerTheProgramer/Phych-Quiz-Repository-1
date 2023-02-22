//Site Variables
var titleM = document.getElementById("title");

//Function Variables
var titleC = titleM.style.color;

//Eventlisteners
title.addEventListener("click", titleChange);

//functions
function titleChange(){
	if(titleC == "blue") {
		titleC = "red";	
	} else if(titleC == "red") {
		titleC = "blue";
	};
};
