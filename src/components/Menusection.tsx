"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dish } from "@/lib/data";
import { ChevronRight, Home,  } from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

interface MenuSectionProps {
  title: string;
  dishes: Dish[];
}

export default function MenuSection({ title, dishes }: MenuSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Función para cerrar modal al hacer click fuera
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFDF7]">
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-[#0F172B] py-16 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 capitalize">
          {title}
        </h1>
        <div className="flex items-center justify-center text-gray-300 text-sm md:text-base">
          <Link href="/" className="flex items-center hover:text-[#FEA116] transition-colors">
            <Home size={14} />
            <span className="ml-2">Inicio</span>
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-[#FEA116] capitalize">{title}</span>
        </div>
      </section>

      {/* Sección de platillos */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl cursor-pointer group"
            >
              {/* Imagen */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  onClick={() => setSelectedImage(dish.image)}
                />
              </div>

              {/* Info del platillo */}
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-[#0F172B] mb-1">
                  {dish.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{dish.desc}</p>
                <p className="text-[#FEA116] font-bold text-lg">${dish.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm px-4"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Botón cerrar */}
           

              {/* Imagen ampliada */}
              <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage}
                  alt="Vista ampliada"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
