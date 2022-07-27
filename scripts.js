const countdowns = Array.from(document.querySelectorAll('.countdown_div'));
const btn = document.querySelector('button');
const btnClassesQueue = ['iso', 'cloud'];

const switchClass = () => {    
    countdowns.map(countdown => countdown.classList.toggle('countdown'));
    btn.classList.toggle('no_click');
    
    setTimeout(() => {
        countdowns.map(countdown => countdown.classList.toggle('countdown'));
        
        btn.classList.toggle('no_click');
        btnClassesQueue.push(btnClassesQueue.shift());
        btn.classList.toggle(`btn_${btnClassesQueue[0]}`);
        
        if (btn.classList.contains('btn')) {
            btn.classList.remove('btn');
        } else {
            btn.classList.toggle(`btn_${btnClassesQueue[btnClassesQueue.length - 1]}`);
        }
    }, 5000);
}

btn.addEventListener('click', switchClass);