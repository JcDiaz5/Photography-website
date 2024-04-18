let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide() {
    slides.forEach(slide => slide.style.position = 'absolute'),
    slides.forEach(slide => slide.style.opacity = '0');
    slides[slideIndex].style.display = 'block', 
    slides[slideIndex].style.opacity = '1';
}

// Function to change slide on click
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

// Function to automate the slideshow
function startSlideshow() {
    setInterval(() => {
        changeSlide(1); // Move to the next slide every 3.5 seconds
    }, 4000);
}

showSlide(); // Show the initial slide
startSlideshow(); // Start the slideshow
