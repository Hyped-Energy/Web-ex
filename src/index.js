const SettingBTN = document.getElementById("icon");
const navtxt = document.getElementById("navtext");


function toggleButton() {
	navtext.classList.toggle("show")
	console.log("Hit");
}

SettingBTN.addEventListener("click", toggleButton);

