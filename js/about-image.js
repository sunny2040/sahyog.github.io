// image.js

// List of images
var images = ['images/about1.jpeg', 'images/About1.jpg'];

// Index of the current image
var currentIndex = 0;

// Function to change the background image of the hero-wrap element
function changeImage() {
    document.getElementById('hero-image').style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
}

// Call the changeImage function every 1 second
setInterval(changeImage, 2000);
