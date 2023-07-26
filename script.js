// Function to add an event listener when the DOM is ready to "arrow btn"
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll function
    function smoothScroll(target) {
        var targetElement = document.querySelector(target);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    // Event listener for the arrow button
    document
        .getElementById('arrow-btn')
        .addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the button
            var target = this.getAttribute('href'); // Get the target from the href attribute
            smoothScroll(target);
        });
});
