let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide() {
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

showSlide();
