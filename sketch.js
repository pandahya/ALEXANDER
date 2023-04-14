//JUMP USING SPACE KEY

//TRY TO COLLECT GREEN BOXES
//GREEN BOXES EVENTUALLY BECOME THE FACES

//JUMP TO AVOID BROWN BOXES
//BROWN BOXES EVENTUALLY BECOME POOP

//IF YOU COLLIDE WITH BIG BROWN BOXES, GAME OVER

let character;
let faces = [];
let faceCount = 4;
let poop = [];
let poopCount = 4;
let bigPoop = [];
let bigPoopCount = 1;
let score = 0;

let message = "";
let jumpValue = 250;
let platformCount = 4;
let platforms = [];
let scene = 1;
let characterX = 50;
let characterY = 50;
let characterWidth = 44;
let characterHeight = 75;
let setVal=true;
let width=600;
let height= 400;
let chivomonoRegular;
let walkingImg, standingImg, poopSmImg, poopMdImg, poopLgImg;
let annaImg, apurvImg, emilyImg, haotianImg, heeyaImg, heidiImg, hyacinthImg, jacksonImg, jasmineImg, krithiImg, laurenImg, leoImg, myImg, shangshangImg, sloaneImg, tanviImg, willImg, yipingImg, yuchenImg, anyaImg, johnImg;
function preload() {
  chivomonoRegular = loadFont("./assets/ChivoMono-Regular.ttf")
  walkingImg = loadImage("./assets/alexander_walk1.gif");
  poopSmImg = loadImage("./assets/poop_small.png");
  poopLgImg = loadImage("./assets/poop_large.png");
  annaImg = loadImage("./assets/AnnaPragman.jpeg");
  apurvImg = loadImage("./assets/Apurv.jpg");
  emilyImg = loadImage("./assets/EmilyXie.jpeg");
  haotianImg = loadImage("./assets/Haotian.jpeg");
  heeyaImg = loadImage("./assets/HeeyaMody.jpeg");
  heidiImg = loadImage("./assets/HeidiBang.jpg");
  hyacinthImg = loadImage("./assets/HyacinthWeng.png");
  jacksonImg = loadImage("./assets/Jackson.jpeg");
  jasmineImg = loadImage("./assets/JasmineChen.jpeg");
  krithiImg = loadImage("./assets/Krithi.JPG");
  laurenImg = loadImage("./assets/LaurenHiga.jpg");
  leoImg = loadImage("./assets/LeoDastur.jpeg");
  myImg = loadImage("./assets/MyHoang.jpeg");
  shangshangImg = loadImage("./assets/ShangshangLi.jpeg");
  sloaneImg = loadImage("./assets/SloaneCollins.jpeg");
  tanviImg = loadImage("./assets/TanviMishra.jpg");
  willImg = loadImage("./assets/Will.jpeg");
  yipingImg = loadImage("./assets/YipingDong.jpg");
  yuchenImg = loadImage("./assets/YuchenXue.png");
  anyaImg = loadImage("./assets/anya.jpg");
  johnImg = loadImage("./assets/john.jpeg");

  // for (let i = 0; i < storedMessage.length; i++) {
  //   storedMessage[i].img = loadImage(storedMessage[i].face);
  // }
}

