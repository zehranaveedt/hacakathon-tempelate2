"use client";
import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
    
      <nav className="bg-purple-950 text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
         
          <div className="text-2xl font-bold">Avion</div>

     
          <div   className="md:hidden"onClick={() => setMenuOpen(!menuOpen)}
                     aria-label="Toggle-Menu" >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>

          <ul className="hidden md:flex gap-6">
            <li className="hover:text-blue-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-300">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-blue-300">
              <Link href="/allproducts">All product</Link>
            </li>
            <li className="hover:text-blue-300">           
              <Link href="/cart">Cart</Link>
            </li>
            <li className="hover:text-blue-300">           
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

      
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <FiShoppingCart size={24} className="hover:text-yellow-300" aria-label="Cart" />
            </Link>
            {/* <Link href="/login"> */}
              <FiUser size={24} className="hover:text-yellow-300" aria-label="Sign-in/Login" />
            {/* </Link> */}
          </div>
        </div>

      
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-start bg-blue-800 text-white py-4 px-6 space-y-4">
            <li className="hover:text-yellow-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300">
              <Link href="/about">About</Link>
            </li>
          
            <li className="hover:text-yellow-300">
              <Link href="/allproducts">All Products</Link>
            </li>
            <li className="hover:text-yellow-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>

      <div className="border-t border-gray-400 bg-gray-100">
        <div className="container mx-auto px-6 py-2 flex overflow-x-auto space-x-6 justify-center">
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            All Products
          </div>
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Chair
          </div>
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Plant Pots
          </div>
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Ceramics
          </div>
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Table
          </div>
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Crockery
          </div>
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Tableware
          </div>
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            Cutlery
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;