// ================= MENU ITEMS =================
const items = [
  { name: "Chicken Biryani", cat: "biryani", price: 200, img: "./b1.jpeg" },
  { name: "Mutton Biryani", cat: "biryani", price: 300, img: "./b2.jpeg" },
  { name: "Veg Biryani", cat: "biryani", price: 180, img: "./b4.jpeg" },
  { name: "Egg Biryani", cat: "biryani", price: 170, img: "./b3.jpeg" },

  { name: "Chicken Lollypop", cat: "starters", price: 180, img: "./s2.jpeg" },
  { name: "Paneer Tikka", cat: "starters", price: 160, img: "./s1.jpeg" },
  { name: "Mushroom 65", cat: "starters", price: 180, img: "./s3.jpeg" },
  { name: "Crispy Chilli Chicken", cat: "starters", price: 160, img: "./sp1.jpeg" },

  { name: "Gulab Jamun Rabri", cat: "desserts", price: 120, img: "./d1.jpeg" },
  { name: "Apricot Delight", cat: "desserts", price: 150, img: "./d2.jpeg" },
  { name: "Mango Masti", cat: "desserts", price: 120, img: "./sp3.jpeg" },
  { name: "Rasmalai", cat: "desserts", price: 150, img: "./d3.jpeg" },

  { name: "Blue Lagoon", cat: "mocktails", price: 120, img: "./m1.jpeg" },
  { name: "Tequila Sunrise", cat: "mocktails", price: 150, img: "./spc4.jpeg" },
  { name: "Watermelon Mojito", cat: "mocktails", price: 120, img: "./m2.jpeg" },
  { name: "Lime Lagoon", cat: "mocktails", price: 150, img: "./m3.jpeg" }
];

// ================= CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let qty = {};

// ================= SYNC =================
function syncQty() {
  items.forEach(item => {
    let found = cart.find(c => c.name === item.name);
    qty[item.name] = found ? found.qty : 1;
  });
}

// ================= SHOW MENU =================
function filterItems(category) {
  syncQty();

  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  const filtered = category === "all"
    ? items
    : items.filter(i => i.cat === category);

  filtered.forEach(item => {
    menu.innerHTML += `
      <div class="menu-card">
        <img src="${item.img}" width="150">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>

        <div class="qty">
          <button onclick="dec('${item.name}')">-</button>
          <span id="q${item.name}">${qty[item.name]}</span>
          <button onclick="inc('${item.name}')">+</button>
        </div>
      <button onclick="add('${item.name}')" class="addcart">
  Add to Cart
</button>
      </div>
    `;
  });
}

// ================= + =================
function inc(name) {
  qty[name]++;
  document.getElementById("q" + name).innerText = qty[name];
}

// ================= - =================
function dec(name) {
  if (qty[name] > 1) {
    qty[name]--;
    document.getElementById("q" + name).innerText = qty[name];
  }
}

// ================= ADD =================
function add(name) {
  let item = items.find(i => i.name === name);
  let found = cart.find(c => c.name === name);

  if (found) {
    found.qty = qty[name];
  } else {
    cart.push({
      name: item.name,
      price: item.price,
      qty: qty[name]
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCount();

  alert(name + " added to cart ✅");
}

// ================= COUNT =================
function updateCount() {
let total= cart.reduce((sum,i) =>sum + i.qty,0);
 
  document.getElementById("count").innerText = total;
}

// ================= NAVIGATION =================
function goToCart() {
  window.location.href = "cart.html";
}

// ================= SCROLL =================
function scrollMenu() {
  document.getElementById("menuSection").scrollIntoView({
    behavior: "smooth"
  });
}

// ================= LOAD =================
filterItems("all");
updateCount();


