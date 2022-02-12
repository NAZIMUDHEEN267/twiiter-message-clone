
// DOM variables
const borderElements = document.querySelectorAll('#js-border');
const elementsP = document.querySelectorAll('.form__input p');
const changeLink = document.getElementById('js-change-link');
const changeInputOne = document.querySelector('.js-change-one');
const changeInputTwo = document.querySelector('.js-change-two');
const changeInputValue = document.getElementById('js-change-input');
const body = document.querySelector('body');

// for p element event, when user click the input field reduce the size the element
elementsP.forEach(p => {
    p.parentElement.addEventListener('click', () => {
        p.classList.add('js-p');
    })
})

// when focus the input area blue colored border enabled 
borderElements.forEach(element => {
    element.addEventListener('focusin', () => {
        element.style.border = '2px solid #07a8a8'
    })
})

// changing input field email/phone
changeLink.addEventListener('click', () => {

    function change(para1, para2) {
        para1.removeAttribute('hidden');
        para2.setAttribute('hidden', 'true')
    }

    if (changeInputOne.hasAttribute('hidden')) {
        change(changeInputOne, changeInputTwo)
        changeInputValue.textContent = 'email';

    } else if (changeInputTwo.hasAttribute('hidden')) {
        change(changeInputTwo, changeInputOne);
        changeInputValue.textContent = 'phone';
    }
})
