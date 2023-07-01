const slider = document.querySelectorAll(".slide");

let count = 0;

slider.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});
const goNext = () => {
  if (count < slider.length - 1) {
    count++;
    slideImage();
  } else {
    count = 0;
    slideImage();
  }
};
const goPrev = () => {
  if (count !== 0) {
    count--;
    slideImage();
  }
};

const slideImage = () => {
  slider.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};
