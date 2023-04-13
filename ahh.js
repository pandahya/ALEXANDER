let box = document.querySelector("#box");
let thing = document.querySelectorAl(".thing");

let width = box.offsetWidth;
let height = box.offsetHeight - 200;
thing.forEach(randomPos);

function randomPos(elmnt){
  let randomX = Math.floor(Math.random()*width) - 75;
  let randomY = Math.floor(Math.random()*height);
  elmnt.style.top = (box.offsetTop + randomY) + "px";
  elmnt.style.left = (box.offsetLeft + randomX) + "px";
}