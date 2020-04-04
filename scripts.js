const navItems = document.getElementsByClassName('nav--item');
const navBtns = document.querySelectorAll(`[class^="nav--btn"]`);
const contact = document.getElementsByClassName('footer--contact')[0];
const section = document.getElementsByClassName('section')[0];
const btn = document.getElementsByClassName('btn')[0];

let currentSection;

onload = () => {
    for (let item of navBtns) {
        item.addEventListener('click', () => {
            let lastSection;
            if (currentSection != item) {
                lastSection = currentSection;
                currentSection = item;
                currentSection.classList.toggle('current-section');
                section.classList.toggle(`is-${currentSection.classList[0].slice(9)}`);
                if (lastSection) {
                    section.classList.toggle(`is-${lastSection.classList[0].slice(9)}`);
                    lastSection.classList.toggle('current-section');
                }
                    
            }
        })
    };
    currentSection = navBtns[0];
    currentSection.classList.toggle('current-section');
    section.classList.toggle(`is-${currentSection.classList[0].slice(9)}`);
}

const revealNav = () => {
    for (let item of navItems) {
        item.classList.toggle('hidden')
    };
}

const emailRainbow = () => {
    setTimeout(() => {
        contact.classList.toggle('rainbow');
    }, 1000);
    contact.classList.toggle('rainbow');
}

const drawSection = () => {
    section.classList.toggle('draw-section');
}

btn.addEventListener('click', (e) => {
    e.preventDefault;
    revealNav();
    emailRainbow();
    drawSection();
    currentSection.focus();
});

