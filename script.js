        var statusElement = document.getElementById("status");
        var enterButton = document.getElementById("enterBtn");


 function clicked() {
            // Create a new h1 element
            var newHeader = document.createElement("h1");
            newHeader.textContent = "Entered Metaverse";

            // Replace the p tag with the new h1 element
            statusElement.parentNode.replaceChild(newHeader, statusElement);
        }