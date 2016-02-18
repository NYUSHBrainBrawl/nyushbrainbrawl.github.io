var min_height = "120px";

//document.querySelector('#rules').style.maxHeight = min_height;
document.querySelector('#signup').style.maxHeight = min_height;
document.querySelector('#stories').style.maxHeight = "720px";

function expand (obj) {
	console.log(obj.style.maxHeight +" "+ obj.className);
	if (obj.style.maxHeight == min_height) {
		obj.style.maxHeight = "1600px";
		obj.className = "panel open";
	}else {
		obj.style.maxHeight = min_height;
		obj.className = "panel";
	};
	console.log(obj.style.maxHeight +" "+ obj.className);
}
