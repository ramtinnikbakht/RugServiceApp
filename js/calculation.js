var calculationButton = document.querySelector("#calculateButton");
var costSqFtTF = document.getElementById("input-31");
var widthTF = document.getElementById("input-32");
var lengthTF = document.getElementById("input-33");
var result = 0;

var resultLabel = document.getElementById("result");

calculationButton.addEventListener("click", function(){
	var costSqFt = Number(costSqFtTF.value);
	var width = Number(widthTF.value);
	var length = Number(lengthTF.value);
	result = costSqFt * (width * length);
	resultLabel.textContent = "$" + String(result);
});