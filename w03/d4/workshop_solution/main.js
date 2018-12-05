//This comes from data.js
const gifs = window.data.data;
console.log(gifs)


function newGif(){
  const gifEl = document.querySelector('img');

  gifEl.style.display = "block";

  const randomNumber = Math.floor(Math.random()*gifs.length);
  const randomImage = gifs[randomNumber];
  // console.log(randomImage);
  gifEl.src = randomImage.images.preview_gif.url;
}

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', newGif);


newGif();
