
"use client"; ///////
// import { useEffect } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Nav from "@/components/Navigations/CategoryNavbar";
import Footer from "@/components/sections/footer";

const ProductDetailsPage = () => {
  const router = useRouter();
  const productId = router.query.productId;

  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartData(JSON.parse(storedCart));
    }
  }, []);

  // Calculate total price
  const totalPrice = cartData.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  // State for form inputs
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    address_1: "",
    address_2: "",
    payment_method: "online_payment", // Default payment method
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    // Prepare order data matching the requested structure
    const orderData = {
      products: cartData.map((product) => ({
        product_id: product.id,
        quantity: product.quantity,
      })),
      total_price: totalPrice,
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
      state: formData.state,
      city: formData.city,
      address_1: formData.address_1,
      address_2: formData.address_2,
      payment_method: formData.payment_method,
    };
  
    try {
      const response = await fetch("https://fantasia-shop.com/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      // Check if the response is not OK
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error details:", errorData);  // Log error details
        throw new Error("Failed to create the order. Please try again.");
      }
  
      const data = await response.json();
      alert("Order created successfully!");
      console.log("Order response:", data);
  
      // Optionally, clear cart and form
      localStorage.removeItem("cart");
      setCartData([]);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        address_1: "",
        address_2: "",
        payment_method: "cash",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <section className="py-12 px-4 md:px-12 bg-[#000112]">
      <Nav />
      <div className="py-12 px-16 flex flex-col lg:flex-row custom-flex justify-center items-start min-h-screen bg-gray-800 mx-auto">
        {/* Order Summary */}
        <div className="px-12 w-full lg:w-2/5 flex flex-col justify-center lg:justify-end px-4 lg:px-8 mb-8 lg:mb-0">
          <div className="mt-8 border border-gray-600 px-8">
            <h1 className="text-4xl font-semibold text-white py-4">Order Summary</h1>
            <ul>
              {cartData.map((product) => (
                <li
                  key={product.id}
                  className="py-2 flex items-center border-b border-gray-200 mb-4"
                >
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                  <div className="flex-1 ml-4">
                    <p className="font-semibold text-white">{product.name}</p>
                    <p className="text-gray-400">Size: {product.size}</p>
                    <p className="text-gray-400">Qty: {product.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total Price */}
            <div className="mt-8 text-white flex flex-col items-center space-y-4 px-12 py-4">
              <div className="flex justify-between w-full max-w-md">
                <p className="text-gray-400">Total Price:</p>
                <p className="font-semibold">{totalPrice.toLocaleString()} IQD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal and Shipping Information */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-right px-4 overflow-y-auto h-full">
          <form onSubmit={handleSubmit} className="px-12 space-y-6 h-full">
            <h2 className="text-xl font-semibold text-white py-4 text-left px-4">
              Shipping Information
            </h2>

            {/* Form Inputs */}
            <div>
              <label htmlFor="full_name" className="block text-white mb-2 text-lg ">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg bg-gray-500 text-white py-2 "
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg bg-gray-500 text-white py-2"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-2 text-lg">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg bg-gray-500 text-white py-2"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-white mb-2 text-lg">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg bg-gray-500 text-white py-2"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-white mb-2 text-lg">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg bg-gray-500 text-white py-2"
              />
            </div>

            <div>
              <label htmlFor="address_1" className="block text-white mb-2 text-lg">
                Address Line 1
              </label>
              <input
                type="text"
                id="address_1"
                name="address_1"
                value={formData.address_1}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg bg-gray-500 text-white py-2"
              />
            </div>

            <div>
              <label htmlFor="address_2" className="block text-white mb-2 text-lg">
                Address Line 2
              </label>
              <input
                type="text"
                id="address_2"
                name="address_2"
                value={formData.address_2}
                onChange={handleChange}
                className="w-full p-3 text-lg bg-gray-500 text-white py-2"
              />
            </div>

            <div>
              <label htmlFor="payment_method" className="block text-white mb-2 text-lg ">
                Payment Method
              </label>
              <select
                id="payment_method"
                name="payment_method"
                value={formData.payment_method}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg bg-gray-500 text-white py-2"
              >
                <option value="cash">Cash</option>
                {/* <option value="credit_card">Credit Card</option> */}
                <option value="online_payment">online_payment</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full p-3 text-lg text-white bg-[#282828] py-2"
              disabled={loading}
            >
              {loading ? "Processing..." : "Confirm Order"}
            </button>

            {error && <p className="text-red-500 mt-4 ">{error}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductDetailsPage;
