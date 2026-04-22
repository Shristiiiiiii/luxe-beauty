function addToCart(name, price) {
  const cartList = document.getElementById('cart-list');
  const item = document.createElement('li');
  item.textContent = `${name} - ₹${price}`;
  cartList.appendChild(item);
  total += price;
  document.getElementById('total').textContent = `Total: ₹${total}`;
}

let total = 0;

function submitOrder(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const msg = `Thank you ${name}! Your order has been placed.`;
  document.getElementById('order-msg').textContent = msg;
}

function filterCakes(category) {
  const cakes = document.querySelectorAll('.cake');
  cakes.forEach(cake => {
    const cat = cake.getAttribute('data-category');
    if (category === 'all' || cat === category) {
      cake.style.display = 'block';
    } else {
      cake.style.display = 'none';
    }
  });
}
// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000); // Change every 3 seconds


let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000);