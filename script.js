     var convertButton = document.getElementById("enterBtn");
        convertButton.addEventListener("click", function() {
            // Get the existing p tag
            var pElement = document.getElementById("status");

            // Create a new h1 element
            var h1Element = document.createElement("h1");

            // Copy the content and attributes from the p tag to the new h1 tag
            h1Element.textContent ="Entered Metaverse";
            h1Element.id = pElement.id;
            h1Element.className = pElement.className;

            // Replace the p tag with the new h1 tag
            pElement.parentNode.replaceChild(h1Element, pElement);
        });