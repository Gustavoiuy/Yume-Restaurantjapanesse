"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { services } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section className="py-24 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#0F172B] mb-2">
            Descubre Nuestras Especialidades
          </h2>
          <p className="text-gray-600 text-lg">
            Explora nuestras categorías y déjate tentar por el sabor 🍣
          </p>
        </div>
{/* Grid profesional */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
>
  {services.map((item) => (
    <motion.div
      key={item.id}
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="relative h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-[#0F172B]"
    >
      {/* Imagen de fondo */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
      />

      {/* Degradado + overlay animado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500" />

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center justify-end text-center z-10">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl font-semibold tracking-wide mb-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]"
        >
          {item.title}
        </motion.h3>

        <Link
          href={item.link}
          className="relative inline-block px-6 py-2 font-medium text-sm text-white uppercase tracking-wider rounded-full border border-[#FEA116] transition-all duration-300 group-hover:bg-[#FEA116] group-hover:text-[#0F172B] overflow-hidden"
        >
          <span className="relative z-10">Descubrir</span>
          <span className="absolute inset-0 bg-[#FEA116]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </Link>
      </div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}
