document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".participant__slider");
    const slides = document.querySelectorAll(".participant__slide");
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");
    const counter = document.querySelector("#counter");

    let currentIndex = 0;
    let numSlides = 6;
    let timer;

    const updateCounter = () => {
        if (window.innerWidth >= 1281) {
            counter.textContent = currentIndex + 3;
        } else if (window.innerWidth >= 768) {
            counter.textContent = currentIndex + 2;
        } else {
            counter.textContent = currentIndex + 1;
        }
    };

    const showSlides = () => {
        slides.forEach((slide, index) => {
            if (index >= currentIndex && index < currentIndex + getNumSlidesToShow()) {
                slide.style.display = "flex";
            } else {
                slide.style.display = "none";
            }
        });
    };

    const getNumSlidesToShow = () => {
        if (window.innerWidth >= 1281) {
            counter.textContent = currentIndex + 3;
            if (counter.textContent === '3') {
                prevBtn.disabled = true;
                nextBtn.disabled = false;
            } else {
                prevBtn.disabled = false;
                nextBtn.disabled = true;
            }
            return 3;
        } else if (window.innerWidth >= 768) {
            counter.textContent = currentIndex + 2;
            if (counter.textContent === '2') {
                prevBtn.disabled = true;
                nextBtn.disabled = false;
            } else if (counter.textContent === '6') {
                prevBtn.disabled = false;
                nextBtn.disabled = true;
            } else {
                prevBtn.disabled = false;
                nextBtn.disabled = false;
            }
            return 2;
        } else {
            counter.textContent = currentIndex + 1;
            if (counter.textContent === '1') {
                prevBtn.disabled = true;
                nextBtn.disabled = false;
            } else if (counter.textContent === '6') {
                prevBtn.disabled = false;
                nextBtn.disabled = true;
            } else {
                prevBtn.disabled = false;
                nextBtn.disabled = false;
            }
            return 1;
        }
    };

    const autoPlay = () => {
        timer = setInterval(() => {
            if (currentIndex < numSlides - getNumSlidesToShow()) {
                currentIndex += getNumSlidesToShow();
                showSlides();
                updateCounter();
            } else {
                currentIndex = 0;
                showSlides();
                updateCounter();
            }
        }, 4000);
    };

    window.addEventListener("resize", () => {
        showSlides();
        updateCounter();
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= getNumSlidesToShow();
            showSlides();
            updateCounter();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < numSlides - getNumSlidesToShow()) {
            currentIndex += getNumSlidesToShow();
            showSlides();
            updateCounter();
        } else {
            currentIndex = 0;
            showSlides();
            updateCounter();
        }
    });

    autoPlay();
    showSlides();
    updateCounter();
});
