"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react"; 
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const user = false; // TEMPORARY

  return (
    <div className="md:hidden">
      
      {/* Icon Trigger */}
      <div 
        className="cursor-pointer p-2 transition-all hover:scale-110" 
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} className="text-red-500" /> : <MenuIcon size={28} />}
      </div>

      {/* Full Screen Menu Overlay */}
      {open && (
        <div className="bg-red-500 text-white fixed left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col gap-8 items-center justify-center text-2xl z-50 animate-in fade-in zoom-in duration-300">
          
          {links.map((item) => (
            <Link 
              href={item.url} 
              key={item.id} 
              onClick={() => setOpen(false)}
              className="hover:text-black transition-colors"
            >
              {item.title}
            </Link>
          ))}

          <Link
            href={user ? "/orders" : "/login"}
            onClick={() => setOpen(false)}
            className="hover:text-black transition-colors"
          >
            {user ? "Orders" : "Login"}
          </Link>

          <Link href="/cart" onClick={() => setOpen(false)} className="mt-4">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;