let content = [
  { 
    face: annaImg, 
    message: "Congratulations Alexander! You’ve been such a fun, caring and exemplary instructor. I wish you and your partner all the best of luck in this new chapter!!!" 
  },
  { 
    face: emilyImg, 
    message: "Hi Alexander, first, thank you so much for being my professor since sophomore year. You have been encouraging me and the type of work I have been doing these years and I can’t express how grateful I am— it feels like you are almost a mentor to me. It really helped alot because I am not confident in my skill sets and I’ve always feel like I am doing poorly in class because of that. I really appreciate it and I am sorry being the one who always turn in things late lol. I was able to get out of my comfort zone and actually going to events like GDC. Can’t express how thankful I am, I really hope things go smoothly for you and your family!!! 🫶🏻🫶🏻🫶🏻❤️❤️❤️" 
  },
  { 
    face: jacksonImg,
    message: "Thanks for being a wonderful mentor! May the coming months and years treat you incredibly. " 
  },
  { 
    face: jasmineImg, 
    message: "Thank you so much for everything you taught us and everything you did for us. The best game professor ever!!!" 
  },
  { 
    face: haotianImg, 
    message: "I wish the best for my best teacher!"
  },
  { 
    face: heidiImg, 
    message: "Hi Alexander! It was really great meeting you and having you as my professor.I have learned so much from you and appreciate all that you have done to help us grow in our academic pursuits. Congratulations on your upcoming paternal leave and I wish you and your family  all the best." 
  },
  { 
    face: yuchenImg, 
    message: "- .... .- -. -.- / -.-- --- ..- / ..-. --- .-. / . ...- . .-. -.-- - .... .. -. --...........I just randomly typed this so it doesn't mean anything:P but thank you and hope to meet you again at pop-up show, GDC, or whatever place in the future! Thanks." 
  },
   { 
     face: apurvImg, 
   message: "Congrats and happy new parenting! Thanks very much for all your help over these years. Will be in touch!" 
   },
  {
    face: yipingImg,
    message: "Now you are done with us adult babies and it is lovely time for real baby!!"
  },
  {
    face: hyacinthImg,
    message: "Thank you for the amazing year! :-) Good luck with the new baby!!!!"
  },
  {
    face: tanviImg,
    message: "Thank you for all of the feedback, help and guidance as I made my teeny game! You've been helping me and my classmates adult for so long that i'm sure you'll make the most amazing parent :)"
  },
  {
    face: laurenImg,
    message: "Thank you for all your support and help Alexander! Best of luck with your new family :)"
  },
  {
    face: shangshangImg,
    message: "Wish you 3 H! Happy! Healthy! Hopeful!"
  },
  {
    face: sloaneImg,
    message: "So excited for you to meet your baby!! I hope fatherhood is everything you have hoped for and more!!"
  },
  {
    face: willImg,
    message: "Thank you for the years of game wisdom. Congratulations on becoming a dad!"
  },
  {
    face: leoImg,
    message: "Hi Alexander, thank you for all your mentorship these past two semesters! Congratulations on the baby, and hope to connect with you again in the future!"
  },
  {
    face: krithiImg,
    message: "thank you for all the constant support and endless lessons! Happy baby time!!"
  },
  {
    face: heeyaImg,
    message: "Congratulations on your new level-up! May your spawn have the agility and intelligence of a seasoned gamer. We'll miss your energy and epic game design skills, and can't wait for you to respawn and return to the game!"
  },
  {
    face: myImg,
    message: "I made this game a while ago called Toss a Baby, dropping the link here when parenting gets tough: https://editor.p5js.org/hoanm825/sketches/eJhxpCAdJ"
  },
  {
    face: anyaImg,
    message: "wishing your family health and happiness in this new stage!"
  }
];


let storedMessage = [
  { face: annaImg, 
   message: "Congratulations Alexander! You’ve been such a fun, caring and exemplary instructor. I wish you and your partner all the best of luck in this new chapter!!!" },
 
  { face: emilyImg, 
   message: "Hi Alexander, first, thank you so much for being my professor since sophomore year. You have been encouraging me and the type of work I have been doing these years and I can’t express how grateful I am— it feels like you are almost a mentor to me. It really helped alot because I am not confident in my skill sets and I’ve always feel like I am doing poorly in class because of that. I really appreciate it and I am sorry being the one who always turn in things late lol. I was able to get out of my comfort zone and actually going to events like GDC. Can’t express how thankful I am, I really hope things go smoothly for you and your family!!! 🫶🏻🫶🏻🫶🏻❤️❤️❤️" },
  { face: jacksonImg, 
   message: "Thanks for being a wonderful mentor! May the coming months and years treat you incredibly. " },
  { face: jasmineImg, 
   message: "Thank you so much for everything you taught us and everything you did for us. The best game professor ever!!!" },
  { face: haotianImg, 
   message: "I wish the best for my best teacher!" },
  { face: heidiImg, 
   message: "Hi Alexander! It was really great meeting you and having you as my professor.I have learned so much from you and appreciate all that you have done to help us grow in our academic pursuits. Congratulations on your upcoming paternal leave and I wish you and your family  all the best." },
  { face: yuchenImg, 
   message: "- .... .- -. -.- / -.-- --- ..- / ..-. --- .-. / . ...- . .-. -.-- - .... .. -. --...........I just randomly typed this so it doesn't mean anything:P but thank you and hope to meet you again at pop-up show, GDC, or whatever place in the future! Thanks." },
   { face: apurvImg, 
   message: "Congrats and happy new parenting! Thanks very much for all your help over these years. Will be in touch!" },
  {
    face: yipingImg,
    message: "Now you are done with us adult babies and it is lovely time for real baby!!"
  }
];

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
  textFont(chivomonoRegular);
  character = new Character();
  for (let i = 0; i < faceCount; i++) {
    faces.push(new Face());
  }
  for (let i = 0; i < poopCount; i++) {
    poop.push(new Poop("small"));
  }
  for (let i = 0; i < bigPoopCount; i++) {
    bigPoop.push(new Poop("big"));
  }
}

