     var statusElement = document.getElementById("status");
        var enterButton = document.getElementById("enterBtn");

        // Add a click event listener to the button
        enterButton.addEventListener("click", function() {
            // Change the text of the p tag
            statusElement.textContent = "Entered Metaverse";
        });