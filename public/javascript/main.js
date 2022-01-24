

    // dom variables

    // for user menu button
    const menuBtn = document.getElementById('js-menu-btn');
    const menu = document.getElementById('js-menu');

    // body
    const body = document.querySelector('body');
    
    // for date 
    const time = document.getElementById('js-time');
    const date = document.getElementById('js-date');
    // for comment button
    const list = document.getElementById('js-list');
    // textarea resizing
    const textarea = document.querySelector('textarea');
    
    // listening a event when a user clicking the button
    menuBtn.addEventListener('click', () => {
        menu.style.display = 'block';
    })

    // document.querySelector('.overlay').addEventListener('click', () => {
    //     console.log('clicked');
    //     menu.style.display = 'none';
    // })


    // get date
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

    // username string length cutting 
    let lengthCut;
    const textUsers = [...document.querySelectorAll("#js-name")];
    const usernames = [...document.querySelectorAll('#js-username')];

    textUsers.forEach((user,index)=> {
        if(user.textContent.length >= 12){
            lengthCut = '...'
            usernames[index].innerHTML = lengthCut
        }else if(user.textContent.length > 4){
            lengthCut = `@${user.textContent.substring(0,4)}...`
            usernames[index].innerHTML = lengthCut
        }
    });


    // comment button
    body.addEventListener('click', (e) => {
        let check = new String(e.target.id)
        if(
            !isNaN(check[check.length - 1]) && 
            check.slice(0,check.length - 1) === 'js-menu-btn'
          )
            {   
                document.getElementById(`js-menu-box${check[check.length-1]}`)
                .classList.add('visible')
            }
        })


    // textarea height resizing
    let scrollHeight, currentLength = 0; // 46

    textarea.addEventListener('input', () => {
        scrollHeight = textarea.scrollHeight
        textarea.style.height = scrollHeight + 'px'
        
        if(textarea.textLength === currentLength + 23){
            currentLength = textarea.textLength
        }
        else if(currentLength > textarea.textLength){
            scrollHeight = scrollHeight - 19 
            textarea.style.height = scrollHeight + 'px'
        }
    })