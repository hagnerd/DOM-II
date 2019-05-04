// Your code goes here


/* Helper Functions */
const preventDefault = (element, eventName) => {
  element.addEventListener(eventName, (e) => {
    e.preventDefault();
  });
}

const createSpread = (n, spread) => ({
  floor: n - spread,
  ceil: n + spread,
});

const isInRange = (floor, ceil, n) => n >= floor && n <= ceil;

/* Selectors */
const navItems = document.querySelectorAll('nav a');
const welcomeHeader = document.querySelector('.intro h2');
const funBusImg = document.querySelector('img[src="img/fun-bus.jpg"]');
const letsGoHeader = document.querySelector('.text-content h2');
const introP = document.querySelector('.intro p');
const allDestinationPs = document.querySelectorAll('.destination p');

const islandGetawaP = allDestinationPs[allDestinationPs.length - 1];

/* Events / Event handlers */
// Nav item prevent default
navItems.forEach(item => preventDefault(item, 'click'));

// Event 1. load
window.addEventListener('load', () => {
  window.document.body.style.backgroundColor = 'lightgreen';

  setTimeout(() => {
    window.document.body.style.backgroundColor = 'white';  
  }, 1000)
});

// Event 2. mouseenter
welcomeHeader.addEventListener('mouseenter', (e) => {
  e.target.style.color = 'green'
});
// Event 3. mouseleave
welcomeHeader.addEventListener('mouseleave', (e) => {
  e.target.style.color = 'black';
})

let { floor, ceil } = createSpread(window.innerWidth / 2, 50);
// Event 4. mousemove
funBusImg.addEventListener('mousemove', (e) => {
  if (isInRange(floor, ceil, e.clientX)) {
    e.target.style.display = "none";
  }
});

// Event 5. dblclick
letsGoHeader.addEventListener('dblclick', (e) => {
  e.target.classList.toggle('dblclick-event')
})

// Event 6. wheel 
let scale = 1;
introP.addEventListener('wheel', (e) => {
  e.preventDefault();
  
  if (e.deltaY < 0) {
    scale *= e.deltaY * -1.1
  } else {
    scale /= e.deltaY * 1.1
  }

  scale = Math.min(Math.max(.25, scale), 1.5);
  e.target.style.transform = `scale(${scale})`
})

// Event 7. keydown
let allBodyText = document.querySelectorAll('.home h2, .home p, .home h4'); 
window.addEventListener('keydown', (e) => {
  let isBgDark = window.document.body.style.backgroundColor === 'black';

  if (e.key.toLowerCase() === 'd') {
    if (isBgDark) {
      window.document.body.style.backgroundColor = "";

      allBodyText.forEach(b => {
        b.style.color = 'black';
      })
    } else {
      window.document.body.style.backgroundColor = "black";
      allBodyText.forEach(b => {
        b.style.color = 'white';
      })
    }
  }
});

// Event 8. focus & blur
const firstName = document.querySelector('input[name="first-name"]');
const errorInfo = document.querySelector('.error-info');
const submitButton = document.querySelector('.contact-form button[type="submit"]');
firstName.addEventListener('focus', (e) => {
  e.target.style.backgroundColor = 'lightblue' 
})
firstName.addEventListener('blur', (e) => {
  if (e.target.value.length < 5) {
    e.target.style.backgroundColor = 'lightpink';
    errorInfo.textContent = 'First name must be longer than 5 characters';
    submitButton.disabled = true;
  } else {
    errorInfo.textContent = '';
    submitButton.disabled = false;
  }
})

// Event 9. Resize
window.addEventListener('resize', () => {
  if (window.innerWidth <=  600) {
    window.document.body.style.fontFamily = "Georgia";
  } else {
    window.document.body.style.fontFamily = "Roboto";
  }  
})

// Event 10. submit
const contactForm = document.querySelector('.contact-form');
const submittedArea = document.querySelector('.submitted-area');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let firstName = e.target['first-name'].value; 
  let message = e.target['message'].value;

  submittedArea.textContent = `${firstName} says: "${message}"`;
  e.target['first-name'].value = "";
  e.target['message'].value = "";
})

/* Nested events */
const mainNav = document.querySelector('.main-navigation');
const headingLogo = document.querySelector('.logo-heading');

mainNav.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'lightblue';
});

headingLogo.addEventListener('click', (e) => {
  e.stopPropagation();
  e.target.style.color = 'lightgreen';
})
