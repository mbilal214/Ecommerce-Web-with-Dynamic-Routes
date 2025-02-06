"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Fix: Next.js optimized images
import Header from "../Components/Header";
import Footer from "../Components/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error); // ✅ Fix: `console.error(err)`
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
                <div className="relative w-full h-40">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="mb-2 object-cover rounded"
                  />
                </div>
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
}
