"use client"; ///////
// import { useEffect } from "react";


import React, { useState, useEffect } from "react";
import Image from "next/image";
import Close from "@/assets/icons/close.png"; // Close icon for the drawer
import { useRouter } from 'next/navigation';

const CartDrawer = ({ isOpen, toggleDrawer }) => {
  if (!isOpen) return null;

  const [cartData, setCartData] = useState([]);

  // Fetch cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartData(JSON.parse(storedCart));
    }
  }, []);

  // Calculate total price before discount, discount amount, and total price after discount
  const totalPriceBeforeDiscount = cartData.reduce((acc, product) => acc + product.price * product.quantity, 0);
  // const totalDiscount = cartData.reduce((acc, product) => acc + product.discount * product.quantity, 0);
  // const totalPriceAfterDiscount = totalPriceBeforeDiscount - totalDiscount;

  // Update the quantity of a product
  const updateQuantity = (id, delta) => {
    setCartData(prevCart => {
      const updatedCart = prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      );
      // Update local storage after quantity change
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Remove product from cart
  const removeProduct = (id) => {
    setCartData(prevCart => {
      const updatedCart = prevCart.filter((product) => product.id !== id);
      // Update local storage after removal
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Initialize useRouter
  const router = useRouter();

  // Confirm order and navigate to checkout page
  const confirmOrder = () => {
    router.push('/checkout');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}>
      <div
        style={{ backgroundColor: "#282828" }}
        className="w-96 h-full p-4 shadow-lg overflow-y-auto absolute right-0 top-0"
        onClick={(e) => e.stopPropagation()} // Prevent closing the drawer when interacting with it
      >
        {/* Header: Title and Close button */}
        <div className="flex justify-between items-center mb-4 py-4 px-2">
          <h2 className="text-lg font-semibold text-white">اشتري الان</h2>
          <button
            onClick={toggleDrawer}
            className="text-white"
          >
            <Image src={Close} alt="Close" width={20} height={20} />
          </button>
        </div>

        {/* Divider below Title and Close button */}
        <div className="border-t border-gray-600 my-4 py-2"></div>

        {/* Cart Products */}
        <div className="text-white mt-4">
          <ul>
            {cartData.map((product) => (
              <li key={product.id} className="py-2 flex items-center border-b border-gray-600 mb-4 relative">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={100}   // Square image
                    height={100}  // Square image
                    className="mr-4"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-400">Price: {product.price.toLocaleString()} IQD</p>
                  <p className="text-sm text-gray-400 py-2"> size  M</p>

                  <div className="flex justify-end items-center mt-2">
                    {/* Quantity and Buttons Stack */}
                    <div className="flex items-center ml-4">
                      {/* Quantity number */}
                      <span className="text-sm mr-4">{product.quantity}</span>
                      {/* Buttons */}
                      <div className="flex flex-col items-center">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="bg-[#000112] text-white px-2 py-1 w-8"
                        >
                          -
                        </button>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="bg-[#000112] text-white px-2 py-1 w-8 "
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Remove Button (Top right aligned) */}
                <button
                  onClick={() => removeProduct(product.id)}
                  className="absolute top-0 right-2 text-white p-1 "
                >
                  <Image src={Close} alt="Remove" width={15} height={15} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Total Prices */}
        <div className="mt-4 text-white text-right">
          <div className="flex justify-between py-4">
            <p className="font-semibold">{totalPriceBeforeDiscount.toLocaleString()} IQD</p>
            <p className="font-semibold">: المبلغ الكلي</p>
          </div>
          {/* <div className="flex justify-between mt-2 py-4">
            <p className="font-semibold">{totalDiscount.toLocaleString()} IQD</p>
            <p className="font-semibold">:  الخصم</p>
          </div> */}
          {/* <div className="flex justify-between mt-2 py-4">
            <p className="font-semibold">{totalPriceAfterDiscount.toLocaleString()} IQD</p>
            <p className="font-semibold">: المبلغ الكلي</p>
          </div> */}
        </div>

        {/* Submit Button */}
        <div className="mt-6 w-full">
          <button
            onClick={confirmOrder}
            className="bg-gray-500 text-white w-full py-2 hover:bg-gray-600"
          >
            تاكيد الطلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;