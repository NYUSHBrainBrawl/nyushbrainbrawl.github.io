var w = window.innerWidth;
var h = window.innerHeight;
var teamR = document.querySelector('#teamR');
var teamB = document.querySelector('#teamB');
var barR = document.querySelector('#barR');
var barB = document.querySelector('#barB');
var pointsR = 0;
var PointsB = 0;

var p = 0;

teamR.style.height = h;
teamB.style.height = h;

function increase() {
	p++;
	barR.style.height = String(p + "%");
	barB.style.height = String(p + "%");
}