function draw() {
  switch (scene) {
    case 1:
      gamePlay();
    case 0:
      gameOver();
  }
}

function gamePlay() {
  background(220);
  translate(-character.x + 100, 0);

  // Display score and message
  textSize(24);
  fill(0);
  text(`Score: ${score}`, 10, 50);
  text(message, width / 2 - message.length * 5, height / 2);

  // Handle character movement
  character.update();
  character.show();

  // Handle object collection
  for (let i = faces.length - 1; i >= 0; i--) {
    faces[i].show();
    if (character.hits(faces[i])) {
      score++;
      document.querySelector("#message").innerHTML = faces[i].message;
      storedMessage.push(faces[i]);
      faces.splice(i, 1);
    }
  }

  // Add new faces when others are collected
  if (faces.length < faceCount) {
    faces.push(new Face());
  }

  for (let i = poop.length - 1; i >= 0; i--) {
    poop[i].show();
    if (character.hits(poop[i])) {
      score--;
      poop.splice(i, 1);
    }
  }

  // Add new faces when others are collected
  if (poop.length < poopCount) {
    poop.push(new Poop("small"));
  }

  for (let i = bigPoop.length - 1; i >= 0; i--) {
    bigPoop[i].show();
    if (character.hits(bigPoop[i])) {
      gameOver();
      bigPoop.splice(i, 1);
    }
  }

  // Add new faces when others are collected
  if (bigPoop.length < bigPoopCount) {
    bigPoop.push(new Poop("big"));
  }

  if (frameCount % 20 == 0) {
    character.gravity = 1;
    //character.xSpeed = 0;
  }

  if (frameCount % 180 == 0) {
    platforms.push(new Platform(character.x));
    faces.push(new Face());
    poop.push(new Poop("small"));
  }

  if (frameCount % 300 == 0) {
    bigPoop.push(new Poop("big"));
  }

  for (let i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show();
    if (character.coll(platforms[i])) {
      character.y = platforms[i].y - 100;
      character.yspeed = 0;
      character.gravity = 0;
    } else {
      //character.gravity = 1;
    }
  }
}

function keyPressed() {
  if (key == " ") {
    character.jump();
  } else if (keyCode === LEFT_ARROW) {
    characterX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    characterX += 10;
  } else if (keyCode === UP_ARROW) {
    characterY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    characterY += 10;
  }
  // if (key == 'd') {
  //   console.log("r")
  //   character.right();
  // }
}

class Character {
  constructor() {
    this.x = 50;
    this.y = height - 50;
    //this.xSpeed = 0;
    this.ySpeed = 0;
    this.gravity = 1;
    this.jumps = 1;
  }

  update() {
    this.ySpeed += this.gravity;
    //this.xSpeed = constrain(this.xSpeed, 0, 2);
    //this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.y = constrain(this.y, 0, height - 50);
  }

  show() {
    // fill(255, 0, 0);
    // rect(this.x, this.y, 50, 50);
    image(walkingImg ,this.x,this.y, characterWidth, characterHeight);
  }

  jump() {
    if (this.jumps > 0) {
      //this.y == height - 50
      this.ySpeed = -10;
      //if (!this.onPlatform()) this.jumps--;
    }
  }

  // right(){
  //   this.xSpeed = 2;
  // }

  hits(object) {
    return collideRectRect(
      this.x,
      this.y,
      50,
      50,
      object.x,
      object.y,
      object.size,
      object.size
    );
  }

