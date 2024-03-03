'use strict';

const imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const randomNumber = Math.floor(Math.random() * imageNames.length);
const randomImagePath = `./images/${imageNames[randomNumber]}`;
const randomImageElement = document.getElementById('randomImage');
randomImageElement.src = randomImagePath;