// src/components/SamuraiParticles.tsx (Puedes crear este archivo)
import { motion, Variants } from "framer-motion";

const particlesContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 1, // Retraso entre las partículas
    },
  },
};

const particleMotion: Variants = {
  initial: { opacity: 0, y: 50, x: 0, scale: 0.5 },
  animate: (i) => ({
    opacity: [0, 0.5, 0], // Aparece y desaparece
    y: [50, -50, 50], // Movimiento vertical sutil
    x: [0, i % 2 === 0 ? 30 : -30, 0], // Movimiento horizontal sutil
    scale: [0.5, 1, 0.5],
    transition: {
      duration: 10 + Math.random() * 10, // Duración aleatoria
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 5, // Retraso inicial aleatorio
    },
  }),
};

// Genera un array de 10 'partículas'
const particles = Array.from({ length: 10 });

export const SamuraiParticles = () => (
  <motion.div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    variants={particlesContainer}
    initial="initial"
    animate="animate"
  >
    {particles.map((_, i) => (
      <motion.div
        key={i}
        variants={particleMotion}
        custom={i}
        className="absolute text-[#C83E49] opacity-0"
        style={{ 
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontSize: `${10 + Math.random() * 10}px` 
        }}
      >
        {/* Usamos un carácter japonés simple o un símbolo geométrico sutil */}
        &#9670; {/* Diamante negro sutil */}
      </motion.div>
    ))}
  </motion.div>
);