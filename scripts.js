//An array defined for three image sliders
const images = [
  "./img/slider-3.jpeg",
  "./img/slider-2.jpeg",
  "./img/slider-1.jpeg",
];

let currentIndex = 0;
// Function which shows image index from images array
function showImage(index) {
  currentIndex = index;
  document.getElementById('slider-image').src = images[currentIndex];
  updateIndicators();
}
 //Function which leads user to next slider image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
 //Function which leads user to previous slider image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

//Updates dot incicators
function updateIndicators() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Automatic sliding every 2 seconds
setInterval(nextImage, 2000);

// Initial image display
showImage(currentIndex);

const lists = document.querySelectorAll('.list');

lists.forEach((list) => {
  list.addEventListener('click', () => {
    list.classList.add('zoom-in');

    // Remove zoom-in class after 300ms to reset the animation
    setTimeout(() => {
      list.classList.remove('zoom-in');
    }, 300);
  });
});

