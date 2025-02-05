// app/products/page.tsx
import React from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string; // Include image property
}

// Fetching products on the server side
const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
};

// Main component
const ProductsPage = async () => {
  const products: Product[] = await fetchProducts(); // Fetching products here

  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
                <img src={product.image} alt={product.title} className="mb-2 h-40 w-full object-cover rounded" />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
