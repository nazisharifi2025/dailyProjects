const hero = document.getElementById("heroDiv");
const images = [
  "url(../public/img/slide1.jpg)",
  "url(../public/img/slide2.jpg)",
  "url(../public/img/slide3.jpg)",
  "url(../public/img/slide4.jpg)",
  "url(../public/img/slide5.jpg)",
  "url(../public/img/slide6.jpg)",
];
let index = 0;
setInterval(() => {
  hero.style.backgroundImage = images[index];
  index = (index + 1) % images.length;
}, 2000);

// hero texts

const text = "Don't Forget this : new book , new world!";
const h1 = document.createElement("h1");
hero.append(h1);
setInterval(() => {}, 2000);

// setInterval(() => {
//   const h1 = Document.createElement("h1");
//   hero.appendChild(h1);
//   h1
//   h1.textContent += text[index];
//   index++;
//   if (index > text.length) {
//     index = 0;
//     h1.textContent = "";
//   }
// }, 5000);
