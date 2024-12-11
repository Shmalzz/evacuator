// JavaScript for handling the slider functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

const showSlide = (index) => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
};

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);
