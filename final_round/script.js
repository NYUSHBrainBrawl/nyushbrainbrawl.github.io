var w = window.innerWidth;
var h = window.innerHeight;
var teamR = document.querySelector('#teamR');
var teamB = document.querySelector('#teamB');
var barR = document.querySelector('#barR');
var barB = document.querySelector('#barB');
var numberR = document.querySelector('#numberR');
var numberB = document.querySelector('#numberB');
var pointsR = 0;
var pointsB = 0;
var timeR = 0;
var timeB = 0;
var showdown = false;
var isR = true;
var buff = 30;
var scale = 100;
var maxHR;
var maxHB;
var maxPR;
var maxPB;

teamR.style.height = h;
teamB.style.height = h;

function increaseR() {
	pointsR += Number(window.prompt("How many points did they earn?", "0"));
	barR.style.height = String(1.5*pointsR + "%");
	numberR.innerHTML = pointsR;
}
function increaseB() {
	pointsB += Number(window.prompt("How many points did they earn?", "0"));
	barB.style.height = String(1.5*pointsB + "%");
	numberB.innerHTML = pointsB;
}

function showdownStart() {
	showdown = window.confirm("Are you ready BRAAAAWWLL!!!??");
	if(showdown) {
		var mult = Number(window.prompt("How many seconds per point?", "1"));
		timeR = (pointsR * mult + buff)*scale;
		timeB = (pointsB * mult + buff)*scale;
		maxPR = timeR;
		maxPB = timeB;
		maxHR = barR.style.height;
		maxHB = barB.style.height;
		console.log(timeR);
		console.log(timeB);
		document.addEventListener();
		window.setInterval(timer, 10);

		barR.style.transition = "all 0s";
		barB.style.transition = "all 0s";
		
		document.addEventListener("keydown", function(e) {
			if (e.keyCode == 32) {isR = !isR;}else {return;};
			console.log(e.keyCode);
		});
		var e = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : "Q", char : "Q", shiftKey : true});
	}
}

function timer() {
	if (isR) {
		timeR--;
	}else {
		timeB--;
	}
	numberR.innerHTML = String(Math.round(timeR/10)/10);
	barR.style.height = String(((1.5*pointsR)*timeR/maxPR) + "%");
	numberB.innerHTML = String(Math.round(timeB/10)/10);
	barB.style.height = String(((1.5*pointsB)*timeB/maxPB) + "%");
}
