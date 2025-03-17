import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../pages/imgs/logo.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolling ? "bg-gray-400 shadow-lg" : "bg-transparent"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 ">
        {/* Logo */}
       <Image src={Logo} alt="" width={70} height={50} />

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-6 font-medium ${scrolling ? "text-gray-700" : "text-white"}`}>
          <li><a href="#" className="hover:text-gray-900">Home</a></li>
          <li><a href="#" className="hover:text-gray-900">Services</a></li>
          <li><a href="#" className="hover:text-gray-900">Projects</a></li>
          <li><a href="#" className="hover:text-gray-900">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(true)}>
          <Menu size={28} className={scrolling ? "text-gray-800" : "text-white"} />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }} // Longer transition duration
          className="fixed top-0 right-0 h-full w-3/4 bg-gray-300 shadow-lg p-6 md:hidden flex flex-col"
        >
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="self-end mb-4">
            <X size={28} className="text-gray-800" />
          </button>

          {/* Menu Items */}
          <ul className="space-y-6 text-lg font-medium text-gray-700">
            <li><a href="#" className="block hover:text-gray-900">Home</a></li>
            <li><a href="#" className="block hover:text-gray-900">Services</a></li>
            <li><a href="#" className="block hover:text-gray-900">Projects</a></li>
            <li><a href="#" className="block hover:text-gray-900">Contact</a></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