  coll(platform) {
    if (
      collideRectRect(
        this.x,
        this.y,
        50,
        50,
        platform.x,
        platform.y - 50,
        platform.w,
        platform.h
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Face {
  constructor() {
    this.x = random(width, width + 1000);
    this.y = random(100, height - 120);
    this.speed = 1.5;
    this.size = 20;
    this.content = content[int(random(0, content.length))];
    this.message = this.content.message;
    this.face = this.content.face;
  }

  show() {
    //fill(0, 255, 0);
    image(this.face, this.x, this.y, this.size, this.size);
    //rect(this.x, this.y, this.size, this.size);
    this.x -= this.speed;
  }
}

class Poop {
  constructor(poopSize) {
    this.x = random(width, width + 1000);
    if (poopSize == "big") {
      this.size = 40;
      this.image = "poopSmImg";
    } else {
      this.size = 20;
      this.image = "poopLgImg";
    }
    this.y = height - this.size;
    this.speed = 1.5;
  }

  show() {
    // fill("brown");
    // rect(this.x, this.y, this.size, this.size);
    image(this.image, this.x, this.y);
    this.x -= this.speed;
  }
}

class Platform {
  constructor() {
    this.x = random(width - 200, width + 1000);
    this.y = random(180, height - 80);
    this.w = random(100, 180);
    this.h = 12;
    this.speed = 1.5;
  }

  show() {
    noStroke();
    fill(0, 0, 255);
    rect(this.x, this.y - 40, this.w, this.h);
    this.x -= this.speed;
  }

  // forcePlayer(player) {
  //   if (player.yspeed > 0 && player.x > this.x && player.x < this.x + this.w && player.y > this.y - 50 && player.y < this.y + this.h - 50) {
  //     player.y = this.y - 50;
  //     player.yspeed = 0;
  //     player.jumps = 1;
  //   }
  // }
}

function gameOver() {
  background(220)
  // Stop the game
  // noLoop();

  // Display a message to the player
  // fill("green")
  // rect(0,0,width,height)
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Whoops", width / 2, height / 2);
  // Draw the character
//   fill(255, 0, 0);
  
//   rect(characterX, characterY, characterSize, characterSize);
   image(walkingImg, characterX, characterY, 44,75);

  // Check for collisions with each stored message
  if(setVal){
    showImg()
    setVal = false;
  }
  else{
    for (let i = 0; i < storedMessage.length; i++) {
      let message = storedMessage[i];
      // Calculate the distance between the character and the message image
      let distance = imgObject.distCheck(characterX, characterY);
      console.log("distance", distance)
      // If the distance is less than the sum of the character size and half the image size, there is a collision
      if (distance < characterWidth / 2 + 50 / 2) {
        // Display the message
        console.log("message", message.message)
        imgObject.showMessage(message.message)      
      }
      // Draw the message image
      imgObject.show(message.face)
    }
  }
  
}

function showImg(){
  for (let i = 0; i < storedMessage.length; i++) {
    imgObject= new imageConstruct()
  }
}

function collideRectRect(x1, y1, w1, h1, x2, y2, w2, h2) {
  // Calculate half-widths and half-heights
  let hw1 = w1 / 2;
  let hh1 = h1 / 2;
  let hw2 = w2 / 2;
  let hh2 = h2 / 2;

  // Calculate centers
  let cx1 = x1 + hw1;
  let cy1 = y1 + hh1;
  let cx2 = x2 + hw2;
  let cy2 = y2 + hh2;

  // Calculate distance between centers
  let dx = Math.abs(cx1 - cx2);
  let dy = Math.abs(cy1 - cy2);

  // Check for intersection
  if (dx <= hw1 + hw2 && dy <= hh1 + hh2) {
    return true;
  } else {
    return false;
  }
}

class imageConstruct{
  constructor(){
    this.imgWidth=50;
    this.imgHeight=50;
    this.randomH=random(100, 300)
    this.randomW=random(100, 400)
  }
  distCheck(x,y){
    return dist(x, y, this.imgWidth / 2, this.imgHeight / 2)
    
  }
  show(link){
    console.log(this.randomW,this.randomH, this.imgWidth, this.imgHeight)
    image(link,this.randomW,this.randomH, this.imgWidth, this.imgHeight);
  }
  showMessage(msg){
    textSize(20);
    textAlign(CENTER, CENTER);
    text(msg, this.randomW, this.randomH);
  }
}
