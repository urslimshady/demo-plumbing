let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-container .slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // Loop back to the beginning if we reach the end
    currentSlideIndex = (index + totalSlides) % totalSlides;  // Circular navigation

    // Adjust the slider container position
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${100 * currentSlideIndex}%)`;

    // Update dot navigation
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function currentSlide(index) {
    showSlide(index);
}

// Automatic slide every 5 seconds
const slideInterval = setInterval(nextSlide, 5000);

// Pause the slideshow on mouse hover
document.querySelector('.service-slider').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume the slideshow when mouse leaves
document.querySelector('.service-slider').addEventListener('mouseleave', () => {
    setInterval(nextSlide, 5000);
});

// Initialize the slider on page load
document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlideIndex);  // Show the first slide initially
});
