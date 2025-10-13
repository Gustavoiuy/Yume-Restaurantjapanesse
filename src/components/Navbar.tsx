"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isScrolled } = useScroll();

  const redSakura = "#D7263D";
  

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-black/80 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">
          {/* Redes Sociales */}
          <div className="flex items-center space-x-4">
            {[Facebook, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = redSakura;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>

          {/* Logo centrado */}
          <div className="flex justify-center items-center space-x-3 relative overflow-hidden">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
              <Image
                src="/images/logo.JPG"
                alt="Yume Logo"
                width={100}
                height={100}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Texto YUME (oculto en móviles) */}
            <motion.h1
              className="hidden sm:flex relative text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-widest items-center text-transparent bg-clip-text bg-gradient-to-r from-[#b08e27] via-[#ffd700] to-[#b08e27] animate-golden-shine"
              whileHover={{ scale: 1.05 }}
            >
              YUME
              <style jsx>{`
                @keyframes golden-shine {
                  0% {
                    background-position: -200% center;
                  }
                  50% {
                    background-position: 200% center;
                  }
                  100% {
                    background-position: -200% center;
                  }
                }
                .animate-golden-shine {
                  background-size: 200% auto;
                  animation: golden-shine 6s linear infinite;
                }
              `}</style>
            </motion.h1>
          </div>

          {/* Menú derecho (solo escritorio) */}
          <div className="hidden lg:flex justify-end items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white transition-colors duration-300 font-medium ${
                  pathname === item.href
                    ? "text-[#b20d49]"
                    : "hover:text-[#af165b]"
                }`}
              >
                {item.name}
              </Link>
            ))}


          </div>

          {/* Botón menú móvil */}
          <div className="lg:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-transform duration-300"
            >
              {isOpen ? <X size={26} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/90 border-t border-gray-700 backdrop-blur-md"
            >
              <div className="px-3 pt-3 pb-5 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-white text-lg font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? "bg-[#D7263D]/20 text-[#D7263D]"
                        : "hover:text-[#9e1359]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

             
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
