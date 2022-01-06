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

// blur on hover
const logo = document.querySelector('.logo');
const work = document.querySelector('.work a');
const tilt = document.querySelector('.tilt');
const grayLine = document.querySelector('.line-two');
const socials = document.querySelector('.socials');
const clientsList = document.querySelector('.clients-list');
const allProjects = document.querySelector('.all-projects');

work.addEventListener('mouseover', () => {
  logo.style.filter = 'blur(6px)';
  heroText.style.filter = 'blur(6px)';
  imageCarousel.style.filter = 'blur(6px)';
});

tilt.addEventListener('mouseover', () => {
  grayLine.style.filter = 'blur(1px)';
  socials.style.filter = 'blur(6px)';
  clientsList.style.filter = 'blur(6px)';
  allProjects.style.filter = 'blur(6px)';
});

work.addEventListener('mouseleave', () => {
  logo.style.filter = 'none';
  heroText.style.filter = 'none';
  imageCarousel.style.filter = 'none';
});

tilt.addEventListener('mouseleave', () => {
  grayLine.style.filter = 'none';
  socials.style.filter = 'none';
  clientsList.style.filter = 'none';
  allProjects.style.filter = 'none';
});
