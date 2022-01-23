// import { saveAs } from "file-saver";

const saveAs = require("file-saver");

const imgSrcs = [];
const imgs = document.querySelectorAll("img");
const template = document.querySelector(".template");

const downloads = document.querySelector(".downloads");
imgs.forEach((img) => {
  imgSrcs.push(img);
});

imgSrcs.forEach((img) => {
  const templateClone = template.content.cloneNode(true);
  const templateimg = templateClone.querySelector("img");
  templateimg.src = img.src;
  downloads.appendChild(templateClone);
});

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const imgSrc = e.target.previousElementSibling.src;
    saveAs(imgSrc, "image.jpg");
  }
});
