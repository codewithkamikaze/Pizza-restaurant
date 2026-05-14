"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="h-auto py-8 md:h-24 p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand: Urban Crust */}
        <Link href="/" className="font-black text-xl tracking-tighter text-red-500">
          Urban Crust
        </Link>

        {/* Copyright */}
        <p className="text-gray-500 text-xs md:text-sm font-medium order-3 md:order-2 uppercase tracking-widest">
          © {new Date().getFullYear()} Urban Crust. ALL RIGHTS RESERVED.
        </p>

        {/* Social Links (Text instead of Icons) */}
        <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider order-2 md:order-3">
          <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            Instagram
          </Link>
          <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            X
          </Link>
          <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            Facebook
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;