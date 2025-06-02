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

// class of cart
class Product {
  imgUrl;
  bookName;
  author;
  constructor(imgUrl, bookName, author) {
    this.imgUrl = imgUrl;
    this.bookName = bookName;
    this.author = author;
  }
}
//  book list array
const Productlist = {
  bookList: [
    new Product(
      "../public/img/7 habit.jpg",
      "7 habits of affective people",
      "stefan Covey"
    ),
    new Product("../public/img/5sec.jpg", "The 5 second rule", "Mell rabins"),
    new Product(
      "../public/img/sleep.jpg",
      "The heavy sleep",
      "Remond Chandler"
    ),
    new Product(
      "../public/img/salar.jpg",
      "Salar magas ha",
      "Willliam golding"
    ),
    new Product("../public/img/hope.jpg", "The big hopes", "Charels Dicines"),
    new Product("../public/img/hall.jpg", "The hall of wolf", "Hellari mintal"),
    new Product("../public/img/fr.jpg", "Frankishtain", "Marry shelley"),
    new Product("../public/img/bad.jpg", "Badbadakbaz", "Khallid Hussaini"),
    new Product(
      "../public/img/bland.jpg",
      "The Windful hills",
      "Emilly bronte"
    ),
  ],
//   showSingleBook() {
//     const divParent = document.getElementById("parent");
//     this.bookList.forEach((book) => {
//       const div = document.createElement("div");
//       div.classList.add("cart");
//       div.innerHTML = `<img src="${book.imgUrl}" class="h-full ">
//       <div class="div-text">
//       <h1>${book.bookName}</h1>
//       <h2>${book.author}</h2>
//       <button class="btn-add">Add to cart</button>
//       </div>
//       `;
//       divParent.append(div);
//     });
//   },
// };

// Productlist.showSingleBook();

// // animation of carts
// const oBserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate-fade-up-show");
//       } else {
//         entry.target.classList.remove("animate-fade-up-show");
//       }
//     });
//   },
//   {
//     threshold: 0.3,
//   }
// );

const item = document.querySelectorAll("scroll-animate");
for (let i = 0; i < item.length; i++) {
  oBserver.observe(item[i]);
}
