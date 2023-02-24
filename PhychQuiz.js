//Site Variables
var MainTitleTxt = document.getElementById("MainTitleTxt");
var MainTitleScreen = document.getElementById("MainTitleScreen");
var MainQuiz = document.getElementById("MainQuiz");
var QuestionTxt = document.getElementById("Question");
QuestionTxt.innerHTML = "QuestionTxt_Test";
//Function Variables
var QuizLength = 0;
var History = [];
var Num = undefined;
var Num2 = undefined;
var correct = 0;
var incorrect = 0;
var tempCorrectA = undefined;
var tempCorrectQ = undefined;

//Button Variables
var StartBtn = document.getElementById("StartBtn");
var Ans = document.getElementsByClassName("Ans");
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
var RNG = Math.floor(Math.random()*10);
var RNG2 = Math.floor(Math.random()*4);
//Functions
function StartQuiz() {
	MainTitleScreen.style.display = "none";
	MainQuiz.style.display = "initial"; 
	MainQz();
}
function MainQz() {
	Num = RNG;
	tempCorrectQ = Num;
	var question = QuestIndex[Num];
	for (k=0; k <= History.length; k++) {
		if (question == History[k]) {
			k--
		} else {
			QuestionTxt.innerHTML = question;
			Num2 = RNG2;
			tempCorrectA = Num2;
			Ans[Num2].innerHTML = AnsIndex[Num];	
		}
	}
	for (j=0; j<=3; j++) {
		var temp = Math.floor(Math.random()*14) + j;
		if (j == Num2) {
		} else {
			Ans[j].innerHTML = AnsIndex[temp];
		}
	}
}
function check() {
	if (tempCorrectA == tempCorrectQ) {
		correct++
	} else {
		incorrect++
	}
	MainQz();
}
//Question Index
var QuestIndex = ["Question_1-eg","Question_2-eg","Question_3-eg",
"Question_4-eg","Question_5-eg","Question_6-eg","Question_7-eg","Question_8-eg",
"Question_9-eg","Question_10-eg"];
//Awnser Index
var AnsIndex  = ["Ans_1-eg","Ans_2-eg","Ans_3-eg","Ans_4-eg",
"Ans_5-eg","Ans_6-eg","Ans_7-eg",
"Ans_8-eg","Ans_9-eg","Ans_10-eg","Ans_11-eg","Ans_12-eg",
"Ans_13-eg","Ans_14-eg","Ans_15-eg","Ans_16-eg","Ans_17-eg",
"Ans_18-eg",]; 