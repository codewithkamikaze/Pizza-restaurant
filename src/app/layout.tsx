import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urban Crust Restaurant | Delicious Pizza & Burgers",
  description: "Experience the best Italian flavors with Urban Crust. Order fresh pizza, burgers, and more with fast delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main wrapper with flexbox to push footer to the bottom */}
        <div className="flex flex-col min-h-screen">
          <Notification />
          <Navbar />
          
          {/* Main Content Area - flex-1 ensures it takes up available space */}
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}