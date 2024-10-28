
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

testimonialItems.forEach((item, index) => {
  item.style.display = 'none';
});

testimonialItems[currentIndex].style.display = 'block';

prevBtn.addEventListener('click', () => {
  testimonialItems[currentIndex].style.display = 'none';
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = testimonialItems.length - 1;
  }
  testimonialItems[currentIndex].style.display = 'block';
});

nextBtn.addEventListener('click', () => {
  testimonialItems[currentIndex].style.display = 'none';
  currentIndex++;
  if (currentIndex >= testimonialItems.length) {
    currentIndex = 0;
  }
  testimonialItems[currentIndex].style.display = 'block'; // <--- Add closing parenthesis here
});
//infographics
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const value1Element = document.getElementById("value1");
  const value2Element = document.getElementById("value2");
  const value3Element = document.getElementById("value3");

  let value1 = 0;
  let value2 = 0;
  let value3 = 0;

  // Update function for rotating and updating values
  function updateValues() {
      value1 = (value1 + 1) % 101;  // Loop from 0 to 100
      value2 = (value2 + 2) % 101;  // Loop from 0 to 100
      value3 = (value3 + 3) % 101;  // Loop from 0 to 100

      value1Element.textContent = value1 + "%";
      value2Element.textContent = value2 + "%";
      value3Element.textContent = value3 + "%";

      requestAnimationFrame(updateValues);
  }

  updateValues();
});





