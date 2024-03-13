import { imageCount } from "./constant/gallery.js";

const imageListContainer = document.querySelector(".image-list-container");

const getImageElement = (nth) => {
  return `
        <div class="image-element-container">
            <div class="image-element image-element-${nth}"></div>
        </div>
    `;
};

const insertImageElements = (nthLength, callback) => {
  const elementsString = Array(nthLength)
    .fill("")
    .map((v, i) => getImageElement(i + 1))
    .join("");
  imageListContainer.innerHTML = elementsString;
  callback();
};

const setImageSrcs = (nth) => {
  const imageElements = document.querySelectorAll(".image-element");
  console.log("imageElements", imageElements);
  for (let i = 0; i < nth; i++) {
    imageElements[i].style.backgroundImage = `url(../images/sachamix/${
      i + 1
    }.jpeg)`;
  }
};

const initImageElement = () => {
  insertImageElements(imageCount, () => {
    setImageSrcs(imageCount);
  });
};

window.addEventListener("load", () => {
  initImageElement();
});
