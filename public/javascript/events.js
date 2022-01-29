

export default function () {

    const textarea = document.getElementById('js-textarea');
    const side = document.getElementById("js-side");
    const overlay = document.getElementById('js-overlay');
    const sideBtn = document.getElementById('js-side-btn');
    const personalInput = document.getElementById('js-personal-input');
    const replyBox = document.querySelectorAll('.menu__box-others');
    const personalBtn = document.getElementById("js-personal__cta");
    const menu = document.getElementById("js-menu");
    const menuBtn = document.getElementById('js-menu-btn');
    const gifBtn = document.getElementById('js-gif-btn');
    const gifBlock = document.getElementById('js-gif-block');
    const closeBtn = document.getElementById('js-close-btn');
    const body = document.getElementById('js-body');

    // overlay function     
    function overlayCall(visibility) {
        if (visibility) {
            overlay.classList.add('visible')
            side.style.overflow = 'hidden';
        } else {
            overlay.classList.remove('visible')
            side.style.overflow = 'scroll';
        }
    }


    // =========== events

    const span = document.createElement('span')
    personalInput.replaceWith(span);
    textarea.addEventListener('click', () => {
        sideBtn.hidden = true;
        span.replaceWith(personalInput)
    })


    // textarea height resizing
    let scrollHeight;
    let currentLength = 0; // 46

    textarea.addEventListener('input', () => {

        // for input height controlling
        scrollHeight = textarea.scrollHeight;
        textarea.style.height = `${scrollHeight}px`;

        if (textarea.textLength === currentLength + 23) {
            currentLength = textarea.textLength;
        } else if (currentLength >= textarea.textLength) {
            const minHeight = 46;

            if (scrollHeight <= minHeight) {
                textarea.style.height = `${minHeight}px`;
            } else {
                textarea.style.height = `${scrollHeight - 19}px`;
            }
        }


        //any value user entered personal__input block enabled
        personalBtn.style.background = "#0878a1";
        personalBtn.style.pointerEvents = 'auto';
    });

    // personalBtn 
    personalBtn.addEventListener('click', (event) => {
        event.preventDefault()
        personalBtn.style.background = '#7cd7f9';
    })

    // to find which number box selected
    let menuBoxNum;

    body.addEventListener('click', (e) => {
        const check = new String(e.target.id);
        if (
            !isNaN(check[check.length - 1])
            && check.slice(0, check.length - 1) === 'js-menu-btn'
        ) {
            const menuBox = document.getElementById(`js-menu-box${check[check.length - 1]}`);
            menuBox.classList.add('visible');
            overlayCall(true);
            menuBoxNum = menuBox;
        }
    });


    // enabling menu box
    menuBtn.addEventListener('click', () => {
        menu.classList.add('visible')
        overlayCall(true);
    });


    // disable overlay and hide user(ronaldo) menu box

    overlay.addEventListener('click', () => {

        overlayCall(false);
        replyBox.forEach(selector => {
            if (selector === menuBoxNum) {
                selector.classList.remove('visible')
            }
        });

        menu.classList.remove('visible');
    })

    // when user scroll sidebar that time emoji container is visible then it will be removed
    side.onscroll = () => {
        const comment = document.querySelector('.comment')
        comment.childNodes.forEach(data => {
            if (data.className == "fg-emoji-container") {
                data.remove();
            }
        })
    }


    // click event for gif button 
    gifBtn.addEventListener('click', () => {
        gifBlock.style.display = 'block';
    })

    // click event for close gif block
    closeBtn.addEventListener('click', () => {
        gifBlock.style.display = 'none';
    })

}


