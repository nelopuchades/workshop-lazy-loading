/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from './lazy';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = 320;
  image.dataset.src = `https://randomfox.ca/images/${random(1, 122)}.jpg`;

  container.appendChild(image);

  return container;
};

const mountNode = document.getElementById("images");
const addImageButton = document.querySelector("button");

const addImage = () => {
  const imageToAdd = createImageNode();
  mountNode.append(imageToAdd);
  registerImage(imageToAdd);
};

addImageButton.addEventListener("click", addImage);
