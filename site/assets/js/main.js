(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const fmt = n => STORE.currency + n.toLocaleString("en-IN");
  const waLink = text => `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(text)}`;
  const productLink = p =>
    waLink(STORE.productMessage.replace("{name}", p.name).replace("{price}", fmt(p.price)));

  // ---- Grid
  const grid = $("#grid");
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="card">
      <button class="card__media" data-id="${p.id}" aria-label="View ${p.name}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="card__view">Quick view</span>
      </button>
      <div class="card__body">
        <h3>${p.name}</h3>
        <p class="card__color">${p.color}</p>
        <div class="card__row">
          <span class="price">${fmt(p.price)}</span>
          <a class="card__wa" href="${productLink(p)}" target="_blank" rel="noopener">Enquire</a>
        </div>
      </div>
    </article>`).join("");

  // ---- Modal
  const modal = $("#modal");
  let lastFocus = null;

  function openModal(id) {
    const p = PRODUCTS.find(x => x.id === Number(id));
    if (!p) return;
    lastFocus = document.activeElement;
    $("#mImg").src = p.image;
    $("#mImg").alt = p.name;
    $("#mCat").textContent = p.category;
    $("#mTitle").textContent = p.name;
    $("#mPrice").textContent = fmt(p.price);
    $("#mDesc").textContent = p.desc;
    $("#mDetails").innerHTML = [
      ["Colour", p.color], ["Fabric", p.fabric],
      ["Includes", p.includes], ["Sizes", p.sizes]
    ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
    $("#mWa").href = productLink(p);
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    $(".modal__close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  grid.addEventListener("click", e => {
    const btn = e.target.closest(".card__media");
    if (btn) openModal(btn.dataset.id);
  });
  modal.addEventListener("click", e => { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  // ---- General WhatsApp links
  document.querySelectorAll(".js-wa-general").forEach(a => {
    a.href = waLink(STORE.generalMessage);
    a.target = "_blank";
    a.rel = "noopener";
  });
  $("#igLink").href = STORE.instagramUrl;

  // ---- Header / mobile nav
  const header = $("#header"), nav = $("#nav"), burger = $("#burger");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", e => {
    if (e.target.tagName === "A") { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", false); }
  });

  $("#year").textContent = new Date().getFullYear();
})();
