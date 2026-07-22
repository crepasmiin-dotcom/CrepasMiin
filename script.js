// MENU POR DEFECTO
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
 { id: 'f_fresas_crema', nombre: 'Frappé Fresas c/ Crema', precio: 70, img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=300&auto=format&fit=crop' }
 ],
 fresasCrema: [
 { id: 'fresas_chico', nombre: 'Fresas Chica (3 Toppings)', precio: 70, img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=300&auto=format&fit=crop', customizable: 'fresas', maxToppings: 3 },
 { id: 'fresas_grande', nombre: 'Fresas Grande (4 Toppings)', precio: 90, img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=300&auto=format&fit=crop', customizable: 'fresas', maxToppings: 4 }
 ],
 otros: [
 { id: 'o_maruchan', nombre: 'Maruchan Piquín', precio: 30, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&auto=format&fit=crop' },
 { id: 'o_gomiboing', nombre: 'GomiBoing Mango', precio: 50, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&auto=format&fit=crop' }
 ]
};

let MENU = JSON.parse(localStorage.getItem('pos_custom_menu')) || DEFAULT_MENU;
let usersList = JSON.parse(localStorage.getItem('pos_users')) || [];

const OPTIONS_DULCES = {
 "Bases": ["Nutella", "Queso Philadelphia", "Cajeta", "Mermelada de Fresa"],
 "Frutas": ["Fresa", "Plátano", "Durazno"],
 "Toppings": ["Hersheys", "Lechera", "Bombones", "Oreo", "Nuez"]
};
const TOPPINGS_FRESAS = ["Kranky", "Chocoreta", "Lunetas", "Galleta Oreo", "Nuez", "Almendra"];

let currentCart = [];
let currentUser = null;
let selectedPaymentMethod = 'efectivo';
let pendingCustomProduct = null;
let lastSale = null;

let boxData = JSON.parse(localStorage.getItem('pos_box_session')) || { open: false, initial: 0 };
let salesHistory = JSON.parse(localStorage.getItem('pos_sales')) || [];
let pedidos = JSON.parse(localStorage.getItem('pos_pedidos')) || [];

document.addEventListener('DOMContentLoaded', () => {
 renderMenu();
 renderizarComandas();
});

// AUTENTICACIÓN (LOGIN Y REGISTRO)
function showAuthScreen() {
 document.getElementById('welcome-screen').style.display = 'none';
 document.getElementById('auth-screen').style.display = 'flex';
}

function toggleAuthMode(mode) {
 if (mode === 'register') {
 document.getElementById('login-box').style.display = 'none';
 document.getElementById('register-box').style.display = 'block';
 } else {
 document.getElementById('register-box').style.display = 'none';
 document.getElementById('login-box').style.display = 'block';
 }
}

function handleRegister(e) {
 e.preventDefault();
 const name = document.getElementById('reg-name').value;
 const email = document.getElementById('reg-email').value;
 const pass = document.getElementById('reg-pass').value;
 const role = document.getElementById('reg-role').value;

 const newUser = { name, email, pass, role };
 usersList.push(newUser);
 localStorage.setItem('pos_users', JSON.stringify(usersList));

 alert('¡Cuenta creada con éxito! Ahora inicia sesión.');
 toggleAuthMode('login');
}

function handleLogin(e) {
 e.preventDefault();
 const email = document.getElementById('login-email').value;
 const pass = document.getElementById('login-pass').value;
 const role = document.getElementById('login-role').value;

 currentUser = { email, role };
 document.getElementById('auth-screen').style.display = 'none';

 const adminBtn = document.getElementById('btn-view-admin');
 if (adminBtn) adminBtn.style.display = (role === 'owner') ? 'inline-block' : 'none';

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

// NAVEGACIÓN Y MENÚ
function switchView(view) {
 ['menu', 'comandas', 'reports', 'admin'].forEach(v => {
 const el = document.getElementById(`view-${v}`);
 const btn = document.getElementById(`btn-view-${v}`);
 if (el) el.style.display = (v === view) ? 'block' : 'none';
 if (btn) btn.classList.toggle('active', v === view);
 });
 if (view === 'reports') updateReportsUI();
 if (view === 'comandas') renderizarComandas();
 if (view === 'admin') renderAdminProducts();
}

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
 Object.values(blocks).forEach(b => { if(b) b.style.display = 'block'; });
 } else {
 Object.keys(blocks).forEach(key => {
 if(blocks[key]) blocks[key].style.display = (key === catId) ? 'block' : 'none';
 });
 }
}

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
 if (item.customizable) openCustomModal(item);
 else addToCart(item);
}

// PERSONALIZACIÓN Y CARRITO
function openCustomModal(item) {
 pendingCustomProduct = item;
 const modal = document.getElementById('custom-modal');
 const container = document.getElementById('custom-options-container');

 document.getElementById('custom-title').innerText = `Personalizar: ${item.nombre}`;
 container.innerHTML = '';

 if (item.customizable === 'dulce') {
 document.getElementById('custom-sub').innerText = 'Selecciona hasta 4 ingredientes:';
 for (let group in OPTIONS_DULCES) {
 const gTitle = document.createElement('h4');
 gTitle.style.cssText = 'color:var(--primary); margin:6px 0 2px 0; font-size:0.8rem;';
 gTitle.innerText = group;
 container.appendChild(gTitle);

 OPTIONS_DULCES[group].forEach(opt => {
 const label = document.createElement('label');
 label.style.cssText = 'display:block; font-size:0.8rem; margin-bottom:4px;';
 label.innerHTML = `<input type="checkbox" name="cust-opt" value="${opt}" onchange="checkMaxSelect(event, 4)"> ${opt}`;
 container.appendChild(label);
 });
 }
 } else if (item.customizable === 'fresas') {
 const max = item.maxToppings || 3;
 document.getElementById('custom-sub').innerText = `Selecciona hasta ${max} Toppings:`;
 TOPPINGS_FRESAS.forEach(opt => {
 const label = document.createElement('label');
 label.style.cssText = 'display:block; font-size:0.8rem; margin-bottom:4px;';
 label.innerHTML = `<input type="checkbox" name="cust-opt" value="${opt}" onchange="checkMaxSelect(event, ${max})"> ${opt}`;
 container.appendChild(label);
 });
 }

 modal.style.display = 'flex';
}

function checkMaxSelect(event, max) {
 const selected = document.querySelectorAll('input[name="cust-opt"]:checked');
 if (selected.length > max) {
 alert(`Límite máximo de ${max} opciones.`);
 event.target.checked = false;
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
 row.style.cssText = 'display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.85rem;';
 row.innerHTML = `<span>${item.nombre} - $${item.precio.toFixed(2)}</span> <button onclick="removeItem(${idx})" style="border:none; background:red; color:white; border-radius:4px; padding:2px 6px;">❌</button>`;
 list.appendChild(row);
 });
 }
 const total = currentCart.reduce((sum, item) => sum + item.precio, 0);
 document.getElementById('modal-cart-total').innerText = `$${total.toFixed(2)}`;
 }
}

function removeItem(index) {
 currentCart.splice(index, 1);
 updateCartUI();
 toggleCartModal();
 toggleCartModal();
}
// PAGO Y TICKET
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
 document.getElementById('btn-pay-cash').classList.toggle('active', method === 'efectivo');
 document.getElementById('btn-pay-card').classList.toggle('active', method === 'tarjeta');
 document.getElementById('cash-calculator').style.display = (method === 'efectivo') ? 'block' : 'none';
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
 if (paidAmount < total) return alert('Monto insuficiente.');
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

 guardarPedido(currentCart, total);
 closePayModal();
 showTicketModal();
 updateReportsUI();
}

function showTicketModal() {
 document.getElementById('ticket-date').innerText = `${lastSale.date} - ${lastSale.time}`;
 document.getElementById('ticket-method').innerText = `PAGO: ${lastSale.method.toUpperCase()} | FOLIO: #${lastSale.id}`;

 document.getElementById('ticket-items').innerHTML = lastSale.items.map(i => `
 <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
 <span>${i.nombre}</span>
 <strong>$${i.precio.toFixed(2)}</strong>
 </div>
 `).join('');

 document.getElementById('ticket-totals').innerHTML = `
 <div>Subtotal: $${lastSale.total.toFixed(2)}</div>
 <div>Pagó con: $${lastSale.paidWith.toFixed(2)}</div>
 <div style="font-size:1rem; color:var(--primary); font-weight:bold; margin-top:4px;">Cambio: $${lastSale.change.toFixed(2)}</div>
 `;

 document.getElementById('receipt-modal').style.display = 'flex';
}

function descargarPDF() {
 const el = document.getElementById('printable-ticket');
 const opciones = {
 margin: 3,
 filename: `Ticket_${lastSale.id}.pdf`,
 image: { type: 'jpeg', quality: 0.98 },
 html2canvas: { scale: 2 },
 jsPDF: { unit: 'mm', format: [80, 140], orientation: 'portrait' }
 };
 html2pdf().set(opciones).from(el).save();
}

async function compartirPDFWhatsApp() {
 const el = document.getElementById('printable-ticket');
 const opciones = {
 margin: 3,
 filename: `Ticket_${lastSale.id}.pdf`,
 image: { type: 'jpeg', quality: 0.98 },
 html2canvas: { scale: 2 },
 jsPDF: { unit: 'mm', format: [80, 140], orientation: 'portrait' }
 };

 try {
 const pdfWorker = html2pdf().set(opciones).from(el);
 const pdfBlob = await pdfWorker.output('blob');
 const file = new File([pdfBlob], `Ticket_${lastSale.id}.pdf`, { type: 'application/pdf' });

 if (navigator.canShare && navigator.canShare({ files: [file] })) {
 await navigator.share({ files: [file], title: `Ticket #${lastSale.id}`, text: 'Tu ticket de Crepas Miin 🥞' });
 } else {
 descargarPDF();
 alert('El PDF se guardó. Adjúntalo en WhatsApp.');
 }
 } catch (err) {
 descargarPDF();
 }
}

function imprimirRawBT() {
 let text = ` CREPAS MIIN\nFecha: ${lastSale.date} ${lastSale.time}\nFolio: #${lastSale.id}\n--------------------------------\n`;
 lastSale.items.forEach(i => { text += `${i.nombre}\n $${i.precio.toFixed(2)}\n`; });
 text += `--------------------------------\nTOTAL: $${lastSale.total.toFixed(2)}\n\n`;
 window.location.href = `intent:${encodeURIComponent(text)}#Intent;scheme=rawbt;package=ru.a4040.rawbt;end;`;
}

function finishSale() {
 document.getElementById('receipt-modal').style.display = 'none';
 currentCart = [];
 updateCartUI();
}

// COMANDAS Y REPORTE
function guardarPedido(carrito, total) {
 pedidos.push({
 id: Date.now(),
 folio: pedidos.length + 1,
 items: carrito,
 total: total,
 estado: 'pendiente',
 fecha: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
 });
 localStorage.setItem('pos_pedidos', JSON.stringify(pedidos));
 renderizarComandas();
}

function marcarComoCompletado(id) {
 pedidos = pedidos.map(p => p.id === id ? { ...p, estado: 'completado' } : p);
 localStorage.setItem('pos_pedidos', JSON.stringify(pedidos));
 renderizarComandas();
}

function renderizarComandas() {
 const cont = document.getElementById('lista-comandas');
 if (!cont) return;
 cont.innerHTML = '';
 const pend = pedidos.filter(p => p.estado === 'pendiente');

 if (pend.length === 0) {
 cont.innerHTML = '<p style="text-align:center; color:#888;">Sin comandas pendientes 🥞</p>';
 return;
 }

 pend.forEach(p => {
 const card = document.createElement('div');
 card.className = 'comanda-card';
 card.innerHTML = `
 <h3>Pedido #${p.folio} <small>(${p.fecha})</small></h3>
 <ul style="margin:8px 0; padding-left:18px; font-size:0.85rem;">
 ${p.items.map(i => `<li>${i.nombre}</li>`).join('')}
 </ul>
 <button onclick="marcarComoCompletado(${p.id})" class="btn-primary">✅ Completar</button>
 `;
 cont.appendChild(card);
 });
}

function updateReportsUI() {
 const todayStr = new Date().toLocaleDateString();
 const todaySales = salesHistory.filter(s => s.date === todayStr);

 let cash = 0, card = 0;
 todaySales.forEach(s => {
 if (s.method === 'efectivo') cash += s.total;
 else card += s.total;
 });

 document.getElementById('stat-initial-box').innerText = `$${(boxData.initial || 0).toFixed(2)}`;
 document.getElementById('stat-cash-total').innerText = `$${cash.toFixed(2)}`;
 document.getElementById('stat-card-total').innerText = `$${card.toFixed(2)}`;
 document.getElementById('stat-grand-total').innerText = `$${(cash + card + (boxData.initial || 0)).toFixed(2)}`;
}

function closeCashBox() {
 if (!confirm('¿Cerrar caja?')) return;
 boxData = { open: false, initial: 0 };
 localStorage.setItem('pos_box_session', JSON.stringify(boxData));
 location.reload();
}

// ==========================================
// FUNCIONES DE ADMINISTRACIÓN Y GALERÍA DE FOTOS
// ==========================================

function renderAdminProducts() {
 const container = document.getElementById('admin-products-list');
 if (!container) return;
 container.innerHTML = '';

 const categories = [
 { key: 'crepasWaffles', title: 'Crepas & Waffles' },
 { key: 'frappes', title: 'Frappés' },
 { key: 'fresasCrema', title: 'Fresas con Crema' },
 { key: 'otros', title: 'Snacks & Bebidas' }
 ];

 categories.forEach(cat => {
 const items = MENU[cat.key] || [];
 if (items.length > 0) {
 const header = document.createElement('h5');
 header.style.cssText = 'color:var(--primary); margin-top:10px; font-size:0.9rem; font-weight:bold;';
 header.innerText = cat.title;
 container.appendChild(header);

 items.forEach((prod, index) => {
 const itemRow = document.createElement('div');
 itemRow.style.cssText = 'background:white; padding:8px 12px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; font-size:0.85rem; box-shadow:0 1px 3px rgba(0,0,0,0.05); margin-bottom:5px;';
 itemRow.innerHTML = `
 <div style="display:flex; align-items:center; gap:10px;">
 <img src="${prod.img}" style="width:35px; height:35px; border-radius:6px; object-fit:cover;" onerror="this.src='https://via.placeholder.com/35?text=Sin+Img'">
 <div>
 <strong>${prod.nombre}</strong> - $${prod.precio.toFixed(2)}
 </div>
 </div>
 <div style="display:flex; gap:6px;">
 <button onclick="editAdminProduct('${cat.key}', ${index})" style="background:#ffc107; border:none; padding:4px 8px; border-radius:4px; font-weight:bold; cursor:pointer;">✏️</button>
 <button onclick="deleteAdminProduct('${cat.key}', ${index})" style="background:#dc3545; color:white; border:none; padding:4px 8px; border-radius:4px; font-weight:bold; cursor:pointer;">🗑️</button>
 </div>
 `;
 container.appendChild(itemRow);
 });
 }
 });
}

function convertImageToBase64() {
 const fileInput = document.getElementById('prod-file');
 if (fileInput && fileInput.files && fileInput.files[0]) {
 const file = fileInput.files[0];
 const reader = new FileReader();
 reader.onloadend = function() {
 document.getElementById('prod-img').value = reader.result;
 };
 reader.readAsDataURL(file);
 }
}

function saveAdminProduct() {
 const cat = document.getElementById('prod-category').value;
 const name = document.getElementById('prod-name').value.trim();
 const price = parseFloat(document.getElementById('prod-price').value);
 const img = document.getElementById('prod-img').value.trim();
 const editId = document.getElementById('prod-edit-id').value;

 if (!name || isNaN(price) || !img) {
 return alert('Por favor llena todos los campos (nombre, precio e imagen).');
 }

 if (editId !== '') {
 // Modo Edición
 const [editCat, indexStr] = editId.split('-');
 const index = parseInt(indexStr);

 if (editCat !== cat) {
 MENU[editCat].splice(index, 1);
 if (!MENU[cat]) MENU[cat] = [];
 MENU[cat].push({ id: `p_${Date.now()}`, nombre: name, precio: price, img: img });
 } else {
 MENU[cat][index] = { ...MENU[cat][index], nombre: name, precio: price, img: img };
 }
 } else {
 // Modo Nuevo
 if (!MENU[cat]) MENU[cat] = [];
 MENU[cat].push({
 id: `p_${Date.now()}`,
 nombre: name,
 precio: price,
 img: img
 });
 }

 localStorage.setItem('pos_custom_menu', JSON.stringify(MENU));
 renderMenu();
 renderAdminProducts();
 resetAdminForm();
 alert('¡Producto guardado con éxito!');
}

function editAdminProduct(catKey, index) {
 const prod = MENU[catKey][index];
 document.getElementById('prod-category').value = catKey;
 document.getElementById('prod-name').value = prod.nombre;
 document.getElementById('prod-price').value = prod.precio;
 document.getElementById('prod-img').value = prod.img;
 document.getElementById('prod-edit-id').value = `${catKey}-${index}`;

 document.getElementById('admin-form-title').innerText = '✏️ Editar Producto';
 document.getElementById('btn-cancel-edit').style.display = 'inline-block';
}

function deleteAdminProduct(catKey, index) {
 if (!confirm(`¿Seguro que deseas eliminar "${MENU[catKey][index].nombre}"?`)) return;

 MENU[catKey].splice(index, 1);
 localStorage.setItem('pos_custom_menu', JSON.stringify(MENU));
 renderMenu();
 renderAdminProducts();
}

function resetAdminForm() {
 document.getElementById('prod-category').value = 'crepasWaffles';
 document.getElementById('prod-name').value = '';
 document.getElementById('prod-price').value = '';
 document.getElementById('prod-img').value = '';
 document.getElementById('prod-edit-id').value = '';

 const fileInput = document.getElementById('prod-file');
 if (fileInput) fileInput.value = '';

 document.getElementById('admin-form-title').innerText = '➕ Agregar Nuevo Producto';
 document.getElementById('btn-cancel-edit').style.display = 'none';
}
