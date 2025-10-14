"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { promotions } from "../lib/data";

export default function PromotionsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promotions.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % promotions.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + promotions.length) % promotions.length);

  return (
    <section className="relative py-24 bg-[#0F172B] overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h5 className="text-[#FEA116] font-secondary text-lg mb-3 uppercase tracking-widest">
            Promociones Exclusivas
          </h5>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Sabores únicos, precios irresistibles
          </h2>
        </motion.div>

        {/* Carrusel principal */}
        <div className="relative flex items-center justify-center h-[650px]">
          {/* Imagen y contenido animado */}
          <AnimatePresence mode="wait">
            <motion.div
              key={promotions[current].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-full max-w-4xl mx-auto"
            >
              {/* Fondo con blur */}
              <div className="absolute inset-0">
                <Image
                  src={promotions[current].image}
                  alt={promotions[current].title}
                  fill
                  className="object-cover object-center blur-2xl opacity-30 scale-110"
                />
              </div>

              {/* Imagen principal centrada */}
              <div className="relative flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md">
                <Image
                  src={promotions[current].image}
                  alt={promotions[current].title}
                  width={450}
                  height={600}
                  className="rounded-2xl object-contain w-auto h-[600px]"
                  priority
                />
                {/* Overlay contenido */}
                <div className="absolute bottom-8 left-0 right-0 text-center px-6">
                  <div className="bg-black/50 backdrop-blur-sm inline-block rounded-full px-4 py-1 mb-3">
                    <span className="text-[#FEA116] text-xs font-semibold uppercase tracking-wider">
            
                    </span>
                  </div>
                 
               
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores inferiores */}
          <div className="absolute bottom-4 flex justify-center w-full gap-2">
            {promotions.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[#FEA116] scale-110"
                    : "bg-gray-500/40 hover:bg-gray-300/60"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
