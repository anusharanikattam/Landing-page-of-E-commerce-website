/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        if (preloader) {
            preloader.style.display = "none";
        }
    }, 1000);

    renderProducts();
    renderCart();
    renderWishlist();
    updateCounts();
});

/* ==========================
   PRODUCTS DATA
========================== */

const products = [
{
id:1,
name:"Running Shoes",
price:1999,
category:"fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
discount:"20%"
},
{
id:2,
name:"Smart Watch",
price:2999,
category:"electronics",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
discount:"15%"
},
{
id:3,
name:"T-Shirt",
price:799,
category:"fashion",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
discount:"10%"
},
{
id:4,
name:"Wireless Headphones",
price:2499,
category:"electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
discount:"25%"
},
{
id:5,
name:"Beauty Cream",
price:499,
category:"beauty",
image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
discount:"12%"
},
{
id:6,
name:"Sofa Cushion",
price:699,
category:"home",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
discount:"18%"
},
{
id:7,
name:"Laptop",
price:54999,
category:"electronics",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
discount:"30%"
},
{
id:8,
name:"Backpack",
price:1299,
category:"fashion",
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
discount:"20%"
},
{
id:9,
name:"Lipstick",
price:399,
category:"beauty",
image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
discount:"15%"
},
{
id:10,
name:"Coffee Mug",
price:299,
category:"home",
image:"https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=600&q=80",
discount:"10%"
},
{
id:11,
name:"Gaming Mouse",
price:999,
category:"electronics",
image:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
discount:"15%"
},
{
id:12,
name:"Denim Jacket",
price:1899,
category:"fashion",
image:"https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=600&q=80",
discount:"22%"
},
{
id:13,
name:"Face Wash",
price:299,
category:"beauty",
image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80",
discount:"10%"
},
{
id:14,
name:"Table Lamp",
price:899,
category:"home",
image:"https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=600&q=80",
discount:"18%"
},
{
id:15,
name:"Bluetooth Speaker",
price:1599,
category:"electronics",
image:"https://images.unsplash.com/photo-1512446816042-444d64126727?auto=format&fit=crop&w=600&q=80",
discount:"25%"
},
{
id:16,
name:"Sneakers",
price:1799,
category:"fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
discount:"20%"
},
{
id:17,
name:"Perfume",
price:999,
category:"beauty",
image:"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
discount:"12%"
},
{
id:18,
name:"Wall Clock",
price:799,
category:"home",
image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
discount:"15%"
},
{
id:19,
name:"Tablet",
price:22999,
category:"electronics",
image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
discount:"28%"
},
{
id:20,
name:"Handbag",
price:1499,
category:"fashion",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
discount:"18%"
}
];

/* ==========================
   STORAGE
========================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

/* ==========================
   PRODUCT RENDER
========================== */

const container = document.getElementById("productsContainer");

function renderProducts(data = products){

container.innerHTML = "";

data.forEach(product => {

container.innerHTML += `
<div class="product-card">

<span class="discount">
${product.discount} OFF
</span>

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<div class="rating">★★★★★</div>

<p class="price">₹${product.price}</p>

<div class="product-actions">

<button class="cart-btn"
onclick="addToCart(${product.id})">
Cart
</button>

<button class="wish-btn"
onclick="addToWishlist(${product.id})">
❤
</button>

<button onclick="openModal(${product.id})">
View
</button>

</div>

</div>

</div>
`;
});
}

/* ==========================
   CART
========================== */

function addToCart(id){

const product =
products.find(p => p.id === id);

const existing =
cart.find(item => item.id === id);

if(existing){
existing.qty++;
}else{
cart.push({...product, qty:1});
}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();
updateCounts();
showToast("Added To Cart");
}

function changeQty(id,type){

const item =
cart.find(i => i.id === id);

if(type === "plus"){
item.qty++;
}

if(type === "minus"){
item.qty--;

if(item.qty <= 0){
removeCart(id);
return;
}
}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();
updateCounts();
}

function removeCart(id){

cart = cart.filter(
item => item.id !== id
);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();
updateCounts();
showToast("Item Removed");
}

function renderCart(){

const cartItems =
document.getElementById("cartItems");

const total =
document.getElementById("cartTotal");

if(!cartItems) return;

cartItems.innerHTML = "";

if(cart.length === 0){

cartItems.innerHTML =
"<p>Your Cart Is Empty</p>";

total.textContent = 0;
return;
}

let sum = 0;

cart.forEach(item => {

sum += item.price * item.qty;

cartItems.innerHTML += `
<div style="margin-bottom:15px;border-bottom:1px solid #ddd;padding-bottom:10px">

<h4>${item.name}</h4>

<p>₹${item.price}</p>

<div style="display:flex;gap:10px;align-items:center">

<button onclick="changeQty(${item.id},'minus')">-</button>

<span>${item.qty}</span>

<button onclick="changeQty(${item.id},'plus')">+</button>

<button onclick="removeCart(${item.id})">
Remove
</button>

</div>

</div>
`;
});

total.textContent = sum;
}

/* ==========================
   WISHLIST
========================== */

function addToWishlist(id){

const item =
products.find(p => p.id === id);

if(
wishlist.some(
product => product.id === id
)
){
showToast("Already Added");
return;
}

wishlist.push(item);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

renderWishlist();
updateCounts();

showToast("Added To Wishlist");
}

function renderWishlist(){

const wishlistItems =
document.getElementById("wishlistItems");

wishlistItems.innerHTML = "";

wishlist.forEach(item => {

wishlistItems.innerHTML += `
<div style="margin-bottom:15px">

<h4>${item.name}</h4>

<p>₹${item.price}</p>

</div>
`;
});
}

/* ==========================
   COUNTS
========================== */

function updateCounts(){

document.getElementById(
"cartCount"
).textContent = cart.length;

document.getElementById(
"wishlistCount"
).textContent = wishlist.length;
}

/* ==========================
   MODAL
========================== */

const modal =
document.getElementById("productModal");

function openModal(id){

const item =
products.find(p => p.id === id);

document.getElementById(
"modalImage"
).src = item.image;

document.getElementById(
"modalTitle"
).textContent = item.name;

document.getElementById(
"modalPrice"
).textContent =
"₹" + item.price;

modal.style.display = "block";

document.getElementById(
"modalAddCart"
).onclick = () =>
addToCart(id);
}

document.getElementById(
"closeModal"
).onclick = () => {
modal.style.display = "none";
};

/* ==========================
   SEARCH
========================== */

document.getElementById(
"searchInput"
).addEventListener("keyup", e => {

const value =
e.target.value.toLowerCase();

const filtered =
products.filter(product =>
product.name.toLowerCase()
.includes(value)
);

renderProducts(filtered);

});

/* ==========================
   FILTERS
========================== */

document.querySelectorAll(
".filter-btn"
).forEach(btn => {

btn.addEventListener(
"click",
() => {

document
.querySelectorAll(".filter-btn")
.forEach(b =>
b.classList.remove("active")
);

btn.classList.add("active");

const category =
btn.dataset.category;

if(category === "all"){
renderProducts();
}else{

renderProducts(
products.filter(
product =>
product.category === category
)
);

}

});
});

/* ==========================
   HERO SLIDER
========================== */

const slides =
document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

slides[current]
.classList.remove("active");

current =
(current + 1) %
slides.length;

slides[current]
.classList.add("active");

}, 4000);

/* ==========================
   DARK MODE
========================== */

const themeBtn =
document.getElementById(
"themeToggle"
);

if(
localStorage.getItem("theme")
=== "dark"
){
document.body.classList.add(
"dark-mode"
);
}

themeBtn.addEventListener(
"click",
() => {

document.body.classList.toggle(
"dark-mode"
);

localStorage.setItem(
"theme",
document.body.classList.contains(
"dark-mode"
)
? "dark"
: "light"
);

});
/* ==========================
   MOBILE MENU
========================== */

document.getElementById(
"menuBtn"
).addEventListener("click", () => {

document.getElementById(
"navbar"
).classList.toggle("active");

});

/* ==========================
   SIDEBARS
========================== */

document.getElementById(
"cartBtn"
).addEventListener("click", () => {

document.getElementById(
"cartSidebar"
).classList.toggle("active");

document.getElementById(
"wishlistSidebar"
).classList.remove("active");

});

document.getElementById(
"wishlistBtn"
).addEventListener("click", () => {

document.getElementById(
"wishlistSidebar"
).classList.toggle("active");

document.getElementById(
"cartSidebar"
).classList.remove("active");

});

/* ==========================
   COUNTDOWN TIMER
========================== */

const endDate =
new Date().getTime() +
7 * 24 * 60 * 60 * 1000;

setInterval(() => {

const now =
new Date().getTime();

const distance =
endDate - now;

document.getElementById(
"days"
).textContent =
Math.floor(
distance /
(1000*60*60*24)
);

document.getElementById(
"hours"
).textContent =
Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);

document.getElementById(
"minutes"
).textContent =
Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);

document.getElementById(
"seconds"
).textContent =
Math.floor(
(distance %
(1000*60))
/
1000
);

},1000);

/* ==========================
   CHECKOUT
========================== */

const checkoutModal =
document.getElementById(
"checkoutModal"
);

document.getElementById(
"checkoutBtn"
).onclick = () => {

checkoutModal.style.display =
"block";
};

document.getElementById(
"closeCheckout"
).onclick = () => {

checkoutModal.style.display =
"none";
};

document.getElementById(
"placeOrderBtn"
).onclick = () => {

cart = [];

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();
updateCounts();

checkoutModal.style.display =
"none";

showToast(
"Order Placed Successfully"
);
};

/* ==========================
   TOAST
========================== */

function showToast(message){

const toast =
document.getElementById("toast");

toast.textContent = message;

toast.classList.add("show");

setTimeout(() => {
toast.classList.remove("show");
},2500);

}

/* ==========================
   NEWSLETTER
========================== */

document.getElementById(
"newsletterForm"
).addEventListener(
"submit",
e => {

e.preventDefault();

showToast(
"Newsletter Subscribed"
);

e.target.reset();

});

/* ==========================
   CONTACT FORM
========================== */

document.getElementById(
"contactForm"
).addEventListener(
"submit",
e => {

e.preventDefault();

showToast(
"Message Sent Successfully"
);

e.target.reset();

});

/* ==========================
   SCROLL TOP
========================== */

const scrollBtn =
document.getElementById(
"scrollTop"
);

window.addEventListener(
"scroll",
() => {

if(window.scrollY > 300){
scrollBtn.style.display =
"block";
}else{
scrollBtn.style.display =
"none";
}

});

scrollBtn.addEventListener(
"click",
() => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});