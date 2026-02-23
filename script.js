// Hero stagger
window.addEventListener('load', () => {
  document.querySelector('.hero h1').style.animation = 'fadeInUp 1s ease forwards';
  setTimeout(() => document.querySelector('.hero p').style.animation = 'fadeInUp 1s ease forwards', 500);
  setTimeout(() => document.querySelector('.hero button').style.animation = 'fadeInUp 1s ease forwards', 1000);
});

// Intersection Observer for reveals
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      if (entry.target.classList.contains('stats')) animateCounters();
      if (entry.target.querySelector('.widget-fade')) entry.target.querySelector('.widget-fade').classList.add('fadein');
      if (entry.target.querySelector('.map-animate')) entry.target.querySelector('.map-animate').classList.add('animate');
      if (entry.target.classList.contains('contact')) {
        setTimeout(() => entry.target.querySelectorAll('p').forEach((p, i) => {
          p.style.animationDelay = `${i * 200}ms`;
          p.classList.add('animate');
        }), 300);
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 30);
  });
}

// Smooth scroll + nav active
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Parallax hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelector('.hero').style.transform = `translateY(${scrolled * 0.5}px)`;
});

// TradingView init after reveal
// Button scroll to contact
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);
