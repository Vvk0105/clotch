(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const fmt = n => STORE.currency + n.toLocaleString("en-IN");
  const waLink = text => `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(text)}`;
  const productLink = p =>
    waLink(STORE.productMessage.replace("{name}", p.name).replace("{price}", fmt(p.price)));
  const countIn = id => PRODUCTS.filter(p => p.category === id).length;

  // ---- Category tiles + filter pills
  const cats = $("#cats"), filters = $("#filters"), grid = $("#grid");
  let current = "all";

  cats.innerHTML = CATEGORIES.map(c => {
    const first = PRODUCTS.find(p => p.category === c.id);
    return `
    <button class="cat" data-cat="${c.id}">
      <img src="${first.images[0]}" alt="" loading="lazy">
      <span class="cat__label"><strong>${c.label}</strong><small>${countIn(c.id)} styles</small></span>
    </button>`;
  }).join("");

  filters.innerHTML =
    [{ id: "all", label: "All", n: PRODUCTS.length }]
      .concat(CATEGORIES.map(c => ({ id: c.id, label: c.label, n: countIn(c.id) })))
      .map(f => `<button class="pill" role="tab" data-cat="${f.id}">${f.label}<span>${f.n}</span></button>`)
      .join("");

  // ---- Grid
  function render() {
    const list = current === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === current);
    const label = current === "all" ? "All styles" : CATEGORIES.find(c => c.id === current).label;
    $("#collectionTitle").textContent = label;
    $("#empty").hidden = list.length > 0;
    filters.querySelectorAll(".pill").forEach(b => {
      const on = b.dataset.cat === current;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on);
    });
    grid.innerHTML = list.map(p => `
      <article class="card">
        <button class="card__media" data-id="${p.id}" aria-label="View ${p.name}">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
          ${p.images.length > 1 ? `<span class="card__badge">${p.images.length} photos</span>` : ""}
          <span class="card__view">Quick view</span>
        </button>
        <div class="card__body">
          <h3>${p.name}</h3>
          <p class="card__color">${current === "all" ? p.categoryLabel + " · " : ""}${p.color}</p>
          <div class="card__row">
            <span class="price">${fmt(p.price)}</span>
            <a class="card__wa" href="${productLink(p)}" target="_blank" rel="noopener">Enquire</a>
          </div>
        </div>
      </article>`).join("");
  }

  function setCategory(id, scroll) {
    current = id;
    render();
    if (scroll) $("#collection").scrollIntoView({ behavior: "smooth" });
  }

  cats.addEventListener("click", e => {
    const b = e.target.closest(".cat");
    if (b) setCategory(b.dataset.cat, true);
  });
  filters.addEventListener("click", e => {
    const b = e.target.closest(".pill");
    if (b) setCategory(b.dataset.cat, false);
  });
  render();

  // ---- Modal
  const modal = $("#modal");
  let lastFocus = null;

  function showImage(p, i) {
    $("#mImg").src = p.images[i];
    $("#mImg").alt = p.name;
    $("#mThumbs").querySelectorAll("button").forEach((b, n) => b.classList.toggle("is-active", n === i));
  }

  function openModal(id) {
    const p = PRODUCTS.find(x => x.id === Number(id));
    if (!p) return;
    lastFocus = document.activeElement;
    $("#mThumbs").innerHTML = p.images.length > 1
      ? p.images.map((src, i) => `<button data-i="${i}" aria-label="Photo ${i + 1}"><img src="${src}" alt=""></button>`).join("")
      : "";
    $("#mThumbs").onclick = e => {
      const b = e.target.closest("button");
      if (b) showImage(p, Number(b.dataset.i));
    };
    showImage(p, 0);
    $("#mCat").textContent = p.categoryLabel;
    $("#mTitle").textContent = p.name;
    $("#mPrice").textContent = fmt(p.price);
    $("#mDesc").textContent = p.desc;
    $("#mDetails").innerHTML = [
      ["Colour", p.color], ["Fabric", p.fabric],
      ["Includes", p.includes], ["Sizes", p.sizes]
    ].filter(([, v]) => v).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
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
