const cont = document.querySelector(".images");
const images = document.querySelectorAll("img.carousel");

let counter = 0;
const size = images[0].clientWidth;
change = 960;
cont.style.transform = `translateX(${-size * counter}px)`;

function nex(){
  if (counter >= images.length - 1) return;
  cont.style.transition = "transform 0.5s";
  counter++;
  cont.style.transform = `translateX(${(-size * counter)}px)`;
}

setInterval(nex, 3000);

cont.addEventListener("transitionend", () => {
  if (images[counter].id === "lastClone") {
    cont.style.transition = "none";
    counter = images.length - 2;
    cont.style.transform = `translateX(${-size * counter}px)`;
  }
  if (images[counter].id === "firstClone") {
    cont.style.transition = "none";
    counter = images.length - counter;
    cont.style.transform = `translateX(${-size * counter}px)`;
  }
});