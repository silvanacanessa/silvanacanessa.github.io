// declare my vars
const h1Text = document.querySelector('#h1');
const typefaceBtn = document.querySelector('#change-typeface');
const backgroundBtn = document.querySelector('#change-background');

h1Text.onmouseover = function() {
  h1Text.style.fontFamily = 'Georgia Narrow';
}

h1Text.onmouseout = function() {
  h1Text.style.fontFamily = 'Arial Narrow';
};

typefaceBtn.onclick = function() {
  h1Text.style.color = 'rgb(255, 0, 170)';
}

backgroundBtn.onclick = function() {
  document.body.style.backgroundColor = 'rgb(0, 34, 255)';
};


