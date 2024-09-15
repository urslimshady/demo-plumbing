let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-container .slide');
    const dots = document.querySelectorAll('.dot');
    
    // Loop back to the beginning if we reach the end
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    // Hide all slides and remove 'active' class from dots
    slides.forEach(slide => slide.style.transform = `translateX(-${100 * currentSlideIndex}%)`);
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show the current slide and set the corresponding dot to active
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// Automatic slide every 5 seconds
setInterval(nextSlide, 5000);
