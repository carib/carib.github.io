const switchClass = () => {
    const countdown = document.querySelector('.countdown_div');
    const btn = document.querySelector('button');
    const btnClassesQueue = ['cube', 'cloud'];
    
    countdown.classList.toggle('countdown');
    
    setTimeout(() => {
        countdown.classList.toggle('countdown');
        
        btnClassesQueue.push(btnClassesQueue.shift());
        btn.classList.toggle(`btn_${btnClassesQueue[0]}`);
        
        if (btn.classList.contains('btn')) {
            btn.classList.remove('btn');
        } else {
            btn.classList.toggle(`btn_${btnClassesQueue[btnClassesQueue.length - 1]}`);
        }
    }, 5000);
}