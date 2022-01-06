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
  const work = document.querySelector('.work');

  setTimeout(() => {
    blueCircle.style.display = 'none';
    yellowTriangle.style.display = 'block';
  }, 2000);

  setTimeout(() => {
    yellowTriangle.style.display = 'none';
    redSquare.style.display = 'block';
  }, 2300);
  setTimeout(() => {
    work.style.visibility = 'visible';
  }, 4300);
};
switchShapes();

const imageCarousel = document.querySelector('.image-carousel');
const nav = document.querySelector('nav');

const heroText = [...document.querySelectorAll('.hero-text span')];
heroText.forEach((text) => {
  setInterval(() => {
    text.style.opacity = '1';
  }, 1000);
});

setTimeout(() => {
  nav.style.marginBottom = '20rem';
}, 3000);

let listItems = [...document.querySelectorAll('.clients-list ul li')];
let mobileListItems = [...document.querySelectorAll('.mobile-list li')];
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
mobileListItems.forEach((item) => {
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
  logo.style.filter = 'blur(5px)';
  heroText.style.filter = 'blur(5px)';
  imageCarousel.style.filter = 'blur(5px)';
});

tilt.addEventListener('mouseover', () => {
  grayLine.style.filter = 'blur(1px)';
  socials.style.filter = 'blur(5px)';
  clientsList.style.filter = 'blur(5px)';
  allProjects.style.filter = 'blur(5px)';
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

// slideshow
let images = [...document.querySelectorAll('.image-carousel img')];
let index = 1;

const showOneImage = (n) => {
  if (n > images.length) {
    index = 1;
  }
  if (n < 1) {
    index = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index - 1].style.display = 'block';
};

const incrementIndex = (n) => {
  showOneImage((index += n));
};

setInterval(() => {
  incrementIndex(1);
}, 200);
