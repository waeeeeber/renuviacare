/* Renuvia Care – Theme JS */
(function () {
  'use strict';

  const moneyFormat = window.shopMoneyFormat || '{{amount}} CHF';

  function formatMoney(cents) {
    if (typeof cents === 'string') cents = parseFloat(cents);
    const value = (cents / 100).toFixed(2);
    return moneyFormat
      .replace('{{amount}}', value)
      .replace('{{amount_no_decimals}}', Math.round(cents / 100));
  }

  // Cart state
  async function fetchCart() {
    const res = await fetch('/cart.js', { headers: { 'Accept': 'application/json' } });
    return res.json();
  }

  async function addToCart(formData) {
    const res = await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.description || 'Fehler beim Hinzufügen');
    }
    return res.json();
  }

  async function changeCartItem(line, quantity) {
    const res = await fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ line, quantity })
    });
    return res.json();
  }

  // Drawer
  const drawer = document.querySelector('[data-cart-drawer]');
  const drawerBackdrop = document.querySelector('[data-drawer-backdrop]');

  function openDrawer() {
    if (!drawer) return;
    refreshDrawer();
    drawer.classList.add('is-open');
    drawerBackdrop && drawerBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawerBackdrop && drawerBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-cart-open]')) { e.preventDefault(); openDrawer(); }
    if (e.target.closest('[data-cart-close]')) { e.preventDefault(); closeDrawer(); }
    if (e.target === drawerBackdrop) closeDrawer();
  });

  async function refreshDrawer() {
    const cart = await fetchCart();
    const body = drawer && drawer.querySelector('[data-drawer-body]');
    const foot = drawer && drawer.querySelector('[data-drawer-foot]');
    updateCartBadge(cart.item_count);
    if (!body) return;

    if (cart.item_count === 0) {
      body.innerHTML = `
        <div style="text-align:center; padding:4rem 1rem;">
          <p style="color: rgba(11,11,15,.6); margin-bottom: 1.5rem;">Dein Warenkorb ist noch leer.</p>
          <a href="/collections/all" class="btn btn-primary" data-cart-close>Jetzt entdecken</a>
        </div>`;
      foot && (foot.style.display = 'none');
      return;
    }

    foot && (foot.style.display = 'flex');
    body.innerHTML = cart.items.map(item => `
      <div class="cart-line" style="margin-bottom:1.25rem; gap:1rem;">
        <div class="cart-line-img" style="width:5rem;height:5rem;">
          ${item.image ? `<img src="${item.image}" alt="${item.product_title}">` : ''}
        </div>
        <div class="cart-line-meta">
          <div class="flex justify-between gap-2">
            <p class="font-medium" style="margin:0;">${item.product_title}</p>
            <button type="button" data-cart-remove="${item.key}" class="text-xs" style="color:rgba(11,11,15,.5);">Entfernen</button>
          </div>
          ${item.variant_title ? `<p class="text-sm text-muted" style="margin:.15rem 0 0;">${item.variant_title}</p>` : ''}
          <div class="mt-2 flex items-center justify-between">
            <div class="qty">
              <button type="button" data-cart-qty="${item.key}" data-step="-1">−</button>
              <span style="padding:0 .5rem; font-size: .875rem;">${item.quantity}</span>
              <button type="button" data-cart-qty="${item.key}" data-step="1">+</button>
            </div>
            <span class="font-medium">${formatMoney(item.final_line_price)}</span>
          </div>
        </div>
      </div>
    `).join('');

    const subtotalEl = drawer.querySelector('[data-drawer-subtotal]');
    if (subtotalEl) subtotalEl.textContent = formatMoney(cart.items_subtotal_price);
  }

  function updateCartBadge(count) {
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  // Drawer interactions
  document.addEventListener('click', async (e) => {
    const removeBtn = e.target.closest('[data-cart-remove]');
    if (removeBtn) {
      const key = removeBtn.getAttribute('data-cart-remove');
      const cart = await fetchCart();
      const line = cart.items.findIndex(i => i.key === key) + 1;
      if (line > 0) await changeCartItem(line, 0);
      refreshDrawer();
      return;
    }
    const qtyBtn = e.target.closest('[data-cart-qty]');
    if (qtyBtn) {
      const key = qtyBtn.getAttribute('data-cart-qty');
      const step = parseInt(qtyBtn.getAttribute('data-step'), 10);
      const cart = await fetchCart();
      const idx = cart.items.findIndex(i => i.key === key);
      if (idx >= 0) {
        const newQty = Math.max(0, cart.items[idx].quantity + step);
        await changeCartItem(idx + 1, newQty);
        refreshDrawer();
      }
    }
  });

  // Add to cart form
  document.addEventListener('submit', async (e) => {
    const form = e.target.closest('[data-product-form]');
    if (!form) return;
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = 'Wird hinzugefügt …'; }
    try {
      await addToCart(new FormData(form));
      openDrawer();
    } catch (err) {
      alert(err.message);
    } finally {
      if (btn) { btn.disabled = false; btn.innerHTML = original; }
    }
  });

  // Initial cart count on page load
  fetchCart().then(c => updateCartBadge(c.item_count));

  // Mobile menu
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const mobileBackdrop = document.querySelector('[data-mobile-nav-backdrop]');
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-menu-open]')) {
      mobileNav && mobileNav.classList.add('is-open');
      mobileBackdrop && mobileBackdrop.classList.add('is-open');
    }
    if (e.target.closest('[data-menu-close]') || e.target === mobileBackdrop) {
      mobileNav && mobileNav.classList.remove('is-open');
      mobileBackdrop && mobileBackdrop.classList.remove('is-open');
    }
  });

  // Product gallery
  document.addEventListener('click', (e) => {
    const thumb = e.target.closest('[data-thumb]');
    if (!thumb) return;
    const gallery = thumb.closest('[data-gallery]');
    const main = gallery && gallery.querySelector('[data-main-image]');
    const newSrc = thumb.querySelector('img')?.getAttribute('data-full');
    if (main && newSrc) main.querySelector('img').src = newSrc;
    gallery.querySelectorAll('[data-thumb]').forEach(t => t.classList.remove('is-active'));
    thumb.classList.add('is-active');
  });

  // Product variants
  document.querySelectorAll('[data-variant-picker]').forEach(picker => {
    const swatches = picker.querySelectorAll('[data-variant-id]');
    const idInput = picker.querySelector('input[name="id"]');
    const priceEl = document.querySelector('[data-product-price]');
    const compareEl = document.querySelector('[data-product-compare]');
    const variantsScript = document.querySelector('[data-product-variants-json]');
    let variantData = [];
    if (variantsScript) {
      try { variantData = JSON.parse(variantsScript.textContent); } catch (e) {}
    }
    const labelEl = picker.querySelector('[data-variant-label]');

    swatches.forEach(sw => {
      sw.addEventListener('click', () => {
        const id = sw.getAttribute('data-variant-id');
        const v = variantData.find(x => String(x.id) === String(id));
        if (!v) return;
        swatches.forEach(s => s.classList.remove('is-active'));
        sw.classList.add('is-active');
        idInput.value = id;
        if (labelEl) labelEl.textContent = v.title;
        if (priceEl) priceEl.textContent = formatMoney(v.price);
        if (compareEl) {
          if (v.compare_at_price && v.compare_at_price > v.price) {
            compareEl.textContent = formatMoney(v.compare_at_price);
            compareEl.style.display = '';
          } else {
            compareEl.style.display = 'none';
          }
        }
        // Update URL
        const url = new URL(window.location);
        url.searchParams.set('variant', id);
        history.replaceState({}, '', url);
      });
    });
  });

  // Quantity inputs
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-qty-step]');
    if (!btn) return;
    const step = parseInt(btn.getAttribute('data-qty-step'), 10);
    const input = btn.parentElement.querySelector('input[name="quantity"]');
    if (!input) return;
    input.value = Math.max(1, (parseInt(input.value, 10) || 1) + step);
  });
})();
