
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">GIAIC STORE</h1>
      <nav>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/products" className="mr-4">Products</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
