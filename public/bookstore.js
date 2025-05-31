const hero = document.getElementById("heroDiv");
const images = [
  "url(../imgse/slide1.jpg)",
  "url(../imgse/slide2.jpg)",
  "url(../imgse/slide3.webp)",
  "url(../imgse/slide4.jpg)",
  "url(../imgse/slide5.jpg)",
  "url(../imgse/slide7.jpg)",
];
let index = 0;
setInterval(() => {
  hero.style.backgroundImage = images[index];
  index = (index + 1) % images.length;
}, 2000);

// hero texts
let indexs = 0;
const text = "Don't Forget this : new book , new world!";
const h1 = document.createElement("h1");
h1.classList.add("text-3xl");
hero.append(h1);
setInterval(() => {
  h1.textContent += text[indexs];
  indexs++;
  if (indexs > text.length) {
    indexs = 0;
    h1.textContent = "";
  }
}, 1000);

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
