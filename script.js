window.addEventListener("load", () => {
  document.querySelector('.left').classList.add('leftAnimation');
  document.querySelector('.right').classList.add('rightAnimation');
});

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
})

count = 1
intervl = setInterval(() => {

    if (count < carousel.length){
        carousel[count-1].setAttribute("class", "slideFeature-content inactive");
        carousel[count].setAttribute("class", "slideFeature-content active");
        count++ ;
    }
    else{
        count = 1;
        carousel[carousel.length-1].setAttribute("class", "slideFeature-content inactive");
        carousel[count-1].setAttribute("class", "slideFeature-content active");
    }

}, 3000);

retaurantPageNavigation = document.querySelector('#restaurant');
storePageNavigation = document.querySelector('#store');
roomPageNavigation = document.querySelector('#room');

retaurantPageNavigation.addEventListener('click', function() {
    window.location.href = '/pandeyPg/orderFood.html';}
);

storePageNavigation.addEventListener('click', function() {
    window.location.href = '/pandeyPg/store.html';}
);

// roomPageNavigation.addEventListener('click', function() {
//     window.location.href = '/room.html';}
// );
