let ptag = document.getElementById("status");
let butn = document.getElementById("enterBtn");
function clicked(){
	 let h1element= document.createElement("h1");
	 h1element.innerText = "Entered Metaverse";
	h1element.id=ptag.id;
	
	 ptag.parentNode.replaceChild(h1element, ptag);
 };