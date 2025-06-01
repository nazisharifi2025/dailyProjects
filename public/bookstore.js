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
h1.classList.add("text-5xl");
hero.append(h1);
setInterval(() => {
  h1.textContent += text[indexs];
  indexs++;
  if (indexs > text.length) {
    indexs = 0;
    h1.textContent = "";
  }
}, 200);

// counter
const counters = document.querySelectorAll(".text-3xl");
function countUp(el, target) {
  let current = 0;
  const incerment = target / 100;

  const updateCount = () => {
    current += incerment;
    if (current < target) {
      el.textContent = Math.ceil(current);
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target;
    }
  };
  updateCount();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute("data-target");
        countUp(el, target);
        observer.unobserve(el);
      }
    });
  },
  {
    threshold: 0.6,
  }
);
counters.forEach((counter) => observer.observe(counter));
