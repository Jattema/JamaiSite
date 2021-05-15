let DarkModeon = true;
const localTheme = localStorage.getItem("dark");
const chk = document.getElementById('chk');
const navbar = document.querySelector("nav");
function switcher () {
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

WLCalcButton = document.querySelector(".WorLButton");

function calc()
{
	const Games = parseFloat(document.getElementById('games').value);
	const Wins = parseFloat(document.getElementById('wins').value);
	
	const  oper = document.getElementById('operators').value;
	
	if(oper === 'WinRatio')
	{
		document.getElementById('result').value = Wins / Games * 100 + "%";
	}
	
	if(oper === 'LossRatio')
	{
		document.getElementById('result').value = (100 -  Wins / Games * 100) + "%";
	}
	
}

WLCalcButton.addEventListener("click", calc);
