     var statusElement = document.getElementById("status");
        var enterButton = document.getElementById("enterBtn");

        // Add a click event listener to the button
        enterButton.addEventListener("click", function() {
            // Change the text of the p tag
            statusElement.textContent = "Entered Metaverse";
        });    // Get references to the HTML elements
        var statusElement = document.getElementById("status");
        var enterButton = document.getElementById("enterBtn");

        // Add a click event listener to the button
        enterButton.addEventListener("click", function() {
            // Create a new h1 element
            var newHeader = document.createElement("h1");
            newHeader.textContent = "Entered Metaverse";

            // Replace the p tag with the new h1 element
            statusElement.parentNode.replaceChild(newHeader, statusElement);
        });