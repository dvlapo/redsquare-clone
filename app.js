const fadeLogo = () => {
  const disappearingLogo = document.querySelector('.disappear');

  setTimeout(() => {
    disappearingLogo.style.opacity = '1';
  }, 2500);

  setTimeout(() => {
    disappearingLogo.style.opacity = '0';
  }, 4000);

  setTimeout(() => {
    disappearingLogo.style.display = 'none';
  }, 6000);
};
fadeLogo();

const switchShapes = () => {
  const blueCircle = document.querySelector('.blue-circle');
  const yellowTriangle = document.querySelector('.yellow-triangle');
  const redSquare = document.querySelector('.red-square');

  setTimeout(() => {
    blueCircle.style.display = 'none';
    yellowTriangle.style.display = 'block';
  }, 2000);

  setTimeout(() => {
    yellowTriangle.style.display = 'none';
    redSquare.style.display = 'block';
  }, 2300);
};
switchShapes();

const heroText = document.querySelector('.hero-text');
const imageCarousel = document.querySelector('.image-carousel');

setTimeout(() => {
  heroText.style.transform = 'translateY(0)';
  imageCarousel.style.transform = 'translateY(0)';
}, 3000);

let listItems = [...document.querySelectorAll('.clients-list > ul li')];
let fadeUpItems = [
  ...document.querySelectorAll('.article h2, .article p, .contact'),
];

let lines = [...document.querySelectorAll('.gray-line')];

let options = {
  rootMargin: '0px',
  threshold: 0.35,
};

const scaleLine = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('grow');
    }
  });
};

const fadeIn = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fades-in');
    }
  });
};

const fadeUp = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fades-up');
    }
  });
};

const fadeInObserver = new IntersectionObserver(fadeIn, options);
const fadeUpObserver = new IntersectionObserver(fadeUp, options);
const linesObserver = new IntersectionObserver(scaleLine, {
  rootMargin: '0px',
  threshold: 0.9,
});

listItems.forEach((item) => {
  fadeInObserver.observe(item);
});
fadeUpItems.forEach((item) => {
  fadeUpObserver.observe(item);
});
lines.forEach((line) => {
  linesObserver.observe(line);
});

// vanilla tilt
VanillaTilt.init(document.querySelector('.tilt'), {
  max: 25,
  speed: 400,
});
