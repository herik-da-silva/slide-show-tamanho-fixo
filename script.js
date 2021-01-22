let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider-largura').style.width = `${sliderWidth * totalSlides}px`;
document.querySelector('.botoes').style.width = `${sliderWidth}px`;
document.querySelector('.botoes').style.height = `${document.querySelector('.slider').clientHeight}px`;

function voltar() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
};

function proximo() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
};

function updateMargin() {
    let sliderWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderWidth);
    document.querySelector('.slider-largura').style.marginLeft = `-${newMargin}px`;
}

setInterval(proximo, 5000);