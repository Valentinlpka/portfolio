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
        link: document.getElementById('homeLink'),
        location: 0,
    },
    {
        link: document.getElementById('homeLink'),
        location: 0,
    },
    {
        link: document.getElementById('homeLink'),
        location: 0,
    },
];

let activeLink = false;


const checkActiveLinks = () => {
    const scroll = window.scrollY + window.innerHeight / 2;

    console.log(scroll);
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].location < scroll) {
            activeLink = navLinks[i].link;
        }

    }

}

checkActiveLinks();
window.addEventListener('scroll', checkActiveLinks);