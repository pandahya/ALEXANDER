let box = document.querySelector("#box");
// let thing = document.querySelectorAl(".thing");

let width = box.offsetWidth - 250;
let height = box.offsetHeight - 250;
// thing.forEach(randomPos);

let content = [
  { 
    name: "Anna Pragman",
    face: "./assets/AnnaPragman.jpeg", 
    message: "Congratulations Alexander! You’ve been such a fun, caring and exemplary instructor. I wish you and your partner all the best of luck in this new chapter!!!" 
  },
  { 
    name: "Emily Xie",
    face: "./assets/EmilyXie.jpeg", 
    message: "Hi Alexander, first, thank you so much for being my professor since sophomore year. You have been encouraging me and the type of work I have been doing these years and I can’t express how grateful I am— it feels like you are almost a mentor to me. It really helped alot because I am not confident in my skill sets and I’ve always feel like I am doing poorly in class because of that. I really appreciate it and I am sorry being the one who always turn in things late lol. I was able to get out of my comfort zone and actually going to events like GDC. Can’t express how thankful I am, I really hope things go smoothly for you and your family!!! 🫶🏻🫶🏻🫶🏻❤️❤️❤️" 
  },
  { 
    name: "Jackson Westbrook",
    face: "./assets/Jackson.jpeg",
    message: "Thanks for being a wonderful mentor! May the coming months and years treat you incredibly. " 
  },
  { 
    name: "Jasmine Chen",
    face: "./assets/JasmineChen.jpeg", 
    message: "Thank you so much for everything you taught us and everything you did for us. The best game professor ever!!!" 
  },
  { 
    name: "Haotian Wang",
    face: "./assets/Haotian.jpeg", 
    message: "I wish the best for my best teacher!"
  },
  { 
    name: "Heidi Bang",
    face: "./assets/HeidiBang.jpg", 
    message: "Hi Alexander! It was really great meeting you and having you as my professor.I have learned so much from you and appreciate all that you have done to help us grow in our academic pursuits. Congratulations on your upcoming paternal leave and I wish you and your family  all the best." 
  },
  { 
    name: "Yuchen Xue",
    face: "./assets/YuchenXue.png", 
    message: "- .... .- -. -.- / -.-- --- ..- / ..-. --- .-. / . ...- . .-. -.-- - .... .. -. --...........I just randomly typed this so it doesn't mean anything:P but thank you and hope to meet you again at pop-up show, GDC, or whatever place in the future! Thanks." 
  },
  { 
    name: "Apurv Rayate",
    face: "./assets/Apurv.jpg", 
    message: "Congrats and happy new parenting! Thanks very much for all your help over these years. Will be in touch!" 
  },
  {
    name: "Yiping Dong",
    face: "./assets/YipingDong.jpg",
    message: "Now you are done with us adult babies and it is lovely time for real baby!!"
  },
  {
    name: "Hyacinth Weng",
    face: "./assets/HyacinthWeng.png",
    message: "Thank you for the amazing year! :-) Good luck with the new baby!!!!"
  },
  {
    name: "Tanvi Mishra",
    face: "./assets/TanviMishra.jpg",
    message: "Thank you for all of the feedback, help and guidance as I made my teeny game! You've been helping me and my classmates adult for so long that i'm sure you'll make the most amazing parent :)"
  },
  {
    name: "Lauren Higa",
    face: "./assets/LaurenHiga.jpg",
    message: "Thank you for all your support and help Alexander! Best of luck with your new family :)"
  },
  {
    name: "Shangshang Li",
    face: "./assets/ShangshangLi.jpeg",
    message: "Wish you 3 H! Happy! Healthy! Hopeful!"
  },
  {
    name: "Sloane Collins",
    face: "./assets/SloaneCollins.jpeg",
    message: "So excited for you to meet your baby!! I hope fatherhood is everything you have hoped for and more!!"
  },
  {
    name: "Will Park",
    face: "./assets/Will.jpeg",
    message: "Thank you for the years of game wisdom. Congratulations on becoming a dad!"
  },
  {
    name: "Leo Dastur",
    face: "./assets/LeoDastur.jpeg",
    message: "Hi Alexander, thank you for all your mentorship these past two semesters! Congratulations on the baby, and hope to connect with you again in the future!"
  },
  {
    name: "Krithi Nalla",
    face: "./assets/Krithi.JPG",
    message: "thank you for all the constant support and endless lessons! Happy baby time!!"
  },
  {
    name: "Heeya Mody",
    face: "./assets/HeeyaMody.jpeg",
    message: "Congratulations on your new level-up! May your spawn have the agility and intelligence of a seasoned gamer. We'll miss your energy and epic game design skills, and can't wait for you to respawn and return to the game!"
  },
  {
    name: "My Hoang",
    face: "./assets/MyHoang.jpeg",
    message: "I made this game a while ago called Toss a Baby, dropping the link here when parenting gets tough: https://editor.p5js.org/hoanm825/sketches/eJhxpCAdJ"
  },
  {
    name: "Anya Osipov",
    face: "./assets/Anya.jpg",
    message: "wishing your family health and happiness in this new stage!"
  },
  {
    name: "John Lepore",
    face: "./assets/John.jpeg",
    message: "Hey Alexander, thanks for making my final year thesis fun and a return to normalcy after a crazy last few years! Wishing the best to you, your family and your newly born! Show them some cool games!"
  }
];

content.forEach(randomPos);

function randomPos(elmnt){
  let randomX = Math.floor(Math.random()*width);
  let randomY = Math.floor(Math.random()*height);
  let item = document.createElement("div");
  box.appendChild(item);
  item.setAttribute("class", "item");
  let figure = document.createElement("figure");
  let figCaption = document.createElement("figcaption");
  figCaption.innerHTML = elmnt.name;
  let moreBtn = document.createElement("button");
  figure.appendChild(moreBtn);
  moreBtn.innerHTML = "💌";
  let face = document.createElement("img");
  face.src = elmnt.face;
  figure.appendChild(face);
  figure.appendChild(figCaption);
  item.appendChild(figure);
  let message = document.createElement("p");
  item.appendChild(message);
  message.innerHTML = elmnt.message;

  item.style.top = (box.offsetTop + randomY) + "px";
  item.style.left = (box.offsetLeft + randomX) + "px";

  moreBtn.addEventListener("click", function(){
    if(message.style.visibility == "visible"){
      message.style.visibility = "hidden";
      message.style.width = "0px";
      message.style.height = "0px";
    }else{
      message.style.visibility = "visible";
      message.style.width = "250px";
      message.style.height = "min-content";
    }
  });
}

let draggables = document.querySelectorAll(".item");
draggables.forEach(dragElement);
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
  }
}