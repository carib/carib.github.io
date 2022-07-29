const countdowns = Array.from(document.querySelectorAll('.countdown_div'));
const btn = document.querySelector('button');
const btnClassesQueue = ['iso', 'cloud', 'slice'];

const switchClass = () => {    
    btn.classList.toggle('animated');
    btn.classList.toggle('no_click');
    
    setTimeout(() => {
        btn.classList.toggle('animated');
        btn.classList.toggle('no_click');
        
        btnClassesQueue.push(btnClassesQueue.shift());
        btn.classList.toggle(`btn_${btnClassesQueue[0]}`);
        
        if (btn.classList.contains('btn')) {
            btn.classList.remove('btn');
        } else {
            btn.classList.toggle(`btn_${btnClassesQueue[btnClassesQueue.length - 1]}`);
        }
    }, 500);
}

btn.addEventListener('click', switchClass);