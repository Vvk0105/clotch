/* ==========================================================
   EDIT THIS FILE to change store settings, categories and products.
   ========================================================== */

const STORE = {
  name: "Clotch",
  // WhatsApp number with country code, digits only (no +, spaces or dashes).
  // PLACEHOLDER: replace with the real number. e.g. India 98765 43210 -> "919876543210"
  whatsappNumber: "919895015752",
  instagramUrl: "https://www.instagram.com/_clotch__?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==",   // PLACEHOLDER
  currency: "₹",
  // Message used for the product button. {name} and {price} are replaced automatically.
  productMessage: "Hi Clotch! I'm interested in the {name} ({price}). Is it available?",
  generalMessage: "Hi Clotch! I'd like to know more about your collection."
};

/* ----------------------------------------------------------
   CATEGORIES
   - label:   the name shown on the site (rename "Category 1" etc. here)
   - prefix:  image file prefix in assets/images/products/ (images are <prefix>01.jpg, 02...)
   - details: defaults shared by every product in the category (sizes, fabric, includes, desc)
   - items:   one row per product: name, price, colour.
              imgs: [..] is optional. It lists image numbers when one product has several photos
              (the first is the main photo). Without it, row 1 uses image 1, row 2 uses image 2, ...
   Names, prices and descriptions are PLACEHOLDERS. Update once confirmed.
   ---------------------------------------------------------- */
