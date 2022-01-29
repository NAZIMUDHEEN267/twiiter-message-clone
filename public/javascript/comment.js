
// modules
import EmojiPicker from './vanillaEmojiPicker.js';
import events from './events.js'
import api from './api.js';

api()

// calling emojiPicker constructor
new EmojiPicker({
    trigger: [
        {
            selector: '.emoji-btn',
            insertInto: ['.one'],
        },
    ],
    closeButton: true,
});

// ============ events
events();


// =========== dom variables
// for date
const time = document.getElementById('js-time');
const date = document.getElementById('js-date');

// get date
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dt = new Date();

const year = dt.getFullYear();
const month = months[dt.getMonth()];
const dateNum = dt.getDate();
const hour = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours();
const timePeriod = dt.getHours() > 12 ? ' pm' : ' am';
let minute = dt.getMinutes();
minute = minute < 10 ? `:0${minute}` : `:${minute}`;

const fullDate = [];

fullDate.push(year, month, dateNum, hour, minute, timePeriod);

for (let i = 0; i < fullDate.length; i++) {
    if (i < 3) {
        date.innerHTML += `<span>${fullDate[i]} </span>`;
    } else {
        time.innerHTML += `<span>${fullDate[i]}</span>`;
    }
}

// username string length cutting
let lengthCut;
const textUsers = [...document.querySelectorAll('#js-name')];
const usernames = [...document.querySelectorAll('#js-username')];

textUsers.forEach((user, index) => {
    if (user.textContent.length >= 12) {
        lengthCut = '...';
        usernames[index].innerHTML = lengthCut;
    } else if (user.textContent.length > 4) {
        lengthCut = `@${user.textContent.substring(0, 4)}...`;
        usernames[index].innerHTML = lengthCut;
    }
});

