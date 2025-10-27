import Image from "next/image";
import Link from "next/link";
import { menuData } from "@/lib/data";
import Navbar from "@/components/Navbar";
import { Download } from "lucide-react";

export default function MenuPdf() {
  return (
    <main className="min-h-screen bg-[#FFFDF7]">
     

    
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-[#0F172B] text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Descubre Nuestro Menú Completo
        </h1>
       
      </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Botón para descargar PDF */}
        <div className="text-center mt-16">
          <a
            href="/Menu.pdf"
            download
            className="inline-flex items-center gap-2 bg-[#FEA116] text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#e08f10] transition"
          >
            <Download size={20} />
            Descargar Menú Completo (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
