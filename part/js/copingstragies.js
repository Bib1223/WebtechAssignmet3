// JavaScript to toggle the 'Read more' functionality
document.addEventListener("DOMContentLoaded", function () {
    // Select all the 'read-more' links
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    // Add event listeners to each 'read-more' link
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const postText = this.previousElementSibling;
            
            // Toggle 'show-more' class to display/hide full text
            postText.classList.toggle('show-more');
            
            // Change the link text based on current visibility
            if (postText.classList.contains('show-more')) {
                this.textContent = 'Read less...';
            } else {
                this.textContent = 'Read more...';
            }
        });
    });
});
