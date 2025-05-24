import type { CartProductItem } from "../components/CartProductItem";

export const cart_products: CartProductItem[] = [
  {
    product_name: "Pi Pizza Oven",
    image:
      "https://www.foodandwine.com/thmb/V6u9ZOGI3UtMcwdH-NWVyc18NmE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PiPrime_Lifestyle_Granbury052323-67Large-57bc6855098e4ac3ab43012d5afccf37.jpeg",
    price: 299.99,
    short_text: "Estimated Ship Data: June 6th",
    source: "Fuel Source: Wood Only",
    change_button: true,
  },
  {
    product_name: "Grill Ultimate Bundle",
    image:
      "https://www.survivalsupplies.com.au/media/catalog/product/7/6/76601-61638_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    price: 299.99,
    add_another: "Add another production for $34.45",
    sale_type: "Solo Stove",
  },
  {
    product_name: "Starters",
    sale_type: "Solo Stove",
    image:
      "https://www.survivalsupplies.com.au/media/catalog/product/5/6/56091-84597_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    price: 299.99,
    short_text: "4 Pack",
  },
  {
    product_name: "Charcolal Grill Pack",
    image: "https://m.media-amazon.com/images/I/61J271ll8mL._SX679_.jpg",
    price: 299.99,
    sale_type: "Solo Stove",
  },
];
