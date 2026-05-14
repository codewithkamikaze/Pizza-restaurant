"use client";
import Image from "next/image";
import React, { useState } from "react";

const initialCart = [
  { id: 1, title: "sicilian", price: 79.9, img: "/temporary/p1.png", size: "Large" },
  { id: 2, title: "margarita", price: 24.9, img: "/temporary/p2.png", size: "Medium" },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleDelete = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    
    window.dispatchEvent(new Event("cartItemDeleted"));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-auto lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 scrollbar-hide">
        {cartItems.map((item) => (
          <div className="flex items-center justify-between mb-4 border-b border-fuchsia-50 pb-2" key={item.id}>
            <Image src={item.img} alt="" width={100} height={100} className="object-contain" />
            <div className="flex-1 px-4">
              <h1 className="uppercase text-xl font-bold">{item.title}</h1>
              <span className="text-sm">{item.size}</span>
            </div>
            <h2 className="font-bold">${item.price.toFixed(2)}</h2>
            <span 
              className="cursor-pointer px-2 hover:text-black font-bold transition-colors"
              onClick={() => handleDelete(item.id)}
            >
              X
            </span>
          </div>
        ))}

        {cartItems.length === 0 && (
          <div className="flex flex-col items-center gap-4">
             <p className="text-center font-bold text-xl">Your cart is empty!</p>
          </div>
        )}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-between lg:justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 font-medium">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span>Subtotal ({cartItems.length} items)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Cost</span>
            <span className="text-green-500 font-bold uppercase">Free!</span>
          </div>
          <hr className="my-2 border-red-500 opacity-20" />
          <div className="flex justify-between text-lg font-bold">
            <span>TOTAL</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white p-3 rounded-md w-full md:w-48 lg:w-full font-bold hover:bg-red-600 transition-all uppercase shadow-md active:scale-95">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;