
const gif = document.getElementById('js-gif__images');
const showBtn = document.getElementById('js-show-more');
const text = document.querySelector('textarea');
const time = document.querySelector('#js-time');

// boolean value set for show button
let showClicked = false;

export default () => {

    time.addEventListener('click', () => {
        const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${text.value}&rating=g&api_key=-5&q`


        function loadImage(imgSize, length) {
            var imgList;
            for (let i = 0; i <= length ; i += 2) {
                imgList += `<div class="images">
                                <img src="${imgSize[i].images.fixed_width.url}"/>
                                <img src="${imgSize[i + 1].images.fixed_width.url}"/>
                            </div>`
            }
            
            gif.innerHTML = imgList;
        }

        async function api() {
            const result = await fetch(apiUrl);
            const data = result.json();

            data
                .then(object => {
                    loadImage(object.data, 7);

                    showBtn.addEventListener('click', () => {
                        showClicked = true;
                        showBtn.style.display = 'none';
                        loadImage(object.data, object.data.length - 2);
                    })
                })
                .catch(err => console.log(err))
        }

        api();
    })


    gif.addEventListener('scroll', (event) => {
        console.log(event.target.scrollTop);
        if(
            event.target.scrollTop >= event.target.clientHeight/1.3 &&
            showClicked !== true
            ){
            showBtn.style.display = 'block'
        }else{
            showBtn.style.display = 'none'
        }
    })
}
