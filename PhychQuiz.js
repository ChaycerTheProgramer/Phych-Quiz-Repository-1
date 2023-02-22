//Site Variables
var StartBtn = document.getElementById("StartBtn");
var MainTitleTxt = document.getElementById("MainTitleTxt");
var MainTitleScreen = document.getElementById("MainTitleScreen");
var MainQuiz = document.getElementById("MainQuiz");
//Function Variables
var QuestNum = 0;
var AnsIndex[];
//Eventlisteners
StartBtn.addEventListener("click", StartQuiz);

//Main Loop

//Functions
function StartQuiz() {
	MainTitleScreen.style.display = none;
	MainQuiz.style.display = initial; 
}
//Question Index

//Awnser Index
var Ans[] = "Ans1","Ans2","Ans3","Ans4","Ans5","Ans6";