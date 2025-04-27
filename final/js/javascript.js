// BLINKING CODE
const blinkElement = document.getElementById('blink');

function startBlinking() {
  blinkElement.style.pointerEvents = 'none';

  setInterval(() => {
    blinkElement.style.visibility =
      blinkElement.style.visibility === 'visible' ? 'hidden' : 'visible';
  }, 40);
}

startBlinking();

// START LOADING SCREEN
document.addEventListener('DOMContentLoaded', function () {
  const loadingScreen = document.getElementById('one');
  const mainContent = document.getElementById('main-content');

  loadingScreen.addEventListener('click', function () {
    loadingScreen.classList.add('fade-out');

    loadingScreen.addEventListener('transitionend', function () {
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }, { once: true });
  });
});


// TEXT ANIMATION CODE FROM CODEPEN
var textWrappers = document.querySelectorAll('.ml3');
textWrappers.forEach(function(textWrapper) {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// Apply the animation to each .ml3 element
anime.timeline({ loop: false })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i + 1),
    offset: 2000  
  })
  // .add({
  //   targets: '.ml3',
  //   opacity: [0, 1],
  //   duration: 1000,
  //   easing: "easeInOutQuad",
  //   delay: 1000, 
  // });


  // SCROLL ANIMATION
const faders = document.querySelectorAll('.content > *');

const appearOptions = {
  threshold: 0.1, 
  rootMargin: "0px 0px -50px 0px" 
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, appearOptions);

faders.forEach(fader => {
  fader.classList.add('fade-up');
  appearOnScroll.observe(fader);
});

// IMAGE BLUR
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  const image = container.querySelector('.image');
  const caption = container.querySelector('.caption');

  image.style.filter = 'blur(3px)';
  caption.style.opacity = '0'; 

  container.addEventListener('mouseenter', () => {
    image.style.filter = 'blur(0)'; 
    caption.style.opacity = '1'; 
  });

  container.addEventListener('mouseleave', () => {
    image.style.filter = 'blur(3px)'; 
    caption.style.opacity = '0'; 
  });
});

// IMAGE FLOAT
const allImages = document.querySelectorAll('img');

allImages.forEach((image, index) => {
  anime({
    targets: image,
    translateY: [
      { value: -20, duration: 900, easing: 'easeInQuad' },
      { value: 0, duration: 700, easing: 'easeOutQuad' }
    ],
    rotate: {
      value: ['-1deg', '1deg'],  
      duration: 1000,
      easing: 'easeInOutSine', 
      loop: true 
    },
    loop: true,
    delay: index * 100 
  });
});
