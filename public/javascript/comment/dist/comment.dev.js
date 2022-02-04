function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance'); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) { return; } const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError('Invalid attempt to spread non-iterable instance'); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]') return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// =========== dom variables
const time = document.getElementById('js-time');
const date = document.getElementById('js-date');
const input = document.querySelector('getFile'); // get date

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dt = new Date();
const year = dt.getFullYear();
const month = months[dt.getMonth()];
const dateNum = 1;
const hour = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours();
const timePeriod = dt.getHours() > 12 ? ' pm' : ' am';
let minute = dt.getMinutes();
minute = minute < 10 ? ':0'.concat(minute) : ':'.concat(minute);
const fullDate = [];
fullDate.push(year, month, dateNum, hour, minute, timePeriod);

for (let i = 0; i < fullDate.length; i++) {
  if (i < 3) {
    date.innerHTML += '<span>'.concat(fullDate[i], ' </span>');
  } else {
    time.innerHTML += '<span>'.concat(fullDate[i], '</span>');
  }
} // username string length cutting

let lengthCut;

const textUsers = _toConsumableArray(document.querySelectorAll('#js-name'));

const usernames = _toConsumableArray(document.querySelectorAll('#js-username'));

textUsers.forEach((user, index) => {
  if (user.textContent.length >= 12) {
    lengthCut = '...';
    usernames[index].innerHTML = lengthCut;
  } else if (user.textContent.length > 4) {
    lengthCut = '@'.concat(user.textContent.substring(0, 4), '...');
    usernames[index].innerHTML = lengthCut;
  }
});

input.onchange = function () {
  const _input$files = _slicedToArray(input.files, 1);
  const file = _input$files[0];

  showSelection.style.display = 'inline-block';
  img.src = URL.createObjectURL(file);
  URL.revokeObjectURL(file);
};
