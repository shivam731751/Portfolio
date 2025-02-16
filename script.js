// Hamburger menu functionality
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });
// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle dropdown on mobile
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});


let index = 0; // Start from the first image
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0; // Reset to first slide after reaching the end
    }
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);



// Smooth scroll for anchor links within the same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
