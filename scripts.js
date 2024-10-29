// An array defined for three image sliders
const images = [
  "./img/slider-3.jpeg",
  "./img/slider-2.jpeg",
  "./img/slider-1.jpeg",
];

let currentIndex = 0;

// Preloads images and initialize the slider once the page is loaded for user
function preloadImages(imageArray, callback) {
  let loadedImages = 0;
  const totalImages = imageArray.length;

  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        callback();
      }
    };
  });
}

// Function which shows image index from images array
function showImage(index) {
  currentIndex = index;
  document.getElementById('slider-image').src = images[currentIndex];
  updateIndicators();
}

// Function which leads user to next slider image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Function which leads user to previous slider image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Updates dot indicators
function updateIndicators() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Initial image display after reloading or preloading of the page
preloadImages(images, () => {
  showImage(currentIndex);
  // Automatic sliding every 2 seconds
  setInterval(nextImage, 2000);
});

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
