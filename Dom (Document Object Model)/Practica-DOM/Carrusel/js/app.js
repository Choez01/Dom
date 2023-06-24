const d = document;

d.addEventListener("DOMContentLoaded", function() {
  const carouselItems = d.querySelectorAll(".carousel-item");
   let totalItems = carouselItems.length,
    currentIndex = 0,
    prevButton = ".carousel-control-prev",
    nextButton = ".carousel-control-next";

  function showSlide(index) {
    if (index < 0) {
      index = totalItems - 1;
    } else if (index >= totalItems) {
      index = 0;
    }

    carouselItems.forEach(function(item) {
      item.classList.remove("active");
    });

    carouselItems[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
  }

  d.addEventListener("click",(e)=>{
    if(e.target.matches(`${prevButton} *`) || (e.target.matches(prevButton))){
      e.preventDefault();
      prevSlide();
    }

    if(e.target.matches(`${nextButton} *`) || (e.target.matches(nextButton))){
      e.preventDefault();
      nextSlide();
    }
  });

  showSlide(currentIndex);
});