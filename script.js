// ==========================================
// 1. ESTADO GLOBAL Y MENÚ POR DEFECTO COMPLETO
// ==========================================

const DEFAULT_MENU = {
  crepasWaffles: [
    {
      id: "cw1",
      name: "Crepa / Waffle Dulce (4 Ingredientes)",
      price: 70,
      img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300",
      customizable: true,
      options: [
        "Base Nutella", "Base Queso Philadelphia", "Base Cajeta", "Base Mermelada Fresa", "Base Mermelada Zarzamora",
        "Fruta Fresa", "Fruta Plátano", "Fruta Durazno",
        "Topping Hersheys", "Topping Lechera", "Topping Bombones", "Topping Oreo", "Topping Nuez", "Topping Choco Krispis", "Topping Froot Loops", "Topping Chispas Chocolate"
      ]
    },
    {
      id: "cw2",
      name: "Crepa Salada Pepperoni",
      price: 80,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300",
      customizable: true,
      options: ["Salsa Valentina", "Catsup", "Aderezo Chipotle"]
    },
    {
      id: "cw3",
      name: "Crepa Salada Hawaiana",
      price: 80,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300",
      customizable: true,
      options: ["Salsa Valentina", "Catsup", "Aderezo Chipotle"]
    },
    { id: "ext1", name: "Extra: Crema Batida", price: 15, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "ext2", name: "Extra: Helado", price: 15, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "ext3", name: "Extra: Conejito Turín", price: 20, img: "https://images.unsplash.com/photo-1582176647440-3b137b3106e4?w=300" },
    { id: "ext4", name: "Extra: Kinder Delice", price: 25, img: "https://images.unsplash.com/photo-1582176647440-3b137b3106e4?w=300" },
    { id: "ext5", name: "Extra: Kinder Sorpresa", price: 30, img: "https://images.unsplash.com/photo-1582176647440-3b137b3106e4?w=300" },
    { id: "ext6", name: "Extra: Kinder Bueno", price: 30, img: "https://images.unsplash.com/photo-1582176647440-3b137b3106e4?w=300" }
  ],
  frappes: [
    { id: "fr1", name: "Frappé Frappuccino", price: 70, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr2", name: "Frappé Moka", price: 70, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr3", name: "Frappé Oreo", price: 70, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr4", name: "Frappé Mazapán", price: 70, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr5", name: "Frappé Fresas con Crema", price: 70, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr6", name: "Frappé Gansito", price: 80, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr7", name: "Frappé Nutella", price: 80, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr8", name: "Frappé Rompope", price: 80, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr9", name: "Frappé Cajeta", price: 80, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { id: "fr10", name: "Frappé Coco", price: 80, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" }
  ],
  fresasCrema: [
    {
      id: "fc1",
      name: "Fresas c/ Crema Chica (3 Toppings)",
      price: 70,
      img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=300",
      customizable: true,
      options: ["Kranky", "Chocoreta", "Lunetas", "Galleta Oreo", "Galleta Triki Trakes", "Freskas", "Bubulubu", "Chispas de chocolate", "Bombones", "Nuez", "Almendra", "Granola"]
    },
    {
      id: "fc2",
      name: "Fresas c/ Crema Grande (4 Toppings)",
      price: 90,
      img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=300",
      customizable: true,
      options: ["Kranky", "Chocoreta", "Lunetas", "Galleta Oreo", "Galleta Triki Trakes", "Freskas", "Bubulubu", "Chispas de chocolate", "Bombones", "Nuez", "Almendra", "Granola"]
    }
  ],
  otros: [
    { id: "gb1", name: "Gomiboing Mango", price: 50, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },
    { id: "gb2", name: "Gomiboing Manzana", price: 50, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },
    { id: "gb3", name: "Gomiboing Fresa", price: 50, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },
    { id: "gb4", name: "Gomiboing Guayaba", price: 50, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },
    { id: "gb5", name: "Gomiboing Uva", price: 50, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },
    { id: "mar1", name: "Maruchan Piquín", price: 30, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: "mar2", name: "Maruchan Habanero", price: 30, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: "cham1", name: "Chamoyada Mango", price: 70, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300" },
    { id: "caf1", name: "Té", price: 30, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300" },
    { id: "caf2", name: "Café Americano", price: 40, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300" },
    { id: "caf3", name: "Capuchino Clásico", price: 45, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300" },
    { id: "caf4", name: "Chocolate Caliente", price: 50, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300" },
    { 
      id: "caf5", 
      name: "Capuchino de Sabor", 
      price: 55, 
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300",
      customizable: true,
      options: ["Sabor Cajeta", "Sabor Moka", "Sabor Caramelo", "Sabor Rompope"]
    },
    { id: "caf6", name: "Iced Coffee", price: 60, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300" }
  ]
};

// Carga Inicial del Menú y del Estado
let MENU = JSON.parse(localStorage.getItem("pos_menu_v2")) || DEFAULT_MENU;
let currentUser = JSON.parse(localStorage.getItem("pos_user")) || null;
let cart = [];
let pendingOrders = JSON.parse(localStorage.getItem("pos_orders")) || [];
let salesHistory = JSON.parse(localStorage.getItem("pos_sales")) || [];
let initialBoxAmount = parseFloat(localStorage.getItem("pos_initial_box")) || 0;
let currentPayMethod = "efectivo";
let pendingCustomItem = null;

// ==========================================
// 2. INICIALIZACIÓN Y AUTENTICACIÓN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  if (currentUser) {
    showMainApp();
  } else {
    document.getElementById("welcome-screen").style.display = "flex";
  }
});

function showAuthScreen(mode) {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("auth-screen").style.display = "flex";
  toggleAuthMode(mode);
}

function toggleAuthMode(mode) {
  if (mode === "register") {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "block";
  } else {
    document.getElementById("login-box").style.display = "block";
    document.getElementById("register-box").style.display = "none";
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const role = document.getElementById("login-role").value;
  
  currentUser = { email, role };
  localStorage.setItem("pos_user", JSON.stringify(currentUser));
  
  document.getElementById("auth-screen").style.display = "none";
  checkInitialBox();
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const role = document.getElementById("reg-role").value;
  
  currentUser = { name, email, role };
  localStorage.setItem("pos_user", JSON.stringify(currentUser));
  
  document.getElementById("auth-screen").style.display = "none";
  checkInitialBox();
}

function checkInitialBox() {
  if (localStorage.getItem("pos_box_open") === "true") {
    showMainApp();
  } else {
    document.getElementById("open-box-modal").style.display = "flex";
  }
}

function confirmOpenBox() {
  const amount = parseFloat(document.getElementById("initial-box-amount").value) || 0;
  initialBoxAmount = amount;
  localStorage.setItem("pos_initial_box", amount);
  localStorage.setItem("pos_box_open", "true");
  
  document.getElementById("open-box-modal").style.display = "none";
  showMainApp();
}

function showMainApp() {
  document.getElementById("app-main").style.display = "block";
  
  // Mostrar botón de administración solo a dueños
  if (currentUser && currentUser.role === "owner") {
    document.getElementById("btn-view-admin").style.display = "inline-block";
  } else {
    document.getElementById("btn-view-admin").style.display = "none";
  }

  renderMenu();
  renderComandas();
  renderReports();
  renderAdminProducts();
}

function logout() {
  localStorage.removeItem("pos_user");
  location.reload();
}

// ==========================================
// 3. VISTAS Y NAVEGACIÓN
// ==========================================

function switchView(viewName) {
  const views = ["menu", "comandas", "reports", "admin"];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    const btn = document.getElementById(`btn-view-${v}`);
    if (el) el.style.display = (v === viewName) ? "block" : "none";
    if (btn) {
      if (v === viewName) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });

  if (viewName === "comandas") renderComandas();
  if (viewName === "reports") renderReports();
  if (viewName === "admin") renderAdminProducts();
}

function filterCategory(cat, btn) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const blocks = ["crepas-waffles", "frappes", "fresas-crema", "otros"];
  blocks.forEach(b => {
    const el = document.getElementById(`sec-${b}`);
    if (cat === "todos") {
      el.style.display = "block";
    } else {
      el.style.display = (b === cat) ? "block" : "none";
    }
  });
}
// ==========================================
// 4. RENDERIZADO DEL MENÚ Y PERSONALIZACIÓN
// ==========================================

function renderMenu() {
  const categories = {
    "crepas-waffles": MENU.crepasWaffles || [],
    "frappes": MENU.frappes || [],
    "fresas-crema": MENU.fresasCrema || [],
    "otros": MENU.otros || []
  };

  for (const [key, products] of Object.entries(categories)) {
    const container = document.getElementById(key);
    if (!container) continue;
    container.innerHTML = "";

    products.forEach(prod => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.onclick = () => handleProductClick(prod);

      card.innerHTML = `
        <img src="${prod.img || 'https://via.placeholder.com/150'}" alt="${prod.name}">
        <div class="product-info">
          <h4>${prod.name}</h4>
          <span class="price">$${parseFloat(prod.price).toFixed(2)}</span>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

function handleProductClick(product) {
  if (product.customizable && product.options) {
    openCustomModal(product);
  } else {
    addToCart(product);
  }
}

function openCustomModal(product) {
  pendingCustomItem = JSON.parse(JSON.stringify(product));
  document.getElementById("custom-title").innerText = product.name;
  document.getElementById("custom-sub").innerText = "Selecciona tus opciones / ingredientes:";

  const container = document.getElementById("custom-options-container");
  container.innerHTML = "";

  product.options.forEach((opt, idx) => {
    const label = document.createElement("label");
    label.style.display = "block";
    label.style.padding = "6px 0";
    label.style.fontSize = "0.9rem";
    
    label.innerHTML = `
      <input type="checkbox" value="${opt}" id="opt-${idx}"> ${opt}
    `;
    container.appendChild(label);
  });

  document.getElementById("custom-modal").style.display = "flex";
}

function closeCustomModal() {
  pendingCustomItem = null;
  document.getElementById("custom-modal").style.display = "none";
}

function confirmCustomItem() {
  if (!pendingCustomItem) return;

  const selectedOpts = [];
  const container = document.getElementById("custom-options-container");
  const checkboxes = container.querySelectorAll("input[type='checkbox']:checked");
  
  checkboxes.forEach(cb => selectedOpts.push(cb.value));

  let finalName = pendingCustomItem.name;
  if (selectedOpts.length > 0) {
    finalName += ` (${selectedOpts.join(", ")})`;
  }

  const itemToAdd = {
    ...pendingCustomItem,
    name: finalName,
    uniqueId: Date.now()
  };

  addToCart(itemToAdd);
  closeCustomModal();
}

// ==========================================
// 5. GESTIÓN DEL CARRITO Y PAGOS
// ==========================================

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id && i.name === product.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  document.getElementById("cart-count").innerText = totalCount;
  document.getElementById("cart-total").innerText = `$${totalPrice.toFixed(2)}`;
  document.getElementById("modal-cart-total").innerText = `$${totalPrice.toFixed(2)}`;

  const cartList = document.getElementById("cart-items-list");
  if (!cartList) return;
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item-row";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.padding = "8px 0";
    div.style.borderBottom = "1px solid #eee";

    div.innerHTML = `
      <div style="flex:1;">
        <strong style="font-size:0.85rem;">${item.name}</strong><br>
        <small>$${parseFloat(item.price).toFixed(2)} x ${item.qty} = $${(item.price * item.qty).toFixed(2)}</small>
      </div>
      <div style="display:flex; gap:5px; align-items:center;">
        <button onclick="changeQty(${index}, -1)" class="btn-secondary" style="padding:2px 8px;">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${index}, 1)" class="btn-secondary" style="padding:2px 8px;">+</button>
      </div>
    `;
    cartList.appendChild(div);
  });
}

function changeQty(index, change) {
  if (cart[index]) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
  }
  updateCartUI();
}

function toggleCartModal() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}

function openPayModal() {
  if (cart.length === 0) {
    alert("El carrito está vacío");
    return;
  }
  document.getElementById("cart-modal").style.display = "none";
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById("pay-total-display").value = `$${total.toFixed(2)}`;
  document.getElementById("pay-amount").value = total;
  
  setPaymentMethod("efectivo");
  calculateChange();
  document.getElementById("pay-modal").style.display = "flex";
}

function closePayModal() {
  document.getElementById("pay-modal").style.display = "none";
}

function setPaymentMethod(method) {
  currentPayMethod = method;
  document.getElementById("btn-pay-cash").classList.toggle("active", method === "efectivo");
  document.getElementById("btn-pay-card").classList.toggle("active", method === "tarjeta");

  const cashCalc = document.getElementById("cash-calculator");
  if (method === "tarjeta") {
    cashCalc.style.display = "none";
  } else {
    cashCalc.style.display = "block";
  }
}

function calculateChange() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const payVal = parseFloat(document.getElementById("pay-amount").value) || 0;
  const change = payVal - total;

  document.getElementById("pay-change").value = change >= 0 ? `$${change.toFixed(2)}` : "$0.00";
}

function processPayment() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const payVal = parseFloat(document.getElementById("pay-amount").value) || 0;

  if (currentPayMethod === "efectivo" && payVal < total) {
    alert("El monto pagado es menor al total de la venta.");
    return;
  }

  const saleData = {
    id: "TICK-" + Date.now().toString().slice(-6),
    date: new Date().toLocaleString(),
    items: [...cart],
    total: total,
    method: currentPayMethod,
    paidWith: currentPayMethod === "efectivo" ? payVal : total,
    change: currentPayMethod === "efectivo" ? (payVal - total) : 0
  };

  salesHistory.push(saleData);
  localStorage.setItem("pos_sales", JSON.stringify(salesHistory));

  pendingOrders.push({ ...saleData, status: "pendiente" });
  localStorage.setItem("pos_orders", JSON.stringify(pendingOrders));

  closePayModal();
  showReceiptModal(saleData);
}

// ==========================================
// 6. TICKET, PDF Y EXTERNOS
// ==========================================

let lastSale = null;

function showReceiptModal(sale) {
  lastSale = sale;
  document.getElementById("ticket-date").innerText = sale.date;
  document.getElementById("ticket-method").innerText = `PAGO: ${sale.method.toUpperCase()}`;

  const itemsDiv = document.getElementById("ticket-items");
  itemsDiv.innerHTML = "";

  sale.items.forEach(i => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.fontSize = "0.8rem";
    row.style.marginBottom = "4px";
    row.innerHTML = `
      <span>${i.qty}x ${i.name}</span>
      <span>$${(i.price * i.qty).toFixed(2)}</span>
    `;
    itemsDiv.appendChild(row);
  });

  const totalsDiv = document.getElementById("ticket-totals");
  totalsDiv.innerHTML = `
    <p style="margin:2px 0;"><strong>TOTAL: $${sale.total.toFixed(2)}</strong></p>
    ${sale.method === "efectivo" ? `
      <p style="margin:2px 0; font-size:0.75rem;">Recibido: $${sale.paidWith.toFixed(2)}</p>
      <p style="margin:2px 0; font-size:0.75rem;">Cambio: $${sale.change.toFixed(2)}</p>
    ` : ""}
  `;

  document.getElementById("receipt-modal").style.display = "flex";
}

function finishSale() {
  cart = [];
  updateCartUI();
  document.getElementById("receipt-modal").style.display = "none";
  switchView("menu");
}

function imprimirRawBT() {
  if (!lastSale) return;
  let text = `🍓 CREPAS MIIN 🍓\n`;
  text += `Fecha: ${lastSale.date}\n`;
  text += `Método: ${lastSale.method.toUpperCase()}\n`;
  text += `--------------------------------\n`;
  lastSale.items.forEach(i => {
    text += `${i.qty}x ${i.name} = $${(i.price * i.qty).toFixed(2)}\n`;
  });
  text += `--------------------------------\n`;
  text += `TOTAL: $${lastSale.total.toFixed(2)}\n\n`;
  text += `¡Gracias por tu compra!\n\n\n`;

  const intentUrl = "intent:#Intent;scheme=rawbt;package=ru.is целесообразно.rawbt;S.content=" + encodeURIComponent(text) + ";end";
  window.location.href = intentUrl;
}

function descargarPDF() {
  const element = document.getElementById("printable-ticket");
  const opt = {
    margin:       0.2,
    filename:     `ticket-${lastSale ? lastSale.id : 'sale'}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

function compartirPDFWhatsApp() {
  if (!lastSale) return;
  let text = `*🍓 TICKET DE COMPRA - CREPAS MIIN 🍓*\n`;
  text += `📅 Fecha: ${lastSale.date}\n`;
  text += `💳 Pago: ${lastSale.method.toUpperCase()}\n`;
  text += `----------------------------------\n`;
  lastSale.items.forEach(i => {
    text += `• ${i.qty}x ${i.name} - *$${(i.price * i.qty).toFixed(2)}*\n`;
  });
  text += `----------------------------------\n`;
  text += `*TOTAL A PAGAR: $${lastSale.total.toFixed(2)}*\n\n`;
  text += `¡Gracias por tu preferencia! ✨`;

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// 7. COMANDAS Y CAJA (REPORTES)
// ==========================================

function renderComandas() {
  const container = document.getElementById("lista-comandas");
  if (!container) return;
  container.innerHTML = "";

  if (pendingOrders.length === 0) {
    container.innerHTML = "<p style='color:#666;'>No hay pedidos pendientes en cocina.</p>";
    return;
  }

  pendingOrders.forEach((ord, index) => {
    const card = document.createElement("div");
    card.className = "comanda-card";
    card.style.background = "white";
    card.style.padding = "12px";
    card.style.borderRadius = "8px";
    card.style.marginBottom = "10px";
    card.style.borderLeft = "5px solid var(--primary)";

    let itemsHtml = "";
    ord.items.forEach(i => {
      itemsHtml += `<li><strong>${i.qty}x</strong> ${i.name}</li>`;
    });

    card.innerHTML = `
      <div style="display:flex; justify-size:space-between; align-items:center;">
        <h4 style="margin:0;">Orden #${ord.id}</h4>
        <small>${ord.date.split(" ")[1] || ""}</small>
      </div>
      <ul style="margin:8px 0; padding-left:20px; font-size:0.9rem;">${itemsHtml}</ul>
      <button onclick="completeOrder(${index})" class="btn-success" style="width:100%; padding:6px;">
        ✅ Entregar Order
      </button>
    `;
    container.appendChild(card);
  });
}

function completeOrder(index) {
  pendingOrders.splice(index, 1);
  localStorage.setItem("pos_orders", JSON.stringify(pendingOrders));
  renderComandas();
}

function renderReports() {
  const cashTotal = salesHistory
    .filter(s => s.method === "efectivo")
    .reduce((sum, s) => sum + s.total, 0);

  const cardTotal = salesHistory
    .filter(s => s.method === "tarjeta")
    .reduce((sum, s) => sum + s.total, 0);

  const grandTotal = initialBoxAmount + cashTotal + cardTotal;

  document.getElementById("stat-initial-box").innerText = `$${initialBoxAmount.toFixed(2)}`;
  document.getElementById("stat-cash-total").innerText = `$${cashTotal.toFixed(2)}`;
  document.getElementById("stat-card-total").innerText = `$${cardTotal.toFixed(2)}`;
  document.getElementById("stat-grand-total").innerText = `$${grandTotal.toFixed(2)}`;
}

function closeCashBox() {
  if (confirm("¿Estás seguro de realizar el cierre de caja? Esto reiniciará el historial del día.")) {
    salesHistory = [];
    initialBoxAmount = 0;
    localStorage.removeItem("pos_sales");
    localStorage.removeItem("pos_initial_box");
    localStorage.setItem("pos_box_open", "false");
    alert("Caja cerrada exitosamente.");
    location.reload();
  }
}

// ==========================================
// 8. MÓDULO DE ADMINISTRACIÓN (CRUD Y BASE64)
// ==========================================

let adminBase64Image = "";

function convertImageToBase64() {
  const fileInput = document.getElementById("prod-file");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      adminBase64Image = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function saveAdminProduct() {
  const editId = document.getElementById("prod-edit-id").value;
  const category = document.getElementById("prod-category").value;
  const name = document.getElementById("prod-name").value.trim();
  const price = parseFloat(document.getElementById("prod-price").value);
  const imgUrl = document.getElementById("prod-img").value.trim();

  if (!name || isNaN(price)) {
    alert("Por favor completa el nombre y un precio válido.");
    return;
  }

  let finalImg = adminBase64Image || imgUrl || "https://via.placeholder.com/150";

  if (!MENU[category]) {
    MENU[category] = [];
  }

  if (editId) {
    // Modo Edición
    for (const catKey in MENU) {
      const idx = MENU[catKey].findIndex(p => p.id === editId);
      if (idx !== -1) {
        if (!adminBase64Image && !imgUrl) {
          finalImg = MENU[catKey][idx].img;
        }
        MENU[catKey].splice(idx, 1);
        break;
      }
    }
    MENU[category].push({ id: editId, name, price, img: finalImg });
    alert("Producto actualizado correctamente.");
  } else {
    // Modo Nuevo Producto
    const newProd = {
      id: "prod-" + Date.now(),
      name,
      price,
      img: finalImg
    };
    MENU[category].push(newProd);
    alert("Producto guardado exitosamente.");
  }

  localStorage.setItem("pos_menu_v2", JSON.stringify(MENU));
  resetAdminForm();
  renderAdminProducts();
  renderMenu();
}

function renderAdminProducts() {
  const container = document.getElementById("admin-products-list");
  if (!container) return;
  container.innerHTML = "";

  for (const [catKey, products] of Object.entries(MENU)) {
    products.forEach(p => {
      const item = document.createElement("div");
      item.style.display = "flex";
      item.style.alignItems = "center";
      item.style.justifyContent = "space-between";
      item.style.background = "white";
      item.style.padding = "8px 12px";
      item.style.borderRadius = "8px";
      item.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";

      item.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${p.img}" style="width:40px; height:40px; object-fit:cover; border-radius:6px;">
          <div>
            <strong style="font-size:0.85rem;">${p.name}</strong><br>
            <small style="color:#666;">$${parseFloat(p.price).toFixed(2)} - [${catKey}]</small>
          </div>
        </div>
        <div>
          <button onclick="editAdminProduct('${p.id}', '${catKey}')" class="btn-secondary" style="padding:4px 8px; font-size:0.8rem;">✏️</button>
          <button onclick="deleteAdminProduct('${p.id}')" class="btn-danger" style="padding:4px 8px; font-size:0.8rem;">🗑️</button>
        </div>
      `;
      container.appendChild(item);
    });
  }
}

function editAdminProduct(id, category) {
  const prod = MENU[category].find(p => p.id === id);
  if (!prod) return;

  document.getElementById("prod-edit-id").value = prod.id;
  document.getElementById("prod-category").value = category;
  document.getElementById("prod-name").value = prod.name;
  document.getElementById("prod-price").value = prod.price;
  document.getElementById("prod-img").value = prod.img.startsWith("data:") ? "" : prod.img;

  document.getElementById("admin-form-title").innerText = "✏️ Editar Producto";
  document.getElementById("btn-cancel-edit").style.display = "inline-block";
}

function deleteAdminProduct(id) {
  if (confirm("¿Seguro que deseas eliminar este producto?")) {
    for (const catKey in MENU) {
      MENU[catKey] = MENU[catKey].filter(p => p.id !== id);
    }
    localStorage.setItem("pos_menu_v2", JSON.stringify(MENU));
    renderAdminProducts();
    renderMenu();
  }
}

function resetAdminForm() {
  document.getElementById("prod-edit-id").value = "";
  document.getElementById("prod-name").value = "";
  document.getElementById("prod-price").value = "";
  document.getElementById("prod-img").value = "";
  document.getElementById("prod-file").value = "";
  adminBase64Image = "";

  document.getElementById("admin-form-title").innerText = "➕ Agregar Nuevo Producto";
  document.getElementById("btn-cancel-edit").style.display = "none";
}
