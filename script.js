let plumbingIndex = 0;
let wiringIndex = 0;

function showSlides(sliderId, index) {
    let slides = document.querySelectorAll(`#${sliderId} .slide`);
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

function slidePlumbing() {
    let plumbingSlides = document.querySelectorAll("#plumbing-slider .slide");
    plumbingIndex = (plumbingIndex + 1) % plumbingSlides.length;
    showSlides('plumbing-slider', plumbingIndex);
}

function slideWiring() {
    let wiringSlides = document.querySelectorAll("#wiring-slider .slide");
    wiringIndex = (wiringIndex + 
