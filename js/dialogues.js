// https://stackoverflow.com/questions/57576772/chaining-properties-using-data-from-array
// Correction by junvar https://stackoverflow.com/a/57577165/604040
let x = () =>
	new TypeIt('#dialogues', {
		speed: 35,
		cursor: false
	});

var dialogues = [
	{
		text: x().type("When it comes to you and I, ").pause(700).type("surely you recognize my greatness. ").pause(2500).type("Yet,").pause(500).type(" that is irrelevant.").pause(1700).break().type(" You are my Master.").pause(1600).type(" I regard that fact highly. "),
		expressionList: function() {
				setTimeout(function(){					
					face.classList.remove("expNone");
					expression.setAttribute("xlink:href", "images/portraits/arjuna/arjuna_3_exp06.png")
				}, 9000);
				setTimeout(function(){
					face.classList.add("expNone");
					dialogueBoxb.innerHTML = '';
				}, 16000);
			},
		audio: "dialogue03.ogg"
	},
	{
		text: x().type("The things I... like? ").pause(700).type("I feel at ease when I'm alone... ").pause(2500).type("A sentiment unbefitting of a hero."),
		expressionList: function() {
				setTimeout(function(){
					face.classList.remove("expNone");
					expression.setAttribute("xlink:href", "images/portraits/arjuna/arjuna_3_exp04.png")
				}, 4000);
				setTimeout(function(){
					face.classList.add("expNone");
					dialogueBoxb.innerHTML = '';
				}, 11000);				
			},
		audio: "dialoguelike.ogg"
	},
	{
		text: x().type("The things I... dislike? ").pause(700).type("I don’t like it very much when people try to intrude into my heart...").pause(700).type("Please be careful, Master."),
		expressionList: function() {
				setTimeout(function(){
					face.classList.remove("expNone");
					expression.setAttribute("xlink:href", "images/portraits/arjuna/arjuna_3_exp04.png")
				}, 4000);
				setTimeout(function(){
					face.classList.add("expNone");
					dialogueBoxb.innerHTML = '';
				}, 11000);				
			},
		audio: "dialoguedislike.ogx"
	}
];


var refreshDialogueBox = document.querySelector(".dialogue-box");
var dialogueBoxb = document.querySelector("#dialogues");
var face = document.querySelector("rect");
var voice = document.querySelector("audio");
voice.volume = 0.05;
var dialoguesLength = dialogues.length;
var expression = document.querySelector(".mlap");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

refreshDialogueBox.addEventListener("click", function() {
	let randomNo = getRandomInt(dialoguesLength);
	let dialogueText = dialogues[randomNo].text;
	let expressions = dialogues[randomNo].expressionList;
	let audioFile = "audio/arjuna/" + dialogues[randomNo].audio;
	voice.pause();
	voice.currentTime = 0;
	dialogueText.reset();
	dialogueText.go();
	expressions();
	voice.setAttribute("src", audioFile)
	voice.play();
});