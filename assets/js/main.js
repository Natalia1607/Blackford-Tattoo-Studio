const slides = document.querySelectorAll('.header__thumbnail');
let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('thumbnail_active');
    }
    slides[n].classList.add('thumbnail_active');
};

const prepareCurrentSlide = int => {
    activeSlide(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

setInterval(nextSlide, 4000);

/* modal */
const openModal = document.querySelector('#button_open');
const closeModal = document.querySelector('#button_close');
const modalWindow = document.querySelector('.modal');

openModal.onclick = function(e) {
    modalWindow.style.display = "block";
};

closeModal.onclick = function() {
    modalWindow.style.display = "none";
};
