const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
    if (index < 0) {
        index = slideCount - 1;
    }
    if (index >= slideCount) {
        index = 0;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });


    indicators.forEach(dot => dot.classList.remove("active"));
    if (indicators[index]) {
        indicators[index].classList.add("active");
    }

    currentIndex = index;
}

prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    resetAutoPlay();
});

nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    resetAutoPlay();
});

indicators.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = +dot.dataset.slide;
        showSlide(index);
        resetAutoPlay();
    });
});

function startAutoPlay() {
    intervalId = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 4000);
}

function resetAutoPlay() {
    clearInterval(intervalId);
    startAutoPlay();
}

// Initialize
showSlide(0);
startAutoPlay();
