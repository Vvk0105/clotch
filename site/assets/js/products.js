/* ==========================================================
   EDIT THIS FILE to change store settings and products.
   ========================================================== */

const STORE = {
  name: "Clotch",
  // WhatsApp number with country code, digits only (no +, spaces or dashes).
  // PLACEHOLDER: replace with the real number. e.g. India 98765 43210 -> "919876543210"
  whatsappNumber: "919999999999",
  instagramUrl: "https://instagram.com/clotch",   // PLACEHOLDER
  currency: "₹",
  // Message used for the product button. {name} and {price} are replaced automatically.
  productMessage: "Hi Clotch! I'm interested in the {name} ({price}). Is it available?",
  generalMessage: "Hi Clotch! I'd like to know more about your collection."
};

// Names, prices and descriptions are PLACEHOLDERS. Update once confirmed.
const COMMON = {
  category: "Kurta Set",
  sizes: "S, M, L, XL, XXL",
  fabric: "Cotton",
  includes: "Kurta, pant & dupatta",
  desc: "A fresh printed cotton kurta set with matching pant and dupatta. Light, breathable and easy to style."
};

const PRODUCTS = [
  { id: 1,  name: "Lavender Bloom Kurta Set",   price: 1499, color: "Lavender" },
  { id: 2,  name: "Ivory Lilac Block Print Set", price: 1399, color: "Ivory & Lilac" },
  { id: 3,  name: "Rose Garden Kurta Set",       price: 1499, color: "Rose Pink" },
  { id: 4,  name: "Charcoal Paisley Kurta Set",  price: 1599, color: "Charcoal" },
  { id: 5,  name: "Blush Pink Embroidered Set",  price: 1699, color: "Blush Pink" },
  { id: 6,  name: "Petal Pink Kurta Set",        price: 1499, color: "Petal Pink" },
  { id: 7,  name: "Wisteria Kurta Set",          price: 1599, color: "Wisteria" },
  { id: 8,  name: "Magenta Motif Kurta Set",     price: 1599, color: "Magenta" },
  { id: 9,  name: "Powder Blue Kurta Set",       price: 1499, color: "Powder Blue" },
  { id: 10, name: "Emerald Floral Kurta Set",    price: 1699, color: "Emerald Teal" },
  { id: 11, name: "Lilac Haze Kurta Set",        price: 1499, color: "Lilac" },
  { id: 12, name: "Mauve Mist Kurta Set",        price: 1599, color: "Mauve" },
  { id: 13, name: "Aqua Breeze Kurta Set",       price: 1499, color: "Aqua" },
  { id: 14, name: "Coral Blossom Kurta Set",     price: 1599, color: "Coral Pink" },
  { id: 15, name: "Teal Hibiscus Kurta Set",     price: 1699, color: "Teal" },
  { id: 16, name: "Marigold Kurta Set",          price: 1599, color: "Marigold Yellow" }
].map(p => ({
  ...COMMON,
  ...p,
  image: `assets/images/products/product-${String(p.id).padStart(2, "0")}.jpg`
}));
