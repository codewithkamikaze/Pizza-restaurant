"use client"; 

import Link from "next/link";
import { ShoppingCart } from "lucide-react"; 
import React, { useEffect, useState } from "react";

const CartIcon = () => {
  const [itemCount, setItemCount] = useState(2); 

  useEffect(() => {
    const handleCartUpdate = () => {
      setItemCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    window.addEventListener("cartItemDeleted", handleCartUpdate);

    return () => {
      window.removeEventListener("cartItemDeleted", handleCartUpdate);
    };
  }, []);

  return (
    <Link href="/cart" className="group flex items-center gap-3 p-2">
      <div className="relative flex items-center justify-center">
        <ShoppingCart size={22} className="text-gray-700 group-hover:text-orange-600 transition-colors" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white ring-2 ring-white">
            {itemCount}
          </span>
        )}
      </div>
      <span className="hidden md:block text-sm font-medium text-gray-700 uppercase">
        Cart ({itemCount})
      </span>
    </Link>
  );
};

export default CartIcon;