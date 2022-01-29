Object.defineProperty(exports, '__esModule', { value: true }); exports.default = _default; require('core-js/modules/es.promise.js');

function _default() {
  async function fetching() { return await fetch('https://google.com'); }fetching();// ========= dom variables
  // for user(ronaldo) menu button
  const menuBtn = document.getElementById('js-menu-btn'); const menu = document.getElementById('js-menu');// body
  const body = document.querySelector('body');// textarea resizing
  const textarea = document.querySelector('textarea');// textarea height resizing
  let scrollHeight; let currentLength = 0;// 46
  textarea.addEventListener('keydown', () => { scrollHeight = textarea.scrollHeight; textarea.style.height = `${scrollHeight}px`; if (textarea.textLength === currentLength + 23) { currentLength = textarea.textLength; } else if (currentLength >= textarea.textLength) { const minHeight = 46; if (scrollHeight <= minHeight) { textarea.style.height = `${minHeight}px`; } else { textarea.style.height = `${scrollHeight - 19}px`; } } });// // comment 3dot button
  body.addEventListener('click', (e) => { const check = new String(e.target.id); if (!isNaN(check[check.length - 1]) && check.slice(0, check.length - 1) === 'js-menu-btn') { document.getElementById('js-menu-box'.concat(check[check.length - 1])).classList.add('visible'); } });// enabling menu box
  menuBtn.addEventListener('click', () => { menu.style.display = 'block'; });// disable overlay and hide user(ronaldo) menu box
  // document.querySelector('.overlay').addEventListener('click', () => {
  //     console.log('clicked');
  //     menu.style.display = 'none';
  // })
  return { textarea: () => { console.log('hello user'); } };
}
