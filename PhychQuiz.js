//Site Variables
var MainTitleTxt = document.getElementById("MainTitleTxt");
var MainTitleScreen = document.getElementById("MainTitleScreen");
var MainQuiz = document.getElementById("MainQuiz");
var QuestionTxt = document.getElementById("Question");
//Function Variables
var QuizLength = 0;
var History = [];
//Button Variables
var StartBtn = document.getElementById("StartBtn");
var Opt1 = document.getElementById("Opt1");
var Opt2 = document.getElementById("Opt2");
var Opt3 = document.getElementById("Opt3");
var Opt4 = document.getElementById("Opt4");
//Eventlisteners
StartBtn.addEventListener("click", StartQuiz);
Opt1.addEventListener("click", check);
Opt2.addEventListener("click", check);
Opt3.addEventListener("click", check);
Opt4.addEventListener("click", check);
//Main Loop
var RNG = Math.floor(Math.random()*10)
//Functions
function StartQuiz() {
	MainTitleScreen.style.display = "none";
	MainQuiz.style.display = "initial"; 
	MainQuiz();
}
function MainQuiz() {
	for (i=0; i<=QuizLength; i++) {
		var question = QuestIndex[RNG]
		repeatCheck()
		if (question == History[i]) {
			
		} else {
			QuestionTxt.innerHTML = QuestionIndex[question];
			History.push(question);
		}
	}
}
function repeatCheck() {
	for (i=0; i <= History.length; i++) {
		if (question == History[i]) {
			
		}
	}
}
function check() {
	
}
//Question Index
var QuestIndex = ["Question_1-eg","Question_2-eg","Question_3-eg","Question_4-eg",];
//Awnser Index
var AnsIndex  = ["Ans_1-eg","Ans_2-eg","Ans_3-eg","Ans_4-eg",
"Ans_5-eg","Ans_6-eg","Ans_7-eg",
"Ans_8-eg","Ans_9-eg","Ans_10-eg","Ans_11-eg","Ans_12-eg",
"Ans_13-eg","Ans_14-eg","Ans_15-eg","Ans_16-eg","Ans_17-eg",
"Ans_18-eg",];