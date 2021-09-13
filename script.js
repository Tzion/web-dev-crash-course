
    let btn = document.getElementById('find-food-btn');
    let overlay = document.getElementById('overlay');
    btn.addEventListener( 'click', () => {
        overlay.style.display = 'grid'
        overlay.classList.add('animate-overlay')
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 3000);
        document.documentElement.style.getPropertyValue('--overlay-delay')
    })