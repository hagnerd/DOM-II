// Your code goes here


/* Helper Functions */
const preventDefault = (element, eventName) => {
  element.addEventListener(eventName, (e) => {
    e.preventDefault();
  })
}

/* Selectors */
const navItems = document.querySelectorAll('nav a');

/* Events / Event handlers */
// Nav item prevent default
navItems.forEach(item => preventDefault(item, 'click'));

// Event 1. load
window.addEventListener('load', () => {
  alert("The page has loaded")
})
