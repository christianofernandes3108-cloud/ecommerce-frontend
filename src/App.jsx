import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { initProducts } from "./services/productService";

const defaultProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1518441902113-f3c0d3c16c8c",
    description: "Premium wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Modern smart watch with health and fitness tracking.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e4b8",
    description: "Portable speaker with deep bass and long battery life.",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    description: "Durable backpack with padded laptop compartment.",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    description: "Ergonomic wireless mouse for productivity.",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Mechanical keyboard with tactile switches.",
  },
  {
    id: 7,
    name: "Noise Cancelling Earbuds",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    description: "Compact earbuds with active noise cancellation.",
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    description: "Minimalist LED desk lamp with adjustable brightness.",
  },
  {
    id: 9,
    name: "External Hard Drive",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    description: "1TB portable external hard drive.",
  },
  {
    id: 10,
    name: "Smartphone Stand",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Adjustable stand for phones and small tablets.",
  },
  {
    id: 11,
    name: "USB-C Hub",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
    description: "Multi-port USB-C hub for laptops.",
  },
  {
    id: 12,
    name: "Wireless Charger",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
    description: "Fast wireless charging pad.",
  },
];

export default function App() {
  useEffect(() => {
    initProducts(defaultProducts);
  }, []);

  return <AppRoutes />;
}
