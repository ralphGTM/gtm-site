// Animate on load
window.addEventListener('load', () => {
  document.querySelector('.hero').classList.add('animate');
});

// Smooth scroll nav
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Button
document.querySelector('button').addEventListener('click', () => {
  alert('🚀 Welcome to GTM Forex! Contact for trading gateway.');
});
