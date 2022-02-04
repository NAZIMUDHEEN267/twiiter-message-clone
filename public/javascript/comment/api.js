const gif = document.getElementById('js-gif__images');
const showBtn = document.getElementById('js-show-more');
const gifSearch = document.querySelector('#js-gif-search');
const searchBtn = document.querySelector('#js-search-btn');
const img = document.querySelector('#js-img');
const showSelection = document.getElementById('js-show-selection');

// boolean value set for show button
let showClicked = false;

// This function is doing, the passed data converted to image
function loadImage(imgSize, length) {
  let imgList;
  for (let i = 1; i <= length; i += 2) {
    imgList += `
        <div class="images">
        ${console.log(imgSize[i].images.fixed_width.url)}
          <img src="${imgSize[i].images.fixed_width.url}"/>
          <img src="${imgSize[i + 1].images.fixed_width.url}"/>
        </div>
        `;
  }
  gif.innerHTML = imgList;
}

// using ajax request for default gif box
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = this.responseText;
    const apiData = JSON.parse(response);
    loadImage(apiData.data, 1);

    showBtn.addEventListener('click', () => {
      showClicked = true;
      showBtn.style.display = 'none';
      loadImage(apiData.data, 48);
    });
  }
};

const url = 'https://api.giphy.com/v1/gifs/search?q=funny&rating=g&api_key=2FJgFS8i3VJXmBrVIKC6g35vMTbZcsiL ';
xhr.open('GET', url, true);
xhr.send();

// fetching data with fetch api
searchBtn.addEventListener('click', () => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${gifSearch.value}&rating=g&api_key=2FJgFS8i3VJXmBrVIKC6g35vMTbZcsiL`;

  async function api() {
    const result = await fetch(apiUrl);
    const data = result.json();

    data
      .then((object) => {
        loadImage(object.data, 7);

        showBtn.addEventListener('click', () => {
          showClicked = true;
          showBtn.style.display = 'none';
          loadImage(object.data, object.data.length);
        });
      })
      .catch((err) => console.log(err));
  }

  api();
});

gif.addEventListener('scroll', (event) => {
  if (
    event.target.scrollTop >= event.target.clientHeight / 2
    && showClicked !== true
  ) {
    showBtn.style.display = 'block';
  } else {
    showBtn.style.display = 'none';
  }
});

showSelection.style.display = 'none';
function link(url) {
  showSelection.style.display = 'inline-block';
  img.src = url;
}

gif.addEventListener('click', (event) => {
  link(event.target.src);
});
