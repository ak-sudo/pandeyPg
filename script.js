let carousel = document.querySelectorAll(".slideFeature-content");

let rightBtn = document.querySelector("#rightBtn");
let lefttBtn = document.querySelector("#leftBtn");

i = 1;

carousel[i - 1].setAttribute("class", "slideFeature-content active");

rightBtn.addEventListener("click", () => {
  if (i < carousel.length) {
    carousel[i - 1].setAttribute("class", "slideFeature-content inactive");
    carousel[i].setAttribute("class", "slideFeature-content active");
    i++;
  } else {
    carousel[carousel.length - 1].setAttribute(
      "class",
      "slideFeature-content inactive"
    );
    carousel[0].setAttribute("class", "slideFeature-content active");
    i = 1;
  }
});

leftBtn.addEventListener("click", () => {
  getActive = document.querySelector(".active");
  getActiveId = getActive["id"] - 1;

  if (getActiveId < carousel.length) {
    if (getActiveId == 0) {
      carousel[carousel.length - i].setAttribute(
        "class",
        "slideFeature-content active"
      );
      carousel[0].setAttribute("class", "slideFeature-content inactive");
    } else {
      carousel[getActiveId].setAttribute(
        "class",
        "slideFeature-content inactive"
      );
      carousel[getActiveId - 1].setAttribute(
        "class",
        "slideFeature-content active"
      );
    }
  }
});
