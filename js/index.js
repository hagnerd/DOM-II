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

// Event 8. beforeprint
window.addEventListener('beforeprint', () => {
  let res =  prompt("Enter reason for printing", "");

  console.log(res);
})

// Event 9. Resize
window.addEventListener('resize', (e) => {

})
