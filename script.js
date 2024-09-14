let plumbingIndex = 0;
let wiringIndex = 0;

function showSlides(sliderId, index) {
    let slides = document.querySelectorAll(`#${sliderId} .slide`);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slides[index].style.display = "block";  // Show the current slide
}

function slidePlumbing() {
    let plumbingSlides = document.querySelectorAll("#plumbing-slider .slide");
    plumbingIndex = (plumbingIndex + 1) % plumbingSlides.length;
    showSlides('plumbing-slider', plumbingIndex);
}

function slideWiring() {
    let wiringSlides = document.querySelectorAll("#wiring-slider .slide");
    wiringIndex = (wiringIndex + 1) % wiringSlides.length;
    showSlides('wiring-slider', wiringIndex);
}

// Initializing the slides
showSlides('plumbing-slider', plumbingIndex);
showSlides('wiring-slider', wiringIndex);

// Auto slide every 3 seconds
setInterval(slidePlumbing, 3000);
setInterval(slideWiring, 3000);
