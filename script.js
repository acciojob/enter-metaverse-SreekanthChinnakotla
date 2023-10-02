let ptag = document.getElementById("status");
let ptext = ptag.innerText;
let butn = document.getElementById("enterBtn");

function clicked(){
	 let h1element= document.createElement("h1");
	 h1element.innerText = "Entered Metaverse";
	 ptag.parentNode.replaceChild(h1element, ptag);
 };