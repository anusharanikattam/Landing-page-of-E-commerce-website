
/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.display = "none";
    }

    renderProducts();
    updateCounts();
});

/* ==========================
   DATA
========================== */

const products = [
{
id:1,
name:"Running Shoes",
price:1999,
category:"fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
id:2,
name:"Smart Watch",
price:2999,
category:"electronics",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},
{
id:3,
name:"T-Shirt",
price:799,
category:"fashion",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
},
{
id:4,
name:"Wireless Headphones",
price:2499,
category:"electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
id:5,
name:"Beauty Cream",
price:499,
category:"beauty",
image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
},
{
id:6,
name:"Sofa Cushion",
price:699,
category:"home",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
},
{
id:7,
name:"Laptop",
price:54999,
category:"electronics",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},
{
id:8,
name:"Backpack",
price:1299,
category:"fashion",
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
},
{
id:9,
name:"Lipstick",
price:399,
category:"beauty",
image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa"
},
{
id:10,
name:"Coffee Mug",
price:299,
category:"home",
image:
<img src="https://images.unsplash.com/photo-1514228742587-6b1558fcf93a" alt="Coffee Mug"></img>
},
{
id:11,
name:"Gaming Mouse",
price:999,
category:"electronics",
image:"https://images.unsplash.com/photo-1527814050087-3793815479db"
},
{
id:12,
name:"Denim Jacket",
price:1899,
category:"fashion",
image:"https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504"
},
{
id:13,
name:"Face Wash",
price:299,
category:"beauty",
image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883"
},
{
id:14,
name:"Table Lamp",
price:899,
category:"home",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
},
{
id:15,
name:"Bluetooth Speaker",
price:1599,
category:"electronics",
image:"https://images.unsplash.com/photo-1512446816042-444d64126727"
},
{
id:16,
name:"Sneakers",
price:1799,
category:"fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
id:17,
name:"Perfume",
price:999,
category:"beauty",
image:"https://images.unsplash.com/photo-1541643600914-78b084683601"
},
{
id:18,
name:"Wall Clock",
price:799,
category:"home",
image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"
},
{
id:19,
name:"Tablet",
price:22999,
category:"electronics",
image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7"
},
{
id:20,
name:"Handbag",
price:1499,
category:"fashion",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},
{
id:21,
name:"Hair Serum",
price:599,
category:"beauty",
image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
},
{
id:22,
name:"Plant Pot",
price:499,
category:"home",
image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411"
},
{
id:23,
name:"Keyboard",
price:1299,
category:"electronics",
image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
},
{
id:24,
name:"Jeans",
price:1599,
category:"fashion",
image:"https://images.unsplash.com/photo-1542272604-787c3835535d"
},
{
id:25,
name:"Skin Care Kit",
price:1299,
category:"beauty",
image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
}
];

/* ==========================
   STORAGE
========================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

/* ==========================
   RENDER PRODUCTS
========================== */

const container = document.getElementById("productsContainer");

function renderProducts(data = products){

    container.innerHTML = "";

    data.forEach(product => {

        container.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

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

    const item = products.find(p => p.id === id);

    cart.push(item);

    localStorage.setItem("cart",
    JSON.stringify(cart));

    updateCounts();
    renderCart();

    showToast("Added to Cart");
}

function renderCart(){

    const cartItems =
    document.getElementById("cartItems");

    const total =
    document.getElementById("cartTotal");

    if(!cartItems) return;

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach(item => {

        sum += item.price;

        cartItems.innerHTML += `
        <div style="margin-bottom:15px">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
        </div>
        `;
    });

    total.textContent = sum;
}

/* ==========================
   WISHLIST
========================== */

function addToWishlist(id){

    const item = products.find(p => p.id === id);

    wishlist.push(item);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateCounts();
    renderWishlist();

    showToast("Added to Wishlist");
}

function renderWishlist(){

    const wishlistItems =
    document.getElementById("wishlistItems");

    if(!wishlistItems) return;

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
    "cartCount").textContent = cart.length;

    document.getElementById(
    "wishlistCount").textContent =
    wishlist.length;
}

/* ==========================
   SIDEBARS
========================== */

const cartBtn =
document.getElementById("cartBtn");

const wishlistBtn =
document.getElementById("wishlistBtn");

const cartSidebar =
document.getElementById("cartSidebar");

const wishlistSidebar =
document.getElementById("wishlistSidebar");

cartBtn.addEventListener("click", () => {

    cartSidebar.classList.toggle("active");
    wishlistSidebar.classList.remove("active");

    renderCart();
});

wishlistBtn.addEventListener("click", () => {

    wishlistSidebar.classList.toggle("active");
    cartSidebar.classList.remove("active");

    renderWishlist();
});

/* ==========================
   MODAL
========================== */

const modal =
document.getElementById("productModal");

function openModal(id){

    const item =
    products.find(p => p.id === id);

    document.getElementById(
    "modalImage").src = item.image;

    document.getElementById(
    "modalTitle").textContent =
    item.name;

    document.getElementById(
    "modalPrice").textContent =
    "₹" + item.price;

    modal.style.display = "block";

    document.getElementById(
    "modalAddCart").onclick =
    () => addToCart(id);
}

document.getElementById(
"closeModal").onclick = () => {

    modal.style.display = "none";
};

window.onclick = e => {

    if(e.target === modal){

        modal.style.display = "none";
    }
};

/* ==========================
   SEARCH
========================== */

document.getElementById(
"searchInput").addEventListener(
"keyup",
e => {

const value =
e.target.value.toLowerCase();

const filtered =
products.filter(product =>
product.name
.toLowerCase()
.includes(value));

renderProducts(filtered);

});

/* ==========================
   FILTERS
========================== */

document.querySelectorAll(
".filter-btn"
).forEach(btn => {

btn.addEventListener("click", () => {

document.querySelectorAll(
".filter-btn"
).forEach(b =>
b.classList.remove("active")
);

btn.classList.add("active");

const category =
btn.dataset.category;

if(category === "all"){

renderProducts(products);

}else{

const filtered =
products.filter(product =>
product.category === category
);

renderProducts(filtered);

}

});

});

/* ==========================
   HERO SLIDER
========================== */

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

slides[currentSlide]
.classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;
}

slides[currentSlide]
.classList.add("active");

}, 4000);

/* ==========================
   DARK MODE
========================== */

const themeToggle =
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

themeToggle.addEventListener(
"click",
() => {

document.body.classList.toggle(
"dark-mode"
);

if(
document.body.classList.contains(
"dark-mode"
)
){

localStorage.setItem(
"theme",
"dark"
);

}else{

localStorage.setItem(
"theme",
"light"
);

}

});

/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
document.getElementById("menuBtn");

const navbar =
document.getElementById("navbar");

menuBtn.addEventListener(
"click",
() => {

navbar.classList.toggle(
"active"
);

});

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

}, 2500);

}

/* ==========================
   NEWSLETTER
========================== */

const newsletter =
document.getElementById(
"newsletterForm"
);

newsletter.addEventListener(
"submit",
e => {

e.preventDefault();

showToast(
"Newsletter Subscribed"
);

newsletter.reset();

});

/* ==========================
   CONTACT FORM
========================== */

const contactForm =
document.getElementById(
"contactForm"
);

contactForm.addEventListener(
"submit",
e => {

e.preventDefault();

showToast(
"Message Sent Successfully"
);

contactForm.reset();

});

/* ==========================
   SCROLL TOP
========================== */

const scrollTopBtn =
document.getElementById(
"scrollTop"
);

window.addEventListener(
"scroll",
() => {

if(window.scrollY > 300){

scrollTopBtn.style.display =
"block";

}else{

scrollTopBtn.style.display =
"none";
}

});

scrollTopBtn.addEventListener(
"click",
() => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

/* ==========================
   INITIAL LOAD
========================== */

renderCart();
renderWishlist();
updateCounts();