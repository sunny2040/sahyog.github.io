// Get the terms link and the terms popup div
var termsLink = document.getElementById('termsLink');
var termsPopup = document.getElementById('termsPopup');

// Add click event listener to the terms link
termsLink.addEventListener('click', function(event) {
    // Prevent the default action of the link
    event.preventDefault();

    // Show the terms popup
    termsPopup.style.display = 'block';
});
