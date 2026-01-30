"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Asegúrate de tener el video en public/videos/sushi-bg.mp4 */}
          <source src="/videos/sushiyume.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
        
        {/* 2. Overlay (Capa oscura para legibilidad) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172B]/90 via-[#0F172B]/70 to-[#0F172B]/90 shadow-inner" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Disfruta de nuestras
              <br />
              <span className="text-[#c10a50]">Delicias</span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Saborea platos exquisitos en un ambiente acogedor. ¡Reserva tu mesa hoy y vive una experiencia culinaria inolvidable!
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#c10a50] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#a00842] transition-all shadow-lg shadow-red-900/20"
                >
                  Ver Menú
                </motion.button>
              </Link>
              
              <Link href="/reservacion">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Reservar Mesa
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Image (Sushi giratorio) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="relative p-2 border-2 border-dashed border-red-500/30 rounded-full"
            >
              <Image
                src="/images/rolls.jpeg"
                alt="Delicious Food"
                width={500}
                height={500}
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-full object-cover aspect-square shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-red-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
}