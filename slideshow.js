let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slider .slide');
const dotsContainer = document.querySelector('.hero-slider .dots');
const prevBtn = document.querySelector('.hero-slider .prev');
const nextBtn = document.querySelector('.hero-slider .next');

// Tạo chấm tròn theo số lượng slide
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('button');

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  slideIndex = index;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto slide
let autoPlay = setInterval(nextSlide, 5000);

// Nút điều hướng
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoPlay();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoPlay();
});

function resetAutoPlay() {
  clearInterval(autoPlay);
  autoPlay = setInterval(nextSlide, 5000);
}

// Khởi tạo
showSlide(slideIndex);
