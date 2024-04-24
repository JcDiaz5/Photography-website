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
        changeSlide(1);
    }, 4000);
}

showSlide();
startSlideshow();


// Function to toggle the visibility of the description div for each item
function toggleDescription(event, album) {
    event.preventDefault();
    // Get the description div
    var description = document.getElementById("description");
    // Hide any previously shown descriptions
    var previousDescription = document.querySelector('.description[style="display: block;"]');
    if (previousDescription) {
        previousDescription.style.display = "none";
    }
    // Show the description for the clicked album
    var albumDescription = document.getElementById("description_" + album);
    if (albumDescription) {
        description.innerHTML = albumDescription.innerHTML;
        description.style.display = "block";
    }
}

/* Smooth transition to top of page */
function scrollToDescription(sectionId) {
    const section = document.getElementById(sectionId);
    const sectionPosition = section.offsetTop;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth' // Smooth scrolling behavior
    });
}


// Function to fetch and display images for a specific folder
const firstPhotoSection = document.querySelector('section');

function fetchAndDisplayImages(folderName, containerId) {
    const photoContainer = document.getElementById(containerId);

    fetch(`https://www.googleapis.com/storage/v1/b/photography-portfolio-jc/o?prefix=Photography_portfolio/${folderName}`)
    .then(response => response.json())
    .then(data => {
        if (data.items) {
            // Process data and extract photo URLs
            const photoUrls = data.items.map(item => item.mediaLink);

            // Insert photos into HTML
            photoUrls.forEach(photoUrl => {
                const img = document.createElement('img');
                img.src = photoUrl;
                photoContainer.appendChild(img);
            });
        } else {
            console.warn(`No items found in the response for ${folderName}`);
        }
    })
    .catch(error => {
        console.error(`Error fetching photos for ${folderName}:`, error);
    });
}
// Fetch and display images for each section
fetchAndDisplayImages('Family/', 'photo-container-Family');
fetchAndDisplayImages('Wedding/', 'photo-container-Wedding');
fetchAndDisplayImages('Pregnancy/', 'photo-container-Pregnancy');
fetchAndDisplayImages('Partner/', 'photo-container-Partner');
fetchAndDisplayImages('People/', 'photo-container-People');

// Loop through each section and add event listeners
sections.forEach(section => {
    section.style.opacity = 0.7; // Set default opacity to 0.8
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);
});

// Function to smoothly scroll to the selected category
function scrollToCategory(categoryId) {
    const categoryElement = document.getElementById(categoryId);
    categoryElement.scrollIntoView({ behavior: 'smooth' });
}