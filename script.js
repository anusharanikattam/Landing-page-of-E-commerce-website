/* ==========================================
   SKINBEE - PROFESSIONAL E-COMMERCE SCRIPT
========================================== */

/* ==========================
   PRODUCT DATABASE
========================== */
const products = [
{
id: 1,
name: "Vitamin C Serum",
category: "serum",
price: 999,
description: "Brightens skin and removes dark spots",
image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=600"
},
{
id: 2,
name: "Niacinamide Serum",
category: "serum",
price: 1099,
description: "Controls oil and minimizes pores",
image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600"
},
{
id: 3,
name: "Hyaluronic Serum",
category: "serum",
price: 1199,
description: "Deep hydration for plump skin",
image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=600"
},
{
id: 4,
name: "Retinol Serum",
category: "serum",
price: 1499,
description: "Anti-aging formula reduces wrinkles",
image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600"
},

{
id: 5,
name: "Daily Cleanser",
category: "cleanser",
price: 599,
description: "Removes dirt and impurities gently",
image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=600"
},
{
id: 6,
name: "Aloe Cleanser",
category: "cleanser",
price: 649,
description: "Soothes and refreshes skin",
image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600"
},
{
id: 7,
name: "Foaming Cleanser",
category: "cleanser",
price: 699,
description: "Deep pore cleansing formula",
image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=600"
},

{
id: 8,
name: "Hydrating Cream",
category: "moisturizer",
price: 799,
description: "Deep hydration for soft skin",
image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600"
},
{
id: 9,
name: "Night Repair Cream",
category: "moisturizer",
price: 1299,
description: "Repairs skin overnight",
image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600"
},
{
id: 10,
name: "Ceramide Cream",
category: "moisturizer",
price: 999,
description: "Strengthens skin barrier",
image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600"
},
{
id: 11,
name: "Body Butter Cream",
category: "moisturizer",
price: 899,
description: "Deep nourishment for dry skin",
image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600"
},

{
id: 12,
name: "SPF 50 Sunscreen",
category: "sunscreen",
price: 699,
description: "Protects from UVA & UVB rays",
image: "https://images.pexels.com/photos/7796684/pexels-photo-7796684.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
id: 13,
name: "Matte Sunscreen Gel",
category: "sunscreen",
price: 899,
description: "Oil-free matte finish protection",
image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=600"
},
{
id: 14,
name: "Sun Protection Cream",
category: "sunscreen",
price: 799,
description: "Daily sun protection cream",
image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=600"
},

{
id: 15,
name: "Glow Toner",
category: "toner",
price: 699,
description: "Refreshes and brightens skin",
image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600"
},
{
id: 16,
name: "Rose Toner",
category: "toner",
price: 749,
description: "Soothes and hydrates skin",
image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600"
},

{
id: 17,
name: "Clay Mask",
category: "mask",
price: 999,
description: "Removes oil and deep cleans pores",
image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600"
},

{
id: 18,
name: "Lip Balm",
category: "lip-care",
price: 299,
description: "Soft and hydrated lips",
image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600"
},
{
id: 19,
name: "Eye Cream",
category: "eye-care",
price: 1099,
description: "Reduces dark circles and puffiness",
image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600"
},
{
id: 20,
name: "Body Lotion",
category: "body-care",
price: 699,
description: "24-hour hydration for soft skin",
image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600"
}
];
/* ==========================
   DOM ELEMENTS
========================== */

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const cartSidebar = document.getElementById("cartSidebar");

const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const themeToggle = document.getElementById("themeToggle");

/* ==========================
   LOCAL STORAGE
========================== */

