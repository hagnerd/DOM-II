// Your code goes here


/* Helper Functions */
const preventDefault = (element, eventName) => {
  element.addEventListener(eventName, (e) => {
    e.preventDefault();
  });
}

/* Selectors */
const navItems = document.querySelectorAll('nav a');
const welcomeHeader = document.querySelector('.intro h2');

/* Events / Event handlers */
// Nav item prevent default
navItems.forEach(item => preventDefault(item, 'click'));

// Event 1. load
window.addEventListener('load', () => {
  alert("The page has loaded")
});

// Event 2. mouseenter
welcomeHeader.addEventListener('mouseenter', (e) => {
  e.target.style.color = 'green'
});
// Event 3. mouseleave
welcomeHeader.addEventListener('mouseleave', (e) => {
  e.target.style.color = 'black';
})

// Event 4. mousemove
window.addEventListener('mousemove', (e) => {

  console.log(`The mouse is at X: ${e.clientX}, Y: ${e.clientY}`);
});
