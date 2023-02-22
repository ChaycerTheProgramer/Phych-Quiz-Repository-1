//Site Variables
var StartBtn = document.getElementById("StartBtn");
var MainTitleTxt = document.getElementById("MainTitleTxt");
var MainTitleScreen = document.getElementById("MainTitleScreen");
var MainQuiz = document.getElementById("MainQuiz");
//Function Variables
var QuestNum = 0;
//Eventlisteners
StartBtn.addEventListener("click", StartQuiz);

//Main Loop

//Functions
function StartQuiz() {
	MainTitleScreen.style.display = "none";
	MainQuiz.style.display = "initial"; 
}
//Question Index

//Awnser Index
