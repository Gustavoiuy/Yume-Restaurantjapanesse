

import { Download } from "lucide-react";

export default function MenuPdf() {
  return (
    <main className="min-h-screen bg-[#FFFDF7]">
     

    
      {/* Hero Section */}
      
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
