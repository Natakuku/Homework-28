'use strict';

let image = document.getElementById('dynamicImage');
let randomNumber = Math.floor(Math.random() * 9) + 1;
let imagePath = `./images/${randomNumber}.jpg`;
image.setAttribute('src', imagePath);