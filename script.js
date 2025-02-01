import { Pane } from 'https://cdn.skypack.dev/tweakpane@4.0.4';
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';

const config = {
  theme: 'dark',
  animate: true,
  snap: true,
  start: gsap.utils.random(0, 100, 1),
  end: gsap.utils.random(900, 1000, 1),
  scroll: true,
  debug: false,
};

const ctrl = new Pane({
  title: 'Config',
  expanded: false,
});

let items;
let scrollerScrub;
let dimmerScrub;
let chromaEntry;
let chromaExit;

const update = () => {
  document.documentElement.dataset.theme = config.theme;
  document.documentElement.dataset.syncScrollbar = config.scroll;
  document.documentElement.dataset.animate = config.animate;
  document.documentElement.dataset.snap = config.snap;
  document.documentElement.dataset.debug = config.debug;
  document.documentElement.style.setProperty('--start', config.start);
  document.documentElement.style.setProperty('--hue', config.start);
  document.documentElement.style.set
  
 const particleContainer = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Randomize position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    
    // Append to the container
    particleContainer.appendChild(particle);
    
    // Remove particle after animation
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Create particles at intervals
setInterval(createParticle, 500); // Adjust the interval as needed