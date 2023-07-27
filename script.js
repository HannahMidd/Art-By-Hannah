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

// Function to hide social icons when the dropdown is open
$(document).ready(function () {
    // Function to toggle social icons based on screen size and dropdown status
    function toggleSocialIcons() {
        if ($(window).width() <= 991.98) {
            // If the screen size is smaller, show social icons in the dropdown
            $('.hide-on-mobile').show();
            $('.hide-on-desktop').hide();
        } else {
            // If the screen size is larger, show social icons in the navbar
            $('.hide-on-mobile').hide();
            $('.hide-on-desktop').show();
        }
    }

    // Initially toggle the social icons based on the screen size
    toggleSocialIcons();

    // When the window is resized, toggle the social icons again
    $(window).on('resize', function () {
        toggleSocialIcons();
    });

    // When the navbar toggler is clicked, toggle the social icons
    $('.navbar-toggler').on('click', function () {
        toggleSocialIcons();
    });
});
