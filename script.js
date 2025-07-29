// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Array of social media link IDs
    const socialLinks = ["facebook", "instagram", "youtube", "pinterest", "whatsapp"];
    const clickedLinks = new Set();

    const actionButton = document.getElementById("actionButton");
    const modal = document.getElementById("couponModal");
    const closeModal = document.getElementById("closeModal");

    socialLinks.forEach(id => {
        const linkElement = document.getElementById(id);
        linkElement.addEventListener("click", function () {
            clickedLinks.add(id);
            // Add the 'clicked' class to fade the link out
            linkElement.classList.add("clicked");
            // Enable the button if all links are clicked
            if (clickedLinks.size === socialLinks.length) {
                actionButton.disabled = false;
            }
        });
    });

    actionButton.addEventListener("click", function () {
        if (!actionButton.disabled) {
            modal.style.display = "flex";
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Optional: Close modal when clicking outside modal-content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Collapsible coupon details with arrow rotation
    document.querySelectorAll('.coupon-header').forEach(function(header) {
        header.addEventListener('click', function(e) {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });
});