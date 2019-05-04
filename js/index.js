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
navItems.forEach(item => preventDefault(item, 'click'));
