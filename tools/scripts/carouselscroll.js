document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const buttons = document.querySelectorAll(".carousel-nav-button");

    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default focus action

            // Reset button style
            buttons.forEach(btn => {
                btn.style.opacity = "0.7";
            })
            this.style.opacity = "1";

            // Get the index from the button's data-target attribute
            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);
            
            // Calculate the scroll position based on the element's offset
            const scrollPosition = targetElement.offsetLeft;

            // Smoothly scroll to the target element
            carousel.scroll({
                left: scrollPosition,
                behavior: "smooth"
            });
        });
    });
});