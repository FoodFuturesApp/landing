// Food Futures interactions: Framer's springs, scroll triggers and the "How it Works" cards.

// Framer animates with spring physics. This samples a spring (same stiffness, damping
// and mass as the Framer settings) into a CSS linear() curve, so plain CSS transitions
// follow the same motion. Returns "<duration> linear(...)" for a transition shorthand.
function spring(stiffness, damping, mass = 1) {
  const points = [0];
  let x = 0;
  let v = 0;
  for (let ms = 1; ms < 4000; ms++) {
    v += (stiffness * (1 - x) - damping * v) / mass / 1000;
    x += v / 1000;
    if (ms % 16) continue;
    if (Math.abs(1 - x) < 1e-3 && Math.abs(v) < 1e-2) return `${ms}ms linear(${points.join()}, 1)`;
    points.push(+x.toFixed(3));
  }
  return '1s ease-out';
}

const tokens = document.documentElement.style;
tokens.setProperty('--spring-card', spring(260, 40));   // intro cards
tokens.setProperty('--spring-press', spring(400, 30));  // primary button lift
tokens.setProperty('--spring-link', spring(400, 40));   // nav link color
tokens.setProperty('--spring-nudge', spring(506, 36));  // arrows: Framer "bounce 0.2, 0.4s"
tokens.setProperty('--spring-exit', spring(500, 25));   // reveal exit: Motion's default spring

// Text reveals mirror Framer's useInView(amount 0.3, once false): they replay on every pass.
const reveals = new IntersectionObserver((entries) => {
  for (const entry of entries) entry.target.classList.toggle('is-in', entry.isIntersecting);
}, { threshold: 0.3 });
document.querySelectorAll('[data-reveal]').forEach((el) => reveals.observe(el));

// Intro cards mirror Framer's appear effect: once, as soon as any pixel is on screen.
const appears = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('is-in');
    appears.unobserve(entry.target);
  }
});
document.querySelectorAll('[data-appear]').forEach((el) => appears.observe(el));

// "How it Works": one card is open at a time and hands off when its 5s progress line
// fills (the CSS animation), looping forever. Clicking a card opens it and restarts
// its timer. Below 768px the original shows every card open, so the timer stops.
const steps = [...document.querySelectorAll('.step')];
const listView = matchMedia('(max-width: 767.98px)');
let active = 0;

function open(index) {
  active = index;
  steps.forEach((step, i) => {
    const shown = i === index || listView.matches;
    step.classList.toggle('is-active', i === index);
    step.querySelector('.step__head').setAttribute('aria-expanded', shown);
    step.querySelector('.step__body').inert = !shown;
  });
}

steps.forEach((step, i) => step.addEventListener('click', () => {
  const fill = step.querySelector('.step__fill');
  fill.style.animation = 'none';
  fill.offsetWidth; // restart the progress animation when the open card is clicked again
  fill.style.animation = '';
  open(i);
}));

document.querySelector('.steps__list').addEventListener('animationend', (event) => {
  if (event.animationName === 'step-progress') open((active + 1) % steps.length);
});

listView.addEventListener('change', () => open(active));
open(0);
