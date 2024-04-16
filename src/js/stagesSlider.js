const data = [
    '<div class="stages__number">1</div><p>Строительство железнодорожной магистрали Москва-Васюки</p>',
    '<div class="stages__number">2</div><p>Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</p>',
    '<div class="stages__number">3</div><p>Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет</p>',
    '<div class="stages__number">4</div><p>Строительство дворца для турнира</p>',
    '<div class="stages__number">5</div><p>Размещение гаражей для гостевого автотранспорта</p>',
    '<div class="stages__number">6</div><p>Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов</p>',
    '<div class="stages__number">7</div><p>Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн</p>',
];

// Генерация грид контейнера
const gridContainer = document.getElementById("gridContainer");
data.forEach((content) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("stages__item");
    gridItem.classList.add("stages__grid-item");
    gridItem.innerHTML = content;
    gridContainer.appendChild(gridItem);
});

// Генерация слайдера
const slider = document.getElementById("stagesSlider")
const prevBtn = document.getElementById("stages-slide-prev");
const nextBtn = document.getElementById("stages-slide-next");
const slidesData = [
    '<div class="slide__wrapper"><div class="stages__number">1</div><p class="">Строительство железнодорожной магистрали Москва-Васюки</p></div><div class="slide__wrapper"><div class="stages__number">2</div><p class="">Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</p></div>',
    '<div class="slide__wrapper"><div class="stages__number">3</div><p class="">Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет</p></div>',
    '<div class="slide__wrapper"><div class="stages__number">4</div><p class="">Строительство дворца для турнира</p></div><div class="slide__wrapper"><div class="stages__number">5</div><p class="">Размещение гаражей для гостевого автотранспорта</p></div>',
    '<div class="slide__wrapper"><div class="stages__number">6</div><p class="">Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов</p></div>',
    '<div class="slide__wrapper"><div class="stages__number">7</div><p class="">Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн</p></div>'
];

slidesData.forEach((content) => {
    const slide = document.createElement("div");
    slide.classList.add("stages__item")
    slide.classList.add("stages__slide");
    slide.innerHTML = content;
    slider.appendChild(slide);
});

// JavaScript для переключения между гридом и слайдером
document.addEventListener("DOMContentLoaded", function() {
    function toggleView() {
        if (window.innerWidth <= 768) {
            gridContainer.style.display = "none";
            slider.style.display = "block";
        } else {
            gridContainer.style.display = "grid";
            slider.style.display = "none";
        }
    }

    toggleView();

    window.addEventListener("resize", function() {
        toggleView();
    });

    // Переключение слайдов
    const slides = document.querySelectorAll(".stages__slide");
    const slidesBullits = document.querySelectorAll(".stages__bullets-item")
    let currentSlide = 0;

    function showSlide(index) {
        if (index === 0) {
            prevBtn.disabled = true;
            nextBtn.disabled = false;
        } else if (index === slides.length - 1) {
            nextBtn.disabled = true;
            prevBtn.disabled = false;
        } else {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }

        slides.forEach(function(slide) {
            slide.classList.remove("active");
        });
        slides[index].classList.add("active");
    }

     function activateBullits(index) {
         slidesBullits.forEach(function (bullit) {
             bullit.classList.remove("active")
         });
         slidesBullits[index].classList.add("active");
     }

    showSlide(currentSlide);
    /*activateBullits(currentSlide);*/

    nextBtn.addEventListener("click", function() {
        console.log(1)
        currentSlide = (currentSlide + 1) % slides.length;;
        showSlide(currentSlide);
        activateBullits(currentSlide)
    });

    prevBtn.addEventListener("click", function() {
        currentSlide = (currentSlide - 1) % slides.length;
        showSlide(currentSlide);
        activateBullits(currentSlide);
    })
});
