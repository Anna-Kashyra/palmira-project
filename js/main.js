const slides = document.querySelectorAll(".hero__slider");

if (slides) {
  let currentSlide = 0;

  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  function renderSlide(index) {
    slides.forEach(slide => {
      slide.style.display = "none";
    });

    slides[index].style.display = "block";
  }

  renderSlide(currentSlide);

  nextBtn?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
  });

  prevBtn?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide(currentSlide);
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
  }, 5000);
}