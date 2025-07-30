import { ProductCard } from "@/components/module/shop/ProductCard";
import React from "react";
const products = [
  {
    id: 1,
    title: "کفش ورزشی مردانه",
    image: "/image/shop/products/1.png",
    price: 1200000,
    discount: 200000,
    discounttol: 70,
    colors: ["#ff0000", "#0000ff", "#00ff00"],
  },
  {
    id: 2,
    title: "تیشرت ورزشی زنانه",
    image: "/image/shop/products/6.svg",
    price: 800000,
    discount: 0,
    discounttol: 50,
    colors: ["#000000", "#ffffff"],
  },
  {
    id: 3,
    title: "کلاه ورزشی",
    image: "/image/shop/products/2.png",
    price: 300000,
    discount: 50000,
    discounttol: 40,
    colors: ["#ffcc00", "#ff66cc"],
  },
  {
    id: 4,
    title: "کلاه ورزشی",
    image: "/image/shop/products/3.svg",
    price: 300000,
    discount: 50000,
    discounttol: 40,
    colors: ["#ffcc00", "#ff66cc"],
  },
  {
    id: 5,
    title: "کلاه ورزشی",
    image: "/image/shop/products/4.png",
    price: 300000,
    discount: 50000,
    discounttol: 40,
    colors: ["#ffcc00", "#ff66cc"],
  },
  {
    id: 6,
    title: "کلاه ورزشی",
    image: "/image/shop/products/5.svg",
    price: 300000,
    discount: 50000,
    discounttol: 40,
    colors: ["#ffcc00", "#ff66cc"],
  },
  {
    id: 7,
    title: "کلاه ورزشی",
    image: "/image/shop/products/7.png",
    price: 300000,
    discount: 50000,
    discounttol: 40,
    colors: ["#ffcc00", "#ff66cc"],
  },
  {
    id: 8,
    title: "کلاه ورزشی",
    image: "/image/shop/products/8.png",
    price: 300000,
    discount: 50000,
    discounttol: 40,
    colors: ["#ffcc00", "#ff66cc"],
  },
];

function ShopPage() {
  return (
    <div className="grid grid-cols-1 min-[410px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ShopPage;
