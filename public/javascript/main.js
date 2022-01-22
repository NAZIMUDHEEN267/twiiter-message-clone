

    // dom variables
    const menuBtn = document.getElementById('js-menu-btn');
    const menu = document.getElementById('js-menu');
    const body = document.querySelector('body');
    const time = document.getElementById('js-time')
    const date = document.getElementById('js-date')
    const device = document.getElementById('js-device')

    // listening a event when a user clicking the button
    // menuBtn.addEventListener('click', () => {
    //     menu.style.display = 'block';
    // })

    // document.querySelector('.overlay').addEventListener('click', () => {
    //     console.log('clicked');
    //     menu.style.display = 'none';
    // })

    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"]

    const dt = new Date();
    const time = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()

    time.innerHTML = `${time}: ${dt.getMinutes()} ${time > 12 ? 'PM': 'AM'}`
    date.innerHTML = `${month[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`

    


    
