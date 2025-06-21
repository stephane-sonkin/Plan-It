// Slider functionality
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-nav.prev');
const nextButton = document.querySelector('.slider-nav.next');

let currentSlide = 0;
const slideWidth = slides[0].offsetWidth;

// Function to move to the next slide
function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
}

// Function to move to the previous slide
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
}

// Add click event listeners to navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Add touch swipe functionality
let touchStartX = 0;
let touchEndX = 0;

sliderTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

sliderTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeLength = touchStartX - touchEndX;
    
    if (Math.abs(swipeLength) > swipeThreshold) {
        if (swipeLength > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}
