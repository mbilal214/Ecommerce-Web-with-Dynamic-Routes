"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Next.js optimized image
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error); // ✅ Fix: `console.error(err)`
        setError("Error fetching product");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <div className="relative w-full h-64">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="mb-4 object-cover rounded"
          />
        </div>
        <p className="text-lg">Price: ${product.price}</p>
        <p className="text-md">{product.description}</p>
      </div>
      <Footer />
    </div>
  );
}
