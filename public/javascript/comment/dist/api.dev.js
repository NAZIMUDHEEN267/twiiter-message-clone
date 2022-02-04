"use strict";

var gif = document.getElementById('js-gif__images');
var showBtn = document.getElementById('js-show-more');
var gifSearch = document.querySelector('#js-gif-search');
var searchBtn = document.querySelector('#js-search-btn');
var img = document.querySelector('#js-img');
var showSelection = document.getElementById('js-show-selection'); // boolean value set for show button

var showClicked = false; // This function is doing, the passed data converted to image

function loadImage(imgSize, length) {
  var imgList;

  for (var i = 1; i <= length; i += 2) {
    imgList += "\n        <div class=\"images\">\n        ".concat(console.log(imgSize[i].images.fixed_width.url), "\n          <img src=\"").concat(imgSize[i].images.fixed_width.url, "\"/>\n          <img src=\"").concat(imgSize[i + 1].images.fixed_width.url, "\"/>\n        </div>\n        ");
  }

  gif.innerHTML = imgList;
} // using ajax request for default gif box


var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = this.responseText;
    var apiData = JSON.parse(response);
    loadImage(apiData.data, 1);
    showBtn.addEventListener('click', function () {
      showClicked = true;
      showBtn.style.display = 'none';
      loadImage(apiData.data, 48);
    });
  }
};

var url = 'https://api.giphy.com/v1/gifs/search?q=funny&rating=g&api_key=2FJgFS8i3VJXmBrVIKC6g35vMTbZcsiL ';
xhr.open('GET', url, true);
xhr.send(); // fetching data with fetch api

searchBtn.addEventListener('click', function () {
  var apiUrl = "https://api.giphy.com/v1/gifs/search?q=".concat(gifSearch.value, "&rating=g&api_key=2FJgFS8i3VJXmBrVIKC6g35vMTbZcsiL");

  function api() {
    var result, data;
    return regeneratorRuntime.async(function api$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch(apiUrl));

          case 2:
            result = _context.sent;
            data = result.json();
            data.then(function (object) {
              loadImage(object.data, 7);
              showBtn.addEventListener('click', function () {
                showClicked = true;
                showBtn.style.display = 'none';
                loadImage(object.data, object.data.length);
              });
            })["catch"](function (err) {
              return console.log(err);
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  api();
});
gif.addEventListener('scroll', function (event) {
  if (event.target.scrollTop >= event.target.clientHeight / 2 && showClicked !== true) {
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

gif.addEventListener('click', function (event) {
  link(event.target.src);
});