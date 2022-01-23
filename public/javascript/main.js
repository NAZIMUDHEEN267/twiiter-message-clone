

    // dom variables
    const menuBtn = document.getElementById('js-menu-btn');
    const menu = document.getElementById('js-menu');
    const body = document.querySelector('body');
    const time = document.getElementById('js-time');
    const date = document.getElementById('js-date');
    const domMonth = document.getElementById('js-month');

    // listening a event when a user clicking the button
    menuBtn.addEventListener('click', () => {
        menu.style.display = 'block';
    })

    // document.querySelector('.overlay').addEventListener('click', () => {
    //     console.log('clicked');
    //     menu.style.display = 'none';
    // })

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"]

    const dt = new Date();

    const year = dt.getFullYear()
    const month = months[dt.getMonth()]
    const dateNum = dt.getDate()
    const hour = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()
    const timePeriod = dt.getHours() > 12 ? ' pm': ' am'
    let minute = dt.getMinutes()
    minute = minute < 10 ? ':0'+minute : ':'+minute

    let fullDate = []

    fullDate.push(year, month, dateNum, hour, minute, timePeriod);
  
    for (let i = 0; i < fullDate.length; i++) {
        if(i < 3){
            date.innerHTML += `<span>${fullDate[i]} </span>`
        }else{
            time.innerHTML += `<span>${fullDate[i]}</span>`
        }
    }


    // domMonth.innerHTML = month[dt.getMonth()]
    
