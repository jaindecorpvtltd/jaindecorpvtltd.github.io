// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Array of social media link IDs
    const socialLinks = ["facebook", "instagram", "youtube", "pinterest", "whatsapp"];
    const clickedLinks = new Set();

    const actionButton = document.getElementById("actionButton");

    socialLinks.forEach(id => {
        const linkElement = document.getElementById(id);
        linkElement.addEventListener("click", function () {
            clickedLinks.add(id);
            // Add the 'clicked' class to fade the link out
            linkElement.classList.add("clicked");
            // Enable the button if all links are clicked
            if (clickedLinks.size === socialLinks.length - 2) {
                actionButton.disabled = false;
            }
        });
    });
});