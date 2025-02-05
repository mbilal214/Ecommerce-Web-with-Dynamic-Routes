
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="p-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Store</h1>
        <p className="text-xl mb-4">Your best destination for quality products.</p>
        <h2 className="text-lg italic">"Quality over quantity!"</h2>
      </div>
      <div className="mt-72">
      <Footer />
      </div>
    </div>
  );
}
