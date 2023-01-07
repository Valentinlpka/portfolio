const light = document.getElementById('light');

light.addEventListener('click',() => {
    if (light.getAttribute('name') == 'sunny-outline') {
        light.setAttribute('name', 'moon-outline');
        document.body.classList.add('light');
    } else {
        light.setAttribute('name', 'sunny-outline');
        document.body.classList.remove('light');
        
    }
});

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
});



const navLinks = [
    {
        link: document.getElementById('homeLink'),
        location: 0,
    },
    {
        link: document.getElementById('aboutLink'),
        location: document.getElementById('aboutSection').getBoundingClientRect().top,
    },
    {
        link: document.getElementById('skillLink'),
        location: document.getElementById('skill').getBoundingClientRect().top,
    },
    {
        link: document.getElementById('projetsLink'),
        location: document.getElementById('projets').getBoundingClientRect().top,
    },
    {
        link: document.getElementById('contactLink'),
        location: document.getElementById('contact').getBoundingClientRect().top,
    },
];

let activeLink = false;


const checkActiveLinks = () => {
    const scroll = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].location < scroll) {
            activeLink = navLinks[i].link;
            activeLink.classList.add('active');
        } else {
            activeLink.classList.remove('active');
        }
        } 

}

checkActiveLinks();

window.addEventListener('scroll', checkActiveLinks);


var app = document.getElementById('textBonjour');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(900)
  .typeString("LIPKA VALENTIN")
  .start();
