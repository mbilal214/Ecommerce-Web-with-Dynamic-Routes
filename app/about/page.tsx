
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          We are dedicated to providing the best products for you. Our mission is to ensure customer satisfaction through quality products and excellent service.
        </p>
        <p className="text-lg">Join us in exploring our amazing collection!</p>
      </div>
      <div className="mt-72">
      <Footer />
      </div>
      </div>
  );
}
