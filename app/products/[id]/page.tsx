// app/products/[id]/page.tsx
import React from "react";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string; // Image property
}

// Fetch product details based on ID
const getProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return await res.json();
};

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const product: Product = await getProduct(params.id);

  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <img src={product.image} alt={product.title} className="mb-4 h-64 w-full object-cover rounded" />
        <p className="text-lg">Price: ${product.price}</p>
        <p className="text-md">{product.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