let cart = JSON.parse(localStorage.getItem("skinbeeCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("skinbeeWishlist")) || [];

/* ==========================
   RENDER PRODUCTS
========================== */

function renderProducts(items){

productGrid.innerHTML = "";

items.forEach(product=>{

productGrid.innerHTML += `
<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="price">
₹${product.price}
</div>

<div class="product-buttons">

<button class="add-cart"
onclick="addToCart(${product.id})">
Add Cart
</button>

<button class="view-btn"
onclick="openModal(${product.id})">
View
</button>

</div>

</div>

</div>
`;

});

}

/* ==========================
   SEARCH PRODUCTS
========================== */

searchInput.addEventListener("keyup", ()=>{

const value = searchInput.value.toLowerCase();

const filtered = products.filter(product =>
product.name.toLowerCase().includes(value)
);

renderProducts(filtered);

});

/* ==========================
   FILTER PRODUCTS
========================== */

filterButtons.forEach(btn=>{

btn.addEventListener("click", ()=>{

document.querySelector(".filter-btn.active")
.classList.remove("active");

btn.classList.add("active");

const category = btn.dataset.category;

if(category === "all"){
renderProducts(products);
return;
}

const filtered = products.filter(product =>
product.category === category
);

renderProducts(filtered);

});

});

/* ==========================
   ADD TO CART
========================== */

function addToCart(id){

const product = products.find(item => item.id === id);

cart.push(product);

localStorage.setItem(
"skinbeeCart",
JSON.stringify(cart)
);

updateCart();

showToast("Added to cart");

}

/* ==========================
   REMOVE CART ITEM
========================== */

function removeCart(index){

cart.splice(index,1);

localStorage.setItem(
"skinbeeCart",
JSON.stringify(cart)
);

updateCart();

}

/* ==========================
   UPDATE CART
========================== */

function updateCart(){

cartItemsContainer.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItemsContainer.innerHTML += `
<div style="
display:flex;
gap:10px;
padding:10px;
border-bottom:1px solid #eee;
">

<img src="${item.image}"
width="70"
height="70"
style="border-radius:10px;object-fit:cover;">

<div>

<h4>${item.name}</h4>

<p>₹${item.price}</p>

<button
onclick="removeCart(${index})"
style="
background:red;
color:white;
border:none;
padding:5px 10px;
cursor:pointer;
border-radius:5px;
">
Remove
</button>

</div>

</div>
`;

});

cartTotal.textContent = total;
cartCount.textContent = cart.length;

}

/* ==========================
   CART SIDEBAR
========================== */

cartBtn.addEventListener("click", ()=>{

cartSidebar.classList.add("active");

});

closeCart.addEventListener("click", ()=>{

cartSidebar.classList.remove("active");

});

/* ==========================
   PRODUCT MODAL
========================== */

function openModal(id){

const product = products.find(
item => item.id === id
);

modal.style.display = "block";

modalBody.innerHTML = `

<img src="${product.image}"
style="
width:100%;
height:350px;
object-fit:cover;
border-radius:15px;
">

<h2 style="margin-top:20px;">
${product.name}
</h2>

<p style="margin-top:10px;">
${product.description}
</p>

<h3 style="
margin-top:15px;
color:#5b4cf0;
">
₹${product.price}
</h3>

<button
onclick="addToCart(${product.id})"
style="
margin-top:15px;
padding:12px 20px;
border:none;
background:#5b4cf0;
color:white;
border-radius:8px;
cursor:pointer;
">
Add To Cart
</button>

`;

}

closeModal.addEventListener("click", ()=>{

modal.style.display = "none";

});

window.onclick = function(e){

if(e.target === modal){

modal.style.display = "none";

}

}

/* ==========================
   DARK MODE
========================== */

themeToggle.addEventListener("click", ()=>{

document.body.classList.toggle("dark-mode");

localStorage.setItem(
"theme",
document.body.classList.contains("dark-mode")
? "dark"
: "light"
);

});

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");

}

/* ==========================
   TOAST MESSAGE
========================== */

function showToast(message){

const toast = document.createElement("div");

toast.innerText = message;

toast.style.position = "fixed";
toast.style.bottom = "30px";
toast.style.right = "30px";
toast.style.background = "#5b4cf0";
toast.style.color = "white";
toast.style.padding = "15px 20px";
toast.style.borderRadius = "10px";
toast.style.zIndex = "9999";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},2000);

}

/* ==========================
   CHECKOUT BUTTON
========================== */

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("checkout-btn")){

if(cart.length===0){

alert("Cart is empty");
return;

}

alert(
`Order placed successfully!\nTotal: ₹${cartTotal.textContent}`
);

cart = [];

localStorage.setItem(
"skinbeeCart",
JSON.stringify(cart)
);

updateCart();

}

});

/* ==========================
   PRELOADER
========================== */

window.addEventListener("load",()=>{

const preloader =
document.getElementById("preloader");

setTimeout(()=>{

preloader.style.display="none";

},800);

});

/* ==========================
   INITIAL LOAD
========================== */

renderProducts(products);
updateCart();