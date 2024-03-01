const headerBtn = document.querySelector('.navBar');
const mobileNav = document.querySelector('.mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

// State
let isMobileNavOpen = false;

headerBtn.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen;
  if (isMobileNavOpen) {
    mobileNav.style.display = 'flex';
  } else {
    mobileNav.style.display = 'none';
  }
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    isMobileNavOpen = false;
    mobileNav.style.display = 'none';
    document.body.style.overflowY = 'auto';
  });
});


/* js for buttons */

const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });

    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});



/* js for navigation */

const navButtons = document.querySelectorAll('.nav-menu__link');

navButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.transform = 'scale(1.2)';
    });

    button.addEventListener('mouseout', function() {
        button.style.transform = 'scale(1)';
    });
});


const btn1 = document.querySelectorAll('.btn1');


btn1.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });

    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});


const submitButton = document.getElementById('submit');

submitButton.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)';
});

submitButton.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