const CATEGORIES = [
  {
    id: "kurta-sets", label: "Kurta Sets", prefix: "product-",
    details: {
      sizes: "S, M, L, XL, XXL", fabric: "Cotton", includes: "Kurta, pant & dupatta",
      desc: "A fresh printed cotton kurta set with matching pant and dupatta. Light, breathable and easy to style."
    },
    items: [
      { name: "Lavender Bloom Kurta Set",    price: 1499, color: "Lavender" },
      { name: "Ivory Lilac Block Print Set", price: 1399, color: "Ivory & Lilac" },
      { name: "Rose Garden Kurta Set",       price: 1499, color: "Rose Pink" },
      { name: "Charcoal Paisley Kurta Set",  price: 1599, color: "Charcoal" },
      { name: "Blush Pink Embroidered Set",  price: 1699, color: "Blush Pink" },
      { name: "Petal Pink Kurta Set",        price: 1499, color: "Petal Pink" },
      { name: "Wisteria Kurta Set",          price: 1599, color: "Wisteria" },
      { name: "Magenta Motif Kurta Set",     price: 1599, color: "Magenta" },
      { name: "Powder Blue Kurta Set",       price: 1499, color: "Powder Blue" },
      { name: "Emerald Floral Kurta Set",    price: 1699, color: "Emerald Teal" },
      { name: "Lilac Haze Kurta Set",        price: 1499, color: "Lilac" },
      { name: "Mauve Mist Kurta Set",        price: 1599, color: "Mauve" },
      { name: "Aqua Breeze Kurta Set",       price: 1499, color: "Aqua" },
      { name: "Coral Blossom Kurta Set",     price: 1599, color: "Coral Pink" },
      { name: "Teal Hibiscus Kurta Set",     price: 1699, color: "Teal" },
      { name: "Marigold Kurta Set",          price: 1599, color: "Marigold Yellow" }
    ]
  },
  {
    id: "kurthi", label: "Kurthi", prefix: "kurthi-",
    details: {
      sizes: "S, M, L, XL, XXL", fabric: "Cotton", includes: "Kurthi only",
      desc: "A short embroidered cotton kurthi with a relaxed fit. Pair it with pants or jeans for an easy everyday look."
    },
    items: [
      { name: "Olive Embroidered Kurthi",     price: 799, color: "Olive" },
      { name: "Sage Embroidered Kurthi",      price: 799, color: "Sage Green" },
      { name: "Slate Purple Kurthi",          price: 849, color: "Slate Purple" },
      { name: "Khaki Embroidered Kurthi",     price: 799, color: "Khaki" },
      { name: "Dusty Rose Embroidered Kurthi", price: 849, color: "Dusty Rose", imgs: [5, 6] },
      { name: "Salmon Embroidered Kurthi",    price: 849, color: "Salmon Pink", imgs: [7, 8] },
      { name: "Steel Blue Kurthi",            price: 799, color: "Steel Blue", imgs: [9] },
      { name: "Lilac Embroidered Kurthi",     price: 849, color: "Lilac", imgs: [10] }
    ]
  },
  {
    id: "category-1", label: "Category 1", prefix: "category-1-",
    details: {
      sizes: "S, M, L, XL", fabric: "Net & satin",
      desc: "A statement party-wear piece with a flowing silhouette. Made for weddings, receptions and festive evenings."
    },
    items: [
      { name: "Peach Off-Shoulder Gown",  price: 3499, color: "Peach" },
      { name: "Apricot Tulle Gown",       price: 3999, color: "Apricot" },
      { name: "Silver Satin Gown",        price: 3299, color: "Silver Grey" },
      { name: "Navy Ruffle Lehenga Set",  price: 3999, color: "Navy Blue" },
      { name: "Coral Tulle Lehenga Set",  price: 4299, color: "Coral" },
      { name: "Royal Blue Tiered Lehenga", price: 4499, color: "Royal Blue" },
      { name: "Mint Off-Shoulder Gown",   price: 3499, color: "Mint" },
      { name: "Blush Satin Gown",         price: 3299, color: "Blush Pink" },
      { name: "Cobalt Tiered Lehenga Set", price: 4299, color: "Cobalt Blue" },
      { name: "Rose Pink Gown",           price: 3499, color: "Rose Pink" }
    ]
  },
  {
    id: "category-2", label: "Category 2", prefix: "category-2-",
    details: {
      sizes: "S, M, L, XL", fabric: "Cotton blend",
      desc: "A stylish shirt-style top that works with jeans, trousers or skirts. Comfortable for work and weekends."
    },
    items: [
      { name: "Mustard Short-Sleeve Shirt", price: 899,  color: "Mustard",        imgs: [1, 7] },
      { name: "Black Satin Ruffle Shirt",   price: 1199, color: "Black",          imgs: [2] },
      { name: "Blue Stripe Shirt",          price: 999,  color: "Blue & White",   imgs: [3, 10] },
      { name: "Blue Stripe Bow Shirt",      price: 1099, color: "Blue & White",   imgs: [4, 13] },
      { name: "Stripe Colour-Block Shirt",  price: 1099, color: "Blue & Black",   imgs: [5, 9] },
      { name: "Camel Check Frill Shirt",    price: 1099, color: "Camel",          imgs: [6, 8] },
      { name: "Pink Floral Shirt",          price: 999,  color: "Pink Floral",    imgs: [12, 11] },
      { name: "Charcoal Relaxed Shirt",     price: 899,  color: "Charcoal",       imgs: [14, 15] },
      { name: "Red Cold-Shoulder Shirt",    price: 999,  color: "Red",            imgs: [17, 22] },
      { name: "Peach Button Top",           price: 899,  color: "Peach",          imgs: [18, 16] },
      { name: "Blue Floral Shirt",          price: 1099, color: "Blue Floral",    imgs: [19, 21] },
      { name: "Graphic Print Tee",          price: 899,  color: "Black & Red",    imgs: [20, 23] }
    ]
  },
  {
    id: "category-3", label: "Category 3", prefix: "category-3-",
    details: {
      sizes: "S, M, L, XL, XXL", fabric: "Cotton", includes: "Top only",
      desc: "A printed cotton wrap-style top with contrast piping. Light and breathable, easy to wear with palazzos or pants."
    },
    items: [
      { name: "Berry Wrap Top",       price: 899, color: "Berry" },
      { name: "Sky Blue Wrap Top",    price: 899, color: "Sky Blue" },
      { name: "Maroon Check Wrap Top", price: 899, color: "Maroon" },
      { name: "Sand Leaf Wrap Top",   price: 899, color: "Sand" }
    ]
  }
];

// Build the flat product list used by the site.
let _id = 0;
const PRODUCTS = CATEGORIES.flatMap(cat =>
  cat.items.map((item, i) => {
    const nums = item.imgs || [i + 1];
    return {
      ...cat.details,
      ...item,
      id: ++_id,
      category: cat.id,
      categoryLabel: cat.label,
      images: nums.map(n => `assets/images/products/${cat.prefix}${String(n).padStart(2, "0")}.jpg`)
    };
  })
);
