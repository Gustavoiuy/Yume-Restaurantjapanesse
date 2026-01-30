import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import About from '@/components/promociones/Promociones';
import BackToTop from "@/components/ui/BackToTop";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
             Promociones
            </h1>
            <div className="flex items-center justify-center text-gray-300">
              <Link
                href="/"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Home size={16} />
                <span className="ml-2">Home</span>
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <span>About</span>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Footer />
      <BackToTop />
    </main>
  );
}
