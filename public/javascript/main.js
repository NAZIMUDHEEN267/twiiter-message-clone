

    // dom variables
    const menuBtn = document.getElementById('js-menu-btn');
    const menu = document.getElementById('js-menu');
    const body = document.querySelector('body');

    // listening a event when a user clicking the button
    menuBtn.addEventListener('click', () => {
        menu.style.display = 'block';
    })

    document.querySelector('.overlay').addEventListener('click', () => {
        console.log('clicked');
        menu.style.display = 'none';
    })
