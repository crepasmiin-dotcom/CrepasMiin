// MENÚ COMPLETO CON TODOS LOS PRODUCTOS ORIGINALES
const DEFAULT_MENU = {
  crepasWaffles: [
    { id: 'crepa_dulce', nombre: 'Crepa Dulce', precio: 70, img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300&auto=format&fit=crop', customizable: 'dulce' },
    { id: 'waffle_dulce', nombre: 'Waffle Dulce', precio: 70, img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=300&auto=format&fit=crop', customizable: 'dulce' },
    { id: 'crepa_salada_pepperoni', nombre: 'Crepa Pepperoni', precio: 80, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&auto=format&fit=crop' },
    { id: 'crepa_salada_hawaiiana', nombre: 'Crepa Hawaiiana', precio: 80, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&auto=format&fit=crop' }
  ],
  frappes: [
    { id: 'f_frappuccino', nombre: 'Frappuccino', precio: 70, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop' },
    { id: 'f_moka', nombre: 'Frappé Moka', precio: 70, img: 'https://images.unsplash.com/photo-1579888926999-291732d84793?w=300&auto=format&fit=crop' },
    { id: 'f_oreo', nombre: 'Frappé Oreo', precio: 70, img: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&auto=format&fit=crop' },
    { id: 'f_mazapan', nombre: 'Frappé Mazapán', precio: 70, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop' },
    { id: 'f_fresas_crema', nombre: 'Frappé Fresas c/ Crema', precio: 70, img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=300&auto=format&fit=crop' },
    { id: 'f_gansito', nombre: 'Frappé Gansito', precio: 80, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop' },
    { id: 'f_nutella', nombre: 'Frappé Nutella', precio: 80, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop' },
    { id: 'f_rompope', nombre: 'Frappé Rompope', precio: 80, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop' },
    { id: 'f_cajeta', nombre: 'Frappé Cajeta', precio: 80, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop' },
    { id: 'f_coco', nombre: 'Frappé Coco', precio: 80, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop' }
  ],
  fresasCrema: [
    { id: 'fresas_chico', nombre: 'Fresas Chica (3 Toppings)', precio: 70, img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=300&auto=format&fit=crop', customizable: 'fresas', maxToppings: 3 },
    { id: 'fresas_grande', nombre: 'Fresas Grande (4 Toppings)', precio: 90, img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=300&auto=format&fit=crop', customizable: 'fresas', maxToppings: 4 }
  ],
  otros: [
    { id: 'o_maruchan_piquin', nombre: 'Maruchan Piquín', precio: 30, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&auto=format&fit=crop' },
    { id: 'o_maruchan_habanero', nombre: 'Maruchan Habanero', precio: 30, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&auto=format&fit=crop' },
    { id: 'o_gomiboing_mango', nombre: 'GomiBoing Mango', precio: 50, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&auto=format&fit=crop' },
    { id: 'o_gomiboing_manzana', nombre: 'GomiBoing Manzana', precio: 50, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&auto=format&fit=crop' },
    { id: 'o_gomiboing_fresa', nombre: 'GomiBoing Fresa', precio: 50, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&auto=format&fit=crop' },
    { id: 'o_gomiboing_guayaba', nombre: 'GomiBoing Guayaba', precio: 50, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&auto=format&fit=crop' },
    { id: 'o_gomiboing_uva', nombre: 'GomiBoing Uva', precio: 50, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&auto=format&fit=crop' },
    { id: 'o_chamoyada_mango', nombre: 'Chamoyada Mango', precio: 70, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&auto=format&fit=crop' },
    { id: 'o_choco_caliente', nombre: 'Chocolate Caliente', precio: 50, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&auto=format&fit=crop' },
    { id: 'o_americano', nombre: 'Café Americano', precio: 40, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&auto=format&fit=crop' },
    { id: 'o_te', nombre: 'Té', precio: 30, img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300&auto=format&fit=crop' },
    { id: 'o_capuchino', nombre: 'Capuchino Clásico', precio: 45, img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&auto=format&fit=crop' },
    { id: 'o_capuchino_sabores', nombre: 'Capuchino Sabores', precio: 55, img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&auto=format&fit=crop' },
    { id: 'o_iced_coffee', nombre: 'Iced Coffee', precio: 60, img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&auto=format&fit=crop' }
  ]
};

let MENU = DEFAULT_MENU;
localStorage.setItem('pos_custom_menu', JSON.stringify(MENU));

const OPTIONS_DULCES = {
  "Bases": ["Nutella", "Queso Philadelphia", "Cajeta", "Mermelada de Fresa", "Mermelada de Zarzamora"],
  "Frutas": ["Fresa", "Plátano", "Durazno"],
  "Toppings": ["Hersheys", "Lechera", "Bombones", "Oreo", "Nuez", "Choco Krispis", "Froot Loops", "Chispas de Chocolate"]
};

const TOPPINGS_FRESAS = ["Kranky", "Chocoreta", "Lunetas", "Galleta Oreo", "Galleta Triki Trakes", "Freskas", "Bubulubu", "Chispas de chocolate", "Bombones", "Nuez", "Almendra", "Granola"];

let currentCart = [];
let currentUser = null;
let selectedPaymentMethod = 'efectivo';
let pendingCustomProduct = null;
let lastSale = null;

let boxData = JSON.parse(localStorage.getItem('pos_box_session')) || { open: false, initial: 0 };
let salesHistory = JSON.parse(localStorage.getItem('pos_sales')) || [];

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
});

// BIENVENIDA Y AUTENTICACIÓN
function showAuthScreen() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('auth-screen').style.display = 'flex';
}

function handleAuth(e) {
  if (e) e.preventDefault();
  const role = document.getElementById('auth-role').value;
  loginUser({ role });
}

function registerAccountDirectly() {
  const role = document.getElementById('auth-role').value;
  loginUser({ role });
}

function loginUser(user) {
  currentUser = user;
  document.getElementById('auth-screen').style.display = 'none';

  const adminBtn = document.getElementById('btn-view-admin');
  if (adminBtn) adminBtn.style.display = (user.role === 'owner') ? 'inline-block' : 'none';

  if (!boxData.open) {
    document.getElementById('open-box-modal').style.display = 'flex';
  } else {
    showMainApp();
  }
}

function confirmOpenBox() {
  const amount = parseFloat(document.getElementById('initial-box-amount').value) || 0;
  boxData = { open: true, initial: amount };
  localStorage.setItem('pos_box_session', JSON.stringify(boxData));
  document.getElementById('open-box-modal').style.display = 'none';
  showMainApp();
}

function showMainApp() {
  document.getElementById('app-main').style.display = 'flex';
  updateReportsUI();
}

function logout() {
  currentUser = null;
  document.getElementById('app-main').style.display = 'none';
  document.getElementById('welcome-screen').style.display = 'flex';
}

// MENÚ
function renderMenu() {
  renderCategory('crepas-waffles', MENU.crepasWaffles);
  renderCategory('frappes', MENU.frappes);
  renderCategory('fresas-crema', MENU.fresasCrema);
  renderCategory('otros', MENU.otros);
}

function renderCategory(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => handleProductClick(item);
    card.innerHTML = `
      <img src="${item.img}" alt="${item.nombre}">
      <h3>${item.nombre}</h3>
      <p class="price">$${item.precio.toFixed(2)}</p>
    `;
    container.appendChild(card);
  });
}

function handleProductClick(item) {
  if (item.customizable) {
    openCustomModal(item);
  } else {
    addToCart(item);
  }
}

// PERSONALIZACIÓN
function openCustomModal(item) {
  pendingCustomProduct = item;
  const modal = document.getElementById('custom-modal');
  const title = document.getElementById('custom-title');
  const sub = document.getElementById('custom-sub');
  const container = document.getElementById('custom-options-container');

  title.innerText = `Personalizar: ${item.nombre}`;
  container.innerHTML = '';

  if (item.customizable === 'dulce') {
    sub.innerText = 'Selecciona hasta 4 ingredientes en total:';
    for (let group in OPTIONS_DULCES) {
      const gTitle = document.createElement('h4');
      gTitle.style.cssText = 'color:var(--primary); margin:8px 0 4px 0; font-size:0.85rem;';
      gTitle.innerText = group;
      container.appendChild(gTitle);

      OPTIONS_DULCES[group].forEach(opt => {
        const label = document.createElement('label');
        label.style.cssText = 'display:block; font-size:0.8rem; margin-bottom:4px; cursor:pointer;';
        label.innerHTML = `<input type="checkbox" name="cust-opt" value="${opt}" onchange="checkMaxSelect(event, 4)"> ${opt}`;
        container.appendChild(label);
      });
    }
  } else if (item.customizable === 'fresas') {
    const max = item.maxToppings || 3;
    sub.innerText = `Selecciona hasta ${max} Toppings`;
    TOPPINGS_FRESAS.forEach(opt => {
      const label = document.createElement('label');
      label.style.cssText = 'display:block; font-size:0.8rem; margin-bottom:4px; cursor:pointer;';
      label.innerHTML = `<input type="checkbox" name="cust-opt" value="${opt}" onchange="checkMaxSelect(event, ${max})"> ${opt}`;
      container.appendChild(label);
    });
  }

  modal.style.display = 'flex';
}

function checkMaxSelect(event, max) {
  const selected = document.querySelectorAll('input[name="cust-opt"]:checked');
  if (selected.length > max) {
    alert(`Solo puedes elegir un máximo de ${max} opciones.`);
    if (event && event.target) {
      event.target.checked = false;
    }
  }
}

function confirmCustomItem() {
  const selected = Array.from(document.querySelectorAll('input[name="cust-opt"]:checked')).map(cb => cb.value);
  const details = selected.length > 0 ? ` (${selected.join(', ')})` : '';

  addToCart({
    ...pendingCustomProduct,
    nombre: `${pendingCustomProduct.nombre}${details}`,
    cartId: Date.now()
  });
  closeCustomModal();
}

function closeCustomModal() {
  document.getElementById('custom-modal').style.display = 'none';
  pendingCustomProduct = null;
}

// CARRITO
function addToCart(item) {
  currentCart.push({ ...item, cartId: Date.now() });
  updateCartUI();
}

function updateCartUI() {
  const total = currentCart.reduce((sum, item) => sum + item.precio, 0);
  document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
  document.getElementById('cart-count').innerText = currentCart.length;
}

function toggleCartModal() {
  const modal = document.getElementById('cart-modal');
  const list = document.getElementById('cart-items-list');
  const modalTotal = document.getElementById('modal-cart-total');

  if (modal.style.display === 'flex') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
    list.innerHTML = '';
    if (currentCart.length === 0) {
      list.innerHTML = '<p style="text-align:center; color:#888;">El carrito está vacío</p>';
    } else {
      currentCart.forEach((item, idx) => {
        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:0.85rem;';
        row.innerHTML = `
          <span>${item.nombre} - <strong>$${item.precio}</strong></span>
          <button style="background:#ff4d4d; color:#fff; border:none; padding:4px 8px; border-radius:4px;" onclick="removeItem(${idx})">❌</button>
        `;
        list.appendChild(row);
      });
    }
    const total = currentCart.reduce((sum, item) => sum + item.precio, 0);
    modalTotal.innerText = `$${total.toFixed(2)}`;
  }
}

function removeItem(index) {
  currentCart.splice(index, 1);
  updateCartUI();
  toggleCartModal();
  toggleCartModal();
}

// COBRO
function openPayModal() {
  if (currentCart.length === 0) return alert('El carrito está vacío.');
  toggleCartModal();

  const total = currentCart.reduce((sum, item) => sum + item.precio, 0);
  document.getElementById('pay-total-display').value = `$${total.toFixed(2)}`;
  document.getElementById('pay-amount').value = '';
  document.getElementById('pay-change').value = '$0.00';
  setPaymentMethod('efectivo');

  document.getElementById('pay-modal').style.display = 'flex';
}

function closePayModal() {
  document.getElementById('pay-modal').style.display = 'none';
}

function setPaymentMethod(method) {
  selectedPaymentMethod = method;
  const btnCash = document.getElementById('btn-pay-cash');
  const btnCard = document.getElementById('btn-pay-card');
  const cashCalc = document.getElementById('cash-calculator');

  if (method === 'efectivo') {
    btnCash.style.background = 'var(--primary)';
    btnCard.style.background = '#6c757d';
    cashCalc.style.display = 'block';
  } else {
    btnCard.style.background = 'var(--primary)';
    btnCash.style.background = '#6c757d';
    cashCalc.style.display = 'none';
  }
}

function calculateChange() {
  const total = currentCart.reduce((sum, item) => sum + item.precio, 0);
  const amount = parseFloat(document.getElementById('pay-amount').value) || 0;
  const change = amount - total;
  document.getElementById('pay-change').value = `$${(change >= 0 ? change : 0).toFixed(2)}`;
}

function processPayment() {
  const total = currentCart.reduce((sum, item) => sum + item.precio, 0);
  let paidAmount = total;

  if (selectedPaymentMethod === 'efectivo') {
    paidAmount = parseFloat(document.getElementById('pay-amount').value) || 0;
    if (paidAmount < total) return alert('El monto ingresado es insuficiente.');
  }

  lastSale = {
    id: Date.now().toString().slice(-4),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    total: total,
    method: selectedPaymentMethod,
    paidWith: paidAmount,
    change: paidAmount - total,
    items: [...currentCart]
  };

  salesHistory.push(lastSale);
  localStorage.setItem('pos_sales', JSON.stringify(salesHistory));

  closePayModal();
  showTicketModal();
  updateReportsUI();
}

// TICKET Y VISTA PREVIA EN PANTALLA
function showTicketModal() {
  document.getElementById('ticket-date').innerText = `${lastSale.date} - ${lastSale.time}`;
  document.getElementById('ticket-method').innerText = `PAGO: ${lastSale.method.toUpperCase()} | FOLIO: #${lastSale.id}`;

  let itemsHtml = lastSale.items.map(i => `
    <div style="display:flex; justify-content:space-between; font-size:0.78rem; margin-bottom:4px;">
      <span style="flex:1; padding-right:5px;">${i.nombre}</span>
      <strong style="color:#333;">$${i.precio.toFixed(2)}</strong>
    </div>
  `).join('');

  document.getElementById('ticket-items').innerHTML = itemsHtml;
  document.getElementById('ticket-totals').innerHTML = `
    <div style="color:#555;">Subtotal: <strong>$${lastSale.total.toFixed(2)}</strong></div>
    <div style="color:#555;">Pagó con: <strong>$${lastSale.paidWith.toFixed(2)}</strong></div>
    <div style="font-size:1rem; color:var(--primary); font-weight:bold; margin-top:4px;">Cambio: $${lastSale.change.toFixed(2)}</div>
  `;
  
  document.getElementById('receipt-modal').style.display = 'flex';
}

// COPIAR TEXTO DEL TICKET PARA WHATSAPP
function copyTicketText() {
  if (!lastSale) return;

  let text = `🧾 *CREPAS & FRAPPÉS*\n`;
  text += `📅 Fecha: ${lastSale.date} - ${lastSale.time}\n`;
  text += `💳 Pago: ${lastSale.method.toUpperCase()} (Folio #${lastSale.id})\n`;
  text += `------------------------------\n`;
  
  lastSale.items.forEach(i => {
    text += `• ${i.nombre} - $${i.precio.toFixed(2)}\n`;
  });
  
  text += `------------------------------\n`;
  text += `*TOTAL: $${lastSale.total.toFixed(2)}*\n`;
  text += `Pagado: $${lastSale.paidWith.toFixed(2)} | Cambio: $${lastSale.change.toFixed(2)}\n\n`;
  text += `¡Gracias por tu compra! ❤️`;

  navigator.clipboard.writeText(text).then(() => {
    alert('📋 ¡Ticket copiado al portapapeles! Ahora puedes pegarlo en WhatsApp.');
  }).catch(() => {
    alert('Ticket generado correctamente en pantalla.');
  });
}

function finishSale() {
  document.getElementById('receipt-modal').style.display = 'none';
  currentCart = [];
  updateCartUI();
}


// CAJA Y REPORTES
function updateReportsUI() {
  const todayStr = new Date().toLocaleDateString();
  const todaySales = salesHistory.filter(s => s.date === todayStr);

  let cash = 0, card = 0;
  todaySales.forEach(s => {
    if (s.method === 'efectivo') cash += s.total;
    else card += s.total;
  });

  const grandTotal = cash + card;

  document.getElementById('stat-initial-box').innerText = `$${(boxData.initial || 0).toFixed(2)}`;
  document.getElementById('stat-cash-total').innerText = `$${cash.toFixed(2)}`;
  document.getElementById('stat-card-total').innerText = `$${card.toFixed(2)}`;
  document.getElementById('stat-grand-total').innerText = `$${(grandTotal + (boxData.initial || 0)).toFixed(2)}`;

  const list = document.getElementById('sales-history-list');
  if (list) {
    list.innerHTML = todaySales.slice().reverse().map(s => `
      <div style="background:#fff; padding:10px; border-radius:8px; display:flex; justify-content:space-between; box-shadow:0 1px 4px rgba(0,0,0,0.05); font-size:0.85rem;">
        <span><strong>#${s.id}</strong> - ${s.time} (${s.method})</span>
        <strong style="color:var(--primary);">$${s.total.toFixed(2)}</strong>
      </div>
    `).join('') || '<p style="text-align:center; color:#888;">No hay ventas hoy.</p>';
  }
}

function closeCashBox() {
  if (!confirm('¿Deseas realizar el Cierre de Caja? Esto reiniciará la caja para el siguiente turno.')) return;

  boxData = { open: false, initial: 0 };
  localStorage.setItem('pos_box_session', JSON.stringify(boxData));

  alert('Caja cerrada con éxito.');
  location.reload();
}

// FILTROS Y VISTAS
function filterCategory(catId, btnElement) {
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const blocks = {
    'crepas-waffles': document.getElementById('sec-crepas-waffles'),
    'frappes': document.getElementById('sec-frappes'),
    'fresas-crema': document.getElementById('sec-fresas-crema'),
    'otros': document.getElementById('sec-otros')
  };

  if (catId === 'todos') {
    Object.values(blocks).forEach(block => { if(block) block.style.display = 'block'; });
  } else {
    Object.keys(blocks).forEach(key => {
      if(blocks[key]) blocks[key].style.display = (key === catId) ? 'block' : 'none';
    });
  }
}

function switchView(view) {
  ['menu', 'reports', 'admin'].forEach(v => {
    const el = document.getElementById(`view-${v}`);
    const btn = document.getElementById(`btn-view-${v}`);
    if (el) el.style.display = (v === view) ? 'block' : 'none';
    if (btn) btn.classList.toggle('active', v === view);
  });
  if (view === 'reports') updateReportsUI();
  if (view === 'admin') renderAdminProductsList();
}

// ADMIN
function renderAdminProductsList() {
  const container = document.getElementById('admin-products-list');
  if (!container) return;
  container.innerHTML = '';

  for (let catKey in MENU) {
    MENU[catKey].forEach(prod => {
      const itemRow = document.createElement('div');
      itemRow.style.cssText = 'background:white; border-radius:10px; padding:8px 12px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 1px 4px rgba(0,0,0,0.05);';
      itemRow.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px;">
          <img src="${prod.img}" style="width:40px; height:40px; border-radius:6px; object-fit:cover;">
          <div>
            <strong style="font-size:0.85rem;">${prod.nombre}</strong>
            <div style="font-size:0.75rem; color:var(--primary);">$${prod.precio.toFixed(2)}</div>
          </div>
        </div>
        <div style="display:flex; gap:5px;">
          <button style="background:#ffc107; border:none; padding:4px 8px; border-radius:4px;" onclick="editProduct('${catKey}', '${prod.id}')">✏️</button>
          <button style="background:#dc3545; color:white; border:none; padding:4px 8px; border-radius:4px;" onclick="deleteProduct('${catKey}', '${prod.id}')">🗑️</button>
        </div>
      `;
      container.appendChild(itemRow);
    });
  }
}

function convertImageToBase64(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) { document.getElementById('admin-prod-img64').value = e.target.result; };
  reader.readAsDataURL(file);
}

function editProduct(catKey, prodId) {
  const prod = MENU[catKey].find(p => p.id === prodId);
  if (!prod) return;

  document.getElementById('admin-prod-id').value = prod.id;
  document.getElementById('admin-prod-name').value = prod.nombre;
  document.getElementById('admin-prod-cat').value = catKey;
  document.getElementById('admin-prod-price').value = prod.precio;
  document.getElementById('admin-prod-img64').value = prod.img;

  document.getElementById('admin-form-title').innerText = `✏️ Editando: ${prod.nombre}`;
  document.getElementById('btn-cancel-edit').style.display = 'inline-block';
}

function saveCustomProduct() {
  const prodId = document.getElementById('admin-prod-id').value;
  const name = document.getElementById('admin-prod-name').value.trim();
  const cat = document.getElementById('admin-prod-cat').value;
  const price = parseFloat(document.getElementById('admin-prod-price').value);
  const img64 = document.getElementById('admin-prod-img64').value;

  if (!name || isNaN(price)) return alert('Ingresa nombre y precio válidos.');

  if (prodId) {
    for (let c in MENU) { MENU[c] = MENU[c].filter(p => p.id !== prodId); }
    MENU[cat].push({ id: prodId, nombre: name, precio: price, img: img64 || 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300&auto=format&fit=crop' });
  } else {
    MENU[cat].push({ id: `prod_${Date.now()}`, nombre: name, precio: price, img: img64 || 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300&auto=format&fit=crop' });
  }

  localStorage.setItem('pos_custom_menu', JSON.stringify(MENU));
  resetAdminForm();
  renderMenu();
  renderAdminProductsList();
  alert('Guardado con éxito.');
}

function deleteProduct(catKey, prodId) {
  if (!confirm('¿Eliminar este producto?')) return;
  MENU[catKey] = MENU[catKey].filter(p => p.id !== prodId);
  localStorage.setItem('pos_custom_menu', JSON.stringify(MENU));
  renderMenu();
  renderAdminProductsList();
}

function resetAdminForm() {
  document.getElementById('admin-prod-id').value = '';
  document.getElementById('admin-prod-name').value = '';
  document.getElementById('admin-prod-price').value = '';
  document.getElementById('admin-prod-file').value = '';
  document.getElementById('admin-prod-img64').value = '';
  document.getElementById('admin-form-title').innerText = '➕ Agregar Nuevo Producto';
  document.getElementById('btn-cancel-edit').style.display = 'none';
}