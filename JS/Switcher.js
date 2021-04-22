let DarkModeon = true;
const localTheme = localStorage.getItem("dark");
const chk = document.getElementById('chk');
const navbar = document.querySelector("nav");
const switcher = function () {
	const elements = document.querySelectorAll("body, a")
	for (i = 0; i < elements.length; i++) {
		elements[i].classList.toggle("dark")
	}
};

DarkModeon = !DarkModeon;
localStorage.setItem("dark", DarkModeon);
if (localTheme == "true") {
	switcher();
}
chk.addEventListener("click", switcher);

const multiplyInputs = document.querySelectorAll(".multiply-input").value;
const multiplyOutputs = document.querySelector(".multiply-output");
const calculateButton = document.querySelector(".calculate");

const MultCalc = function () {
	Total = 0;
	for (let f = 0; f < multiplyInputs.length; f++) {
		Total = Total * multiplyInputs[f];
	}
	multiplyOutputs.textContent = Total;
};
calculateButton.addEventListener("click", MultCalc);


WLCalcButton = document.querySelector(".WorLButton");

function calc()
{
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);
	
	var oper = document.getElementById('operators').value;
	
	if(oper === 'WinRatio')
	{
		document.getElementById('result').value = n2 / n1 * 100 + "%";
	}
	
	if(oper === 'LossRatio')
	{
		document.getElementById('result').value = (n1 - n2) / n1 * 100 + "%";
	}
	
}

WLCalcButton.addEventListener("click", calc